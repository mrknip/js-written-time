module.exports = {
  baseNumbers: {
    masculine: {
      '0': 'zero',
      '1': 'um',
      '2': 'dois',
      '3': 'três',
      '4': 'quatro',
      '5': 'cinco',
      '6': 'seis',
      '7': 'sete',
      '8': 'oito',
      '9': 'nove',
      '10': 'dez',
      '11': 'onze',
      '12': 'doze',
      '13': 'treze',
      '14': 'catorze',
      '15': 'quinze',
      '16': 'dezesseis',
      '17': 'dezessete',
      '18': 'dezoito',
      '19': 'dezenove',
      '20': 'vinte',
      '30': 'trinta',
      '40': 'quarenta',
      '50': 'cinquenta',
    },

    feminine: {
      '0': 'zero',
      '1': 'uma',
      '2': 'duas',
      '3': 'três',
      '4': 'quatro',
      '5': 'cinco',
      '6': 'seis',
      '7': 'sete',
      '8': 'oito',
      '9': 'nove',
      '10': 'dez',
      '11': 'onze',
      '12': 'doze',
      '13': 'treze',
      '14': 'catorze',
      '15': 'quinze',
      '16': 'dezesseis',
      '17': 'dezessete',
      '18': 'dezoito',
      '19': 'dezenove',
      '20': 'vinte',
      '30': 'trinta',
      '40': 'quarenta',
      '50': 'cinquenta',
    }
  },
  numberElements: {
    connector: ' e ',
  },
  // Hard coding these as they are common enough to be used in >1 language
  formatters: {
    onTheHour: function (hours, minutes, getNumberString) {
      const hourString = hours === 1 ? ' hora' : ' horas';
      return getNumberString(hours, { gender: 'feminine'}) + hourString; // pluraalisation a
    },

    xPast: function (hours, minutes, getNumberString) {
      return getNumberString(hours, { gender: 'feminine' }) + ' e ' + getNumberString(minutes, { gender: 'masculine' });
    },

    xTo: function (hours, minutes, getNumberString) {
      return getNumberString(60 - minutes, { gender: 'masculine' }) + ' para as ' + getNumberString(hours, { nextHour: true, gender: 'feminine' });
    },

    halfPast: function (hours, minutes, getNumberString) {
      return getNumberString(hours, { gender: 'feminine' }) + ' e meia';
    },

    dayRegions: function (hours, minutes, timeString) {
      if (hours <= 12) {
        return timeString + ' da manhã';
      }

      if (hours <= 18) {
        return timeString + ' da tarde';
      }

      return timeString + ' da noite';
    }
  }
};
