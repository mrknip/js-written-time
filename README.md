js-written-time

Takes a time of format HH:mm and turns it into locale-specific natural language representation of clock time

```
getWrittenTime('1:10') => ten past one
getWrittenTime('1:15') => quarter past one
getWrittenTime('12:00') => midday
getWrittenTime('15:45') => quarter to four
getWrittenTime('15:50', { showDayPeriod: true }) => 'ten to four in the afternoon'
getWrittenTime('13:30', { language: 'de' }) => 'halb zwei'
```

### Options

All passed as second parameter, e.g. `getWrittenTime('1:20', {
  language: 'de',
})`;


|prop               |default|description                                                                                  |
|-------------------|-------|---------------------------------------------------------------------------------------------|
|language           |'en'   |The language in which to display the output.                                                 |
|isAtStartOfSentence|false  |If true will format the output appropriately                                                 |
|showDayPeriod      |false  |If true will add information to 12 hour output (e.g. '12.50' => 'ten to one in the afternoon'|
