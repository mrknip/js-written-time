module.exports = function parseLocale(locale) {
  if (locale.indexOf('-') === -1) {
    return locale;
  }

  return locale.split('-')[0];
};
