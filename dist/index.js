"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  getBankHolidays: () => getBankHolidays,
  getChristmas: () => getChristmas,
  getColumbusDay: () => getColumbusDay,
  getEaster: () => getEaster,
  getFathersDay: () => getFathersDay,
  getFederalHolidays: () => getFederalHolidays,
  getGoodFriday: () => getGoodFriday,
  getHalloween: () => getHalloween,
  getHolidays: () => getHolidays,
  getIndependenceDay: () => getIndependenceDay,
  getJuneteenth: () => getJuneteenth,
  getLaborDay: () => getLaborDay,
  getMartinLutherKingJrDay: () => getMartinLutherKingJrDay,
  getMemorialDay: () => getMemorialDay,
  getMothersDay: () => getMothersDay,
  getNewYearsDay: () => getNewYearsDay,
  getNewYearsEve: () => getNewYearsEve,
  getObservedHolidays: () => getObservedHolidays,
  getPresidentsDay: () => getPresidentsDay,
  getThanksgiving: () => getThanksgiving,
  getValentinesDay: () => getValentinesDay,
  getVeteransDay: () => getVeteransDay,
  isBankHoliday: () => isBankHoliday,
  isFederalHoliday: () => isFederalHoliday,
  isHoliday: () => isHoliday,
  isInHolidayList: () => isInHolidayList
});
module.exports = __toCommonJS(src_exports);
var import_date_fns2 = require("date-fns");

// src/utils.ts
var import_date_fns = require("date-fns");
function getFirstOccurence(date, dayOfWeekIndex) {
  return getNextOccurence((0, import_date_fns.setDate)(date, 1), dayOfWeekIndex);
}
function getNextOccurence(date, dayOfWeekIndex) {
  if ((0, import_date_fns.getDay)(date) === dayOfWeekIndex) {
    return date;
  }
  if ((0, import_date_fns.getDay)(date) > dayOfWeekIndex) {
    date = (0, import_date_fns.addDays)(date, 7 - (0, import_date_fns.getDay)(date) + dayOfWeekIndex);
  } else {
    date = (0, import_date_fns.addDays)(date, dayOfWeekIndex - (0, import_date_fns.getDay)(date));
  }
  return date;
}
function getPrevOccurence(date, dayOfWeekIndex) {
  if ((0, import_date_fns.getDay)(date) === dayOfWeekIndex) {
    return date;
  }
  if ((0, import_date_fns.getDay)(date) > dayOfWeekIndex) {
    date = (0, import_date_fns.addDays)(date, -1 * ((0, import_date_fns.getDay)(date) - dayOfWeekIndex));
  } else {
    date = (0, import_date_fns.addDays)(date, -1 * ((0, import_date_fns.getDay)(date) - 0 + (7 - dayOfWeekIndex)));
  }
  return date;
}
function getLastOfMonth(date, dayOfWeekIndex) {
  return getPrevOccurence((0, import_date_fns.lastDayOfMonth)(date), dayOfWeekIndex);
}

// src/index.ts
function getHalloween(year) {
  return new Date(year, 9, 31);
}
function getValentinesDay(year) {
  return new Date(year, 1, 14);
}
function getMothersDay(year) {
  return (0, import_date_fns2.addWeeks)(getFirstOccurence(new Date(year, 4), 0), 1);
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
  return (0, import_date_fns2.addWeeks)(getFirstOccurence(new Date(year, 9), 1), 1);
}
function getIndependenceDay(year) {
  return new Date(year, 6, 4);
}
function getPresidentsDay(year) {
  return (0, import_date_fns2.addWeeks)(getFirstOccurence(new Date(year, 1), 1), 2);
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
  return (0, import_date_fns2.addWeeks)(getFirstOccurence(new Date(year, 10), 4), 3);
}
function getNewYearsEve(year) {
  return (0, import_date_fns2.lastDayOfMonth)(new Date(year, 11));
}
function getMartinLutherKingJrDay(year) {
  return (0, import_date_fns2.addWeeks)(getFirstOccurence(new Date(year, 0), 1), 2);
}
function getNewYearsDay(year) {
  return new Date(year, 0, 1);
}
function getFathersDay(year) {
  return (0, import_date_fns2.addWeeks)(getFirstOccurence(new Date(year, 5), 0), 2);
}
function getMemorialDay(year) {
  return getLastOfMonth(new Date(year, 4), 1);
}
function getGoodFriday(year) {
  return (0, import_date_fns2.addDays)(getEaster(year), -2);
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
    if ((0, import_date_fns2.isSaturday)(holiday.date)) {
      return {
        ...acc,
        [holidayName]: {
          date: (0, import_date_fns2.addDays)(holiday.date, -1)
        }
      };
    }
    if ((0, import_date_fns2.isSunday)(holiday.date)) {
      return {
        ...acc,
        [holidayName]: {
          date: (0, import_date_fns2.addDays)(holiday.date, 1)
        }
      };
    }
    return acc;
  }, {});
}
function isInHolidayList(date, getHolidayList) {
  const holidays = getHolidayList((0, import_date_fns2.getYear)(date));
  return Object.keys(holidays).filter((holidayName) => {
    return (0, import_date_fns2.isSameDay)(date, holidays[holidayName].date);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getBankHolidays,
  getChristmas,
  getColumbusDay,
  getEaster,
  getFathersDay,
  getFederalHolidays,
  getGoodFriday,
  getHalloween,
  getHolidays,
  getIndependenceDay,
  getJuneteenth,
  getLaborDay,
  getMartinLutherKingJrDay,
  getMemorialDay,
  getMothersDay,
  getNewYearsDay,
  getNewYearsEve,
  getObservedHolidays,
  getPresidentsDay,
  getThanksgiving,
  getValentinesDay,
  getVeteransDay,
  isBankHoliday,
  isFederalHoliday,
  isHoliday,
  isInHolidayList
});
//# sourceMappingURL=index.js.map