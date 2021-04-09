
//Helpers
import firstTestOutput from '../array/first-test-output';


//array of functions, return  [date object, rest of string] if valid, else false
const initialDates = [
  (dateStr) => {//looks for 'now'
    if(dateStr.startsWith('now')) {
      return [
        new Date(),
        dateStr.substr(3)
      ]
    }

    return false;
  },
  (dateStr) => {
    let res;
    if(res = dateStr.match(iso08601Regex)) {
      const [match, year, month, day, hour, minute, second, tzSign, tzHour, tzMinute, isUTC] = res;
      const hasTime = hour !== undefined;
      const timezone = (hasTime && (isUTC || (tzSign && `${tzSign}${tzHour}:${tzMinute}`))) || '';

      const timeStr = `${year}-${month}-${day}` + (hasTime ? `T${hour}:${minute}:${second}${timezone}` : '' );

      return [
        new Date(Date.parse(timeStr)),
        dateStr.substr(match.length)
      ]
    }

    return false;
  }
]

const iso08601Regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})(?:T([0-9]{2}):?([0-9]{2}):?([0-9]{2})(?:(?:([\+|\-])([0-9]{2}):([0-9]{2}))|(Z))?)?/


export default function dateParseRelative(dateStr) {
  //get the starting point
  const initial = firstTestOutput(initialDates, initial => initial(dateStr));

  if(!initial) {
    return null;//not a relative date string
  }

  const [initialDate, remainingDateStr] = initial;
  const relativeDateStr = remainingDateStr.replace(/\s+/g, '');

  //now parse the relativeDateStr
  const dateOperations = [];
  const operators = {
    '+': addOperator,
    '-': subtractOperator,
  }

  //e.g. -1years+1day
  for(let i = 0, operation = -1, units = false; i < relativeDateStr.length; i++) {
    const char = relativeDateStr.charAt(i);

    if(operators[char]) {
      dateOperations[++operation] = {
        func: operators[char],
        args: ''
      }
    } else {
      dateOperations[operation].args += char;
    }
  }

  return dateOperations.reduce((date, {func, args}) => func(date, args), initialDate);
}

function addOperator(date, args) {
  const [value, unit] = parseNumberUnitArgs(args);

  return modifyDateBy(date, value, unit);
}

function subtractOperator(date, args) {
  const [value, unit] = parseNumberUnitArgs(args);

  return modifyDateBy(date, -value, unit);
}

function parseNumberUnitArgs(args) {
  const value = parseInt(args);

  const unit = args.substr(value.toString().length);

  return [value, unit];
}

function modifyDateBy(date, value, unit) {
  date = new Date(date);

  switch(unit.toLowerCase()) {
    case 'year':
    case 'years':
      date.setFullYear(date.getFullYear() + value)
      break;
    case 'month':
    case 'months':
      date.setMonth(date.getMonth() + value)
      break;
    case 'week':
    case 'weeks':
      date.setDate(date.getDate() + (value * 7))
      break;
    case 'day':
    case 'days':
      date.setDate(date.getDate() + value)
      break;
    case 'hour':
    case 'hours':
      date.setHour(date.getHour() + value)
      break;
    case 'minute':
    case 'minutes':
      date.setMinute(date.getMinute() + value)
      break;
    case 'second':
    case 'seconds':
      date.setSecond(date.getSecond() + value)
      break;
  }

  return date;
}

//TODO make these proper unit tests
// const tests = [
//   '2020-12-22-1 year',
//   'now-1 years',
//   '2020-12-22T12:00:00-1year+3days',
//   '2020-12-22T12:14:07+1year+3days',
//   '2020-12-22T12:03:30Z-1year+3days',
//   '2020-12-22T120010Z-1year+3days',
//   '2020-12-22T12:00:00+01:00-1year+3days',
//   '2020-12-22T120000+01:00-1year+3days'
// ]
//
// const results = tests.map(dateParseRelative);
// console.log(tests, results)
