"use strict";
(() => {
  // node_modules/date-fns/esm/_lib/toInteger/index.js
  function toInteger(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }
    var number = Number(dirtyNumber);
    if (isNaN(number)) {
      return number;
    }
    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  // node_modules/date-fns/esm/_lib/requiredArgs/index.js
  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
    }
  }

  // node_modules/date-fns/esm/toDate/index.js
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof2(obj2) {
        return typeof obj2;
      };
    } else {
      _typeof = function _typeof2(obj2) {
        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      };
    }
    return _typeof(obj);
  }
  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument);
    if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
      return new Date(argument.getTime());
    } else if (typeof argument === "number" || argStr === "[object Number]") {
      return new Date(argument);
    } else {
      if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
        console.warn(new Error().stack);
      }
      return new Date(NaN);
    }
  }

  // node_modules/date-fns/esm/addDays/index.js
  function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger(dirtyAmount);
    if (isNaN(amount)) {
      return new Date(NaN);
    }
    if (!amount) {
      return date;
    }
    date.setDate(date.getDate() + amount);
    return date;
  }

  // node_modules/date-fns/esm/isSunday/index.js
  function isSunday(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getDay() === 0;
  }

  // node_modules/date-fns/esm/isSaturday/index.js
  function isSaturday(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getDay() === 6;
  }

  // node_modules/date-fns/esm/startOfDay/index.js
  function startOfDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  // node_modules/date-fns/esm/addWeeks/index.js
  function addWeeks(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger(dirtyAmount);
    var days = amount * 7;
    return addDays(dirtyDate, days);
  }

  // node_modules/date-fns/esm/isSameDay/index.js
  function isSameDay(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
    var dateRightStartOfDay = startOfDay(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
  }

  // node_modules/date-fns/esm/getDay/index.js
  function getDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var day = date.getDay();
    return day;
  }

  // node_modules/date-fns/esm/lastDayOfMonth/index.js
  function lastDayOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  // node_modules/date-fns/esm/getYear/index.js
  function getYear(dirtyDate) {
    requiredArgs(1, arguments);
    return toDate(dirtyDate).getFullYear();
  }

  // node_modules/date-fns/esm/setDate/index.js
  function setDate(dirtyDate, dirtyDayOfMonth) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var dayOfMonth = toInteger(dirtyDayOfMonth);
    date.setDate(dayOfMonth);
    return date;
  }

  // src/utils.ts
  function getFirstOccurence(date, dayOfWeekIndex) {
    return getNextOccurence(setDate(date, 1), dayOfWeekIndex);
  }
  function getNextOccurence(date, dayOfWeekIndex) {
    if (getDay(date) === dayOfWeekIndex) {
      return date;
    }
    if (getDay(date) > dayOfWeekIndex) {
      date = addDays(date, 7 - getDay(date) + dayOfWeekIndex);
    } else {
      date = addDays(date, dayOfWeekIndex - getDay(date));
    }
    return date;
  }
  function getPrevOccurence(date, dayOfWeekIndex) {
    if (getDay(date) === dayOfWeekIndex) {
      return date;
    }
    if (getDay(date) > dayOfWeekIndex) {
      date = addDays(date, -1 * (getDay(date) - dayOfWeekIndex));
    } else {
      date = addDays(date, -1 * (getDay(date) - 0 + (7 - dayOfWeekIndex)));
    }
    return date;
  }
  function getLastOfMonth(date, dayOfWeekIndex) {
    return getPrevOccurence(lastDayOfMonth(date), dayOfWeekIndex);
  }

  // src/index.ts
  function getHalloween(year) {
    return new Date(year, 9, 31);
  }
  function getValentinesDay(year) {
    return new Date(year, 1, 14);
  }
  function getMothersDay(year) {
    return addWeeks(getFirstOccurence(new Date(year, 4), 0), 1);
  }
  function getJuneteenth(year) {
    return new Date(year, 5, 19);
  }
  function getEaster(year) {
    if (year < 325) {
      throw new RangeError("Cannot calculate Easter dates before 325 AD.");
    }
    function mod(a2, b2) {
      return a2 % b2;
    }
    function div(a2, b2) {
      const q = a2 / b2;
      if (q < 0) {
        throw new Error("Unexpected negative q");
      }
      return Math.floor(q);
    }
    const y = year, skipMarchDays = 21, a = mod(y, 19), b = div(y, 100), c = mod(y, 100), d = div(b, 4), e = mod(b, 4), f = div(b + 8, 25), g = div(b - f + 1, 3), h = mod(19 * a + b - d - g + 15, 30), i = div(c, 4), k = mod(c, 4), l = mod(32 + 2 * e + 2 * i - h - k, 7), m = div(a + 11 * h + 22 * l, 451), t = h + l - 7 * m + skipMarchDays, n = div(t, 31) + 3, p = mod(t, 31);
    return new Date(year, n - 1, p + 1);
  }
  function getColumbusDay(year) {
    return addWeeks(getFirstOccurence(new Date(year, 9), 1), 1);
  }
  function getIndependenceDay(year) {
    return new Date(year, 6, 4);
  }
  function getPresidentsDay(year) {
    return addWeeks(getFirstOccurence(new Date(year, 1), 1), 2);
  }
  function getChristmas(year) {
    return new Date(year, 11, 25);
  }
  function getLaborDay(year) {
    return getFirstOccurence(new Date(year, 8), 1);
  }
  function getVeteransDay(year) {
    return new Date(year, 10, 11);
  }
  function getThanksgiving(year) {
    return addWeeks(getFirstOccurence(new Date(year, 10), 4), 3);
  }
  function getNewYearsEve(year) {
    return lastDayOfMonth(new Date(year, 11));
  }
  function getMartinLutherKingJrDay(year) {
    return addWeeks(getFirstOccurence(new Date(year, 0), 1), 2);
  }
  function getNewYearsDay(year) {
    return new Date(year, 0, 1);
  }
  function getFathersDay(year) {
    return addWeeks(getFirstOccurence(new Date(year, 5), 0), 2);
  }
  function getMemorialDay(year) {
    return getLastOfMonth(new Date(year, 4), 1);
  }
  function getGoodFriday(year) {
    return addDays(getEaster(year), -2);
  }
  function getHolidays(year) {
    return {
      newYearsDay: {
        date: getNewYearsDay(year),
        bankHoliday: true,
        federal: true
      },
      martinLutherKingJrDay: {
        date: getMartinLutherKingJrDay(year),
        bankHoliday: true,
        federal: true
      },
      valentinesDay: {
        date: getValentinesDay(year),
        bankHoliday: false,
        federal: false
      },
      juneteenth: {
        date: getJuneteenth(year),
        bankHoliday: year < 2022 ? false : true,
        federal: true
      },
      easter: {
        date: getEaster(year),
        bankHoliday: false,
        federal: false
      },
      presidentsDay: {
        date: getPresidentsDay(year),
        bankHoliday: true,
        federal: false
      },
      memorialDay: {
        date: getMemorialDay(year),
        bankHoliday: true,
        federal: true
      },
      independenceDay: {
        date: getIndependenceDay(year),
        bankHoliday: true,
        federal: true
      },
      laborDay: {
        date: getLaborDay(year),
        bankHoliday: true,
        federal: true
      },
      goodFriday: {
        date: getGoodFriday(year),
        bankHoliday: false,
        federal: false
      },
      mothersDay: {
        date: getMothersDay(year),
        bankHoliday: false,
        federal: false
      },
      columbusDay: {
        date: getColumbusDay(year),
        bankHoliday: true,
        federal: true
      },
      halloween: {
        date: getHalloween(year),
        bankHoliday: false,
        federal: false
      },
      fathersDay: {
        date: getFathersDay(year),
        bankHoliday: false,
        federal: false
      },
      veteransDay: {
        date: getVeteransDay(year),
        bankHoliday: true,
        federal: true
      },
      thanksgiving: {
        date: getThanksgiving(year),
        bankHoliday: true,
        federal: true
      },
      christmas: {
        date: getChristmas(year),
        bankHoliday: true,
        federal: true
      },
      newYearsEve: {
        date: getNewYearsEve(year),
        bankHoliday: false,
        federal: false
      }
    };
  }
  function getBankHolidays(year) {
    const holidays = getHolidays(year);
    return Object.keys(holidays).reduce((acc, holidayName) => {
      const holiday = holidays[holidayName];
      if (holiday.bankHoliday) {
        return {
          ...acc,
          [holidayName]: {
            date: holiday.date
          }
        };
      }
      return acc;
    }, {});
  }
  function getFederalHolidays(year) {
    const holidays = getHolidays(year);
    return Object.keys(holidays).reduce((acc, holidayName) => {
      const holiday = holidays[holidayName];
      if (holiday.federal) {
        return {
          ...acc,
          [holidayName]: {
            date: holiday.date
          }
        };
      }
      return acc;
    }, {});
  }
  function getObservedHolidays(year) {
    const holidays = getHolidays(year);
    return Object.keys(holidays).filter((holidayName) => {
      if (holidays[holidayName].federal)
        return true;
      return false;
    }).reduce((acc, holidayName) => {
      const holiday = holidays[holidayName];
      if (isSaturday(holiday.date)) {
        return {
          ...acc,
          [holidayName]: {
            date: addDays(holiday.date, -1)
          }
        };
      }
      if (isSunday(holiday.date)) {
        return {
          ...acc,
          [holidayName]: {
            date: addDays(holiday.date, 1)
          }
        };
      }
      return acc;
    }, {});
  }
  function isInHolidayList(date, getHolidayList) {
    const holidays = getHolidayList(getYear(date));
    return Object.keys(holidays).filter((holidayName) => {
      return isSameDay(date, holidays[holidayName].date);
    }).length > 0;
  }
  function isHoliday(date) {
    return isInHolidayList(date, getHolidays);
  }
  function isFederalHoliday(date) {
    return isInHolidayList(date, getFederalHolidays);
  }
  function isBankHoliday(date) {
    return isInHolidayList(date, getBankHolidays);
  }
})();
//# sourceMappingURL=index.global.js.map