const en = require('./repo/en');
const de = require('./repo/de');
const pt = require('./repo/pt');

const repos = {
  en: en,
  de: de,
  pt: pt,
};

/**
 * @param  {string} input   string, format HH:mm
 * @param  {object} options language, isAtStartOfSentence, showDayRegion
 * @return {string}         string
 */
function getWrittenTime (input, options) {
  if (!input || input === '') return '';

  const isAtStartOfSentence = options && options.isAtStartOfSentence;
  const showDayRegion = options && options.showDayRegion;
  const language = options && options.language ? options.language : 'en';
  const repo = repos[language];

  const formatters = repo.formatters;
  const timeElements = input.split(':');
  const hoursInput = timeElements[0];
  const minutesInput = timeElements[1] || 0;

  const rawHours = parseInt(hoursInput, 10);
  const hours = rawHours > 12 ? rawHours - 12 : rawHours;
  const minutes = parseInt(minutesInput, 10);

  if (!hours || hours > 24) return '';
  if (isNaN(hours) || isNaN(minutes)) return '';

  const exceptions = formatters.exceptions || [];

  function getBaseNumber(number, options) {
    const nextHour = options && options.nextHour;
    const gender = options && options.gender;

    const numbers = gender ? repo.baseNumbers[gender] : repo.baseNumbers;

    const adjustedNumber = nextHour ? number + 1 : number;
    const baseNumber = numbers[adjustedNumber];

    if (!baseNumber) {
      const units = adjustedNumber % 10;
      const tens = Math.floor(adjustedNumber / 10) * 10;

      return numbers[tens] + repo.numberElements.connector + numbers[units];
    }

    return baseNumber;
  }

  let formatter;
  exceptions.forEach(function (exception) {
    if (exception.test(hours, minutes)) {
      formatter = exception.formatter;
    }
  });

  if (!formatter) {
    if (minutes === 0) {
      formatter = formatters.onTheHour;
    } else if (minutes === 15) {
      formatter = formatters.quarterPast;
    } else if (minutes === 30) {
      formatter = formatters.halfPast;
    } else if (minutes === 45) {
      formatter = formatters.quarterTo;
    }
  }

  if (!formatter) {
    if (minutes < 30) {
      formatter = formatters.xPast;
    } else {
      formatter = formatters.xTo;
    }
  }

  let string = formatter(hours, minutes, getBaseNumber);

  if (showDayRegion) {
    string = formatters.dayRegions(rawHours, minutes, string);
  }

  if (isAtStartOfSentence) {
    return string.replace(/^./, function (letter) {
      return letter.toUpperCase();
    });
  }

  return string;
}



module.exports = {
  getWrittenTime
};
