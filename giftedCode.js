const YMD = 'yyyy-mm-dd';
const MDY = 'mm-dd-yyyy';
const DMY = 'dd-mm-yyyy';
const invalidFormatMsg = 'invalid format';
const invalidDateFormatMsg = 'date not according to format';
const invalidYearMsg = 'invalid year';
const invalidMonthMsg = 'invalid month';
const invalidDayMsg = 'invalid day';

function isDateFormatValid(format, date) {
  if (format === MDY || format === DMY) {
    if ((date.length !== format.length || date[2] !== '-' && date[5] !== '-')) {
      return false;
    }
  } else if ((date[4] !== '-' && date[7] !== '-' && (date.length === format.length))) {
    return false;
  }

  for (let index = 0; index < date.length; index++) {
    if (date[index] === " ") {
      return false;
    }
  }

  const day = getDay(date, format);
  const month = getMonth(date, format);
  const year = getYear(date, format);

  return day + month + year;
}

function maxDaysInMonth(month, year) {

  const isLeapYear = year % 400 || (year % 4 && !year % 100);

  if (month === 2) {
    return isLeapYear ? 29 : 28;
  }

  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  }

  return 31;
}

function getDay(date, format) {
  let day = +(date[0] + date[1]);

  if (format === MDY) {
    day = +(date[3] + date[4]);
  }

  if (format === YMD) {
    day = +(date[5] + date[6]);
  }

  return day;
}

function getMonth(date, format) {
  let month = +(date[3] + date[4]);

  if (format === MDY) {
    month = +(date[0] + date[1]);
  }

  if (format === YMD) {
    month = +(date[5] + date[6]);
  }

  return month;
}

function getYear(date, format) {
  let year = +(date[6] + date[7] + date[8] + date[9]);

  if (format === YMD) {
    year = +(date[0] + date[1] + date[2] + date[3]);
  }

  return year;
}

function isDayValid(format, date) {
  const day = getDay(date, format);
  const month = getMonth(date, format);
  const year = getYear(date, format);

  return day > 0 && day <= maxDaysInMonth(month, year);
}

function isYearValid(format, date) {
  const year = getYear(date, format);

  return (year > 0 && year < 10000);
}

function isMonthValid(format, date) {
  const month = getMonth(date, format);

  return (month > 0 && month < 13);
}

//main function
function validate(format, date) {
  const validFormat = format === YMD || format === MDY || format === DMY;

  if (!validFormat) {
    return invalidFormatMsg;
  }

  if (!isDateFormatValid(format, date)) {
    return invalidDateFormatMsg;
  }

  if (!isYearValid(format, date)) {
    return invalidYearMsg;
  }

  if (!isMonthValid(format, date)) {
    return invalidMonthMsg;
  }

  if (!isDayValid(format, date)) {
    return invalidDayMsg;
  }

  return 'valid';
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-20209', 'date not according to format');
  testValidate('mm-dd-yyyy', '01- 1-2020', 'date not according to format');
  testValidate('yyyy-mm-dd', '2020 01 01', 'date not according to format');
  testValidate('yyyy-mm-dd', '2020/01/01', 'date not according to format');
  testValidate('dd-mm-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('yyyy-mm-dd', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '02-6@-2012', 'date not according to format');
  testValidate('mm-dd-yyyy', '13-01-001a', 'date not according to format');
  testValidate('yyyy-mm-dd', 'yyyy-01-01', 'date not according to format');

  testValidate('mm-dd-yyyy', '13-01-2012', 'invalid month');
  testValidate('mm-dd-yyyy', '00-01-2012', 'invalid month');
  testValidate('yyyy-mm-dd', '2012-13-12', 'invalid month');
  testValidate('yyyy-mm-dd', '2012-00-12', 'invalid month');
  testValidate('dd-mm-yyyy', '13-13-2012', 'invalid month');
  testValidate('dd-mm-yyyy', '13-00-2012', 'invalid month');

  testValidate('mm-dd-yyyy', '02-29-2012', 'valid');
  testValidate('mm-dd-yyyy', '02-28-2011', 'valid');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');

  testValidate('mm-dd-yyyy', '02-00-2012', 'invalid day');
  testValidate('mm-dd-yyyy', '02-60-2012', 'invalid day');
  testValidate('mm-dd-yyyy', '01-60-2012', 'invalid day');

  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');

  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-60-0000', 'invalid year');
  testValidate(YMD, '0000-26-28', 'invalid year');
  testValidate(DMY, '00-26-0000', 'invalid year');
}

testAll();