js-written-time

Takes a time of format HH:mm and turns it into locale-specific natural language representation of clock time

```
writtenTime('1:10') => ten past one
writtenTime('1:15') => quarter past one
writtenTime('12:00') => midday
writtenTime('15:45') => quarter to four
writtenTime('15:50', {
  showDayPeriod: true
}) => 'ten to four in the afternoon'
writtenTime('13:30', {
  locale: 'fr'
}) => 'une heure et demi'
```

