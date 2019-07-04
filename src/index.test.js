const expect = require('chai').expect;
const getWrittenTime = require('.').getWrittenTime;

describe('getWrittenTime', function () {
  it('handles padded minutes', function () {
    expect(getWrittenTime('1:05')).to.equal('five past one');
  });

  it('returns an empty string for invalid input', function () {
    expect(getWrittenTime()).to.equal('');
    expect(getWrittenTime('')).to.equal('');
    expect(getWrittenTime('BEES!')).to.equal('');
    expect(getWrittenTime('12:MOREBEES!')).to.equal('');
    expect(getWrittenTime('245:34')).to.equal('');
  });

  it('handles units without explict base numbers defined', function () {
    expect(getWrittenTime('1:26')).to.equal('twenty-six past one');
    expect(getWrittenTime('1:36')).to.equal('twenty-four to two');
  });

  describe('en', function () {
    it('handles on the hour', function () {
      expect(getWrittenTime('1:00')).to.equal('one o\'clock');
    });

    it('handles x past the hour', function () {
      expect(getWrittenTime('1:10')).to.equal('ten past one');
    });

    it('handles quarter past the hour', function () {
      expect(getWrittenTime('1:15')).to.equal('quarter past one');
    });

    it('handles half past the hour', function () {
      expect(getWrittenTime('1:30')).to.equal('half past one');
    });

    it('handles x to the hour', function () {
      expect(getWrittenTime('1:50')).to.equal('ten to two');
    });

    it('handles quarter to the hour', function () {
      expect(getWrittenTime('1:45')).to.equal('quarter to two');
    });

    it('uses 12 hour system', function () {
      expect(getWrittenTime('13:45')).to.equal('quarter to two');
    });

    it('isAtStartOfSentence: true - capitalises if at start of sentence', function () {
      expect(getWrittenTime('1:26', {
        isAtStartOfSentence: true,
      })).to.equal('Twenty-six past one');
    });

    it('showDayRegion: true - shows the time of day', function () {
      expect(getWrittenTime('1:26', { showDayRegion: true })).to.equal('twenty-six past one in the morning');
      expect(getWrittenTime('13:26', { showDayRegion: true })).to.equal('twenty-six past one in the afternoon');
      expect(getWrittenTime('20:26', { showDayRegion: true })).to.equal('twenty-six past eight in the evening');
    });
  });

  describe('de', function () {
    const options = { language: 'de' };
    it('handles on the hour', function () {
      expect(getWrittenTime('1:00', options)).to.equal('ein Uhr');
    });

    it('handles x past the hour', function () {
      expect(getWrittenTime('1:10', options)).to.equal('zehn nach ein');
    });

    it('handles quarter past the hour', function () {
      expect(getWrittenTime('1:15', options)).to.equal('Viertel nach ein');
    });

    it('handles half past the hour', function () {
      expect(getWrittenTime('1:30', options)).to.equal('Halb zwei');
    });

    it('handles 20 - 40 mins past the hour', function () {
      expect(getWrittenTime('1:21', options)).to.equal('neun vor halb zwei');
      expect(getWrittenTime('1:38', options)).to.equal('acht nach halb zwei');
    });

    it('handles x to the hour', function () {
      expect(getWrittenTime('1:50', options)).to.equal('zehn vor zwei');
    });

    it('handles quarter to the hour', function () {
      expect(getWrittenTime('1:45', options)).to.equal('Viertel vor zwei');
    });

    it('uses 12 hour system', function () {
      expect(getWrittenTime('14:00', options)).to.equal('zwei Uhr');
    });

    it('isAtStartOfSentence: true - capitalises if at start of sentence', function () {
      expect(getWrittenTime('1:26', {
        language: 'de',
        isAtStartOfSentence: true,
      })).to.equal('Vier vor halb zwei');
    });

    it('showDayRegion: true - does not affect output', function () {
      expect(getWrittenTime('1:26', { language: 'de', showDayRegion: true })).to.equal('vier vor halb zwei');
    });
  });

  describe('pt', function () {
    const options = { language: 'pt' };
    it('handles complex minutes', function () {
      expect(getWrittenTime('1:26', options)).to.equal('uma e vinte e seis');
    });

    it('handles complex minutes', function () {
      expect(getWrittenTime('1:26', options)).to.equal('uma e vinte e seis');
    });
    it('handles on the hour', function () {
      expect(getWrittenTime('1:00', options)).to.equal('uma hora');
      expect(getWrittenTime('2:00', options)).to.equal('duas horas');
    });

    it('handles x past the hour', function () {
      expect(getWrittenTime('1:10', options)).to.equal('uma e dez');
    });

    it('handles quarter past the hour', function () {
      expect(getWrittenTime('1:15', options)).to.equal('uma e quinze');
    });

    it('handles half past the hour', function () {
      expect(getWrittenTime('1:30', options)).to.equal('uma e meia');
    });

    it('handles x to the hour', function () {
      expect(getWrittenTime('1:50', options)).to.equal('dez para as duas');
    });

    it('handles quarter to the hour', function () {
      expect(getWrittenTime('1:45', options)).to.equal('quinze para as duas');
    });

    it('uses 12 hour system', function () {
      expect(getWrittenTime('14:00', options)).to.equal('duas horas');
    });

    it('isAtStartOfSentence: true - capitalises if at start of sentence', function () {
      expect(getWrittenTime('1:26', {
        language: 'pt',
        isAtStartOfSentence: true,
      })).to.equal('Uma e vinte e seis');
    });

    it('showDayRegion: true - shows the time of day', function () {
      expect(getWrittenTime('1:26', { language: 'pt', showDayRegion: true })).to.equal('uma e vinte e seis da manhã');
      expect(getWrittenTime('13:26', { language: 'pt', showDayRegion: true })).to.equal('uma e vinte e seis da tarde');
      expect(getWrittenTime('20:26', { language: 'pt', showDayRegion: true })).to.equal('oito e vinte e seis da noite');
    });
  });
});
