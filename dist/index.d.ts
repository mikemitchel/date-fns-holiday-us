declare type Holiday = "christmas" | "easter" | "halloween" | "valentinesDay" | "mothersDay" | "columbusDay" | "independenceDay" | "presidentsDay" | "laborDay" | "veteransDay" | "thanksgiving" | "newYearsEve" | "martinLutherKingJrDay" | "newYearsDay" | "fathersDay" | "memorialDay" | "goodFriday" | "juneteenth";
declare function getHalloween(year: number): Date;
declare function getValentinesDay(year: number): Date;
declare function getMothersDay(year: number): Date;
declare function getJuneteenth(year: number): Date;
declare function getEaster(year: number): Date;
declare function getColumbusDay(year: number): Date;
declare function getIndependenceDay(year: number): Date;
declare function getPresidentsDay(year: number): Date;
declare function getChristmas(year: number): Date;
declare function getLaborDay(year: number): Date;
declare function getVeteransDay(year: number): Date;
declare function getThanksgiving(year: number): Date;
declare function getNewYearsEve(year: number): Date;
declare function getMartinLutherKingJrDay(year: number): Date;
declare function getNewYearsDay(year: number): Date;
declare function getFathersDay(year: number): Date;
declare function getMemorialDay(year: number): Date;
declare function getGoodFriday(year: number): Date;
declare type Holidays = {
    [K in Holiday]: {
        date: Date;
        bankHoliday: boolean;
        federal: boolean;
    };
};
declare function getHolidays(year: number): Holidays;
declare function getBankHolidays(year: number): {
    [key: string]: {
        date: Date;
    };
};
declare function getFederalHolidays(year: number): {
    [key: string]: {
        date: Date;
    };
};
declare function getObservedHolidays(year: number): Record<string, Record<"date", Date>>;
declare function isInHolidayList(date: Date, getHolidayList: (year: number) => {
    [key: string]: {
        date: Date;
    };
}): boolean;
declare function isHoliday(date: Date): boolean;
declare function isFederalHoliday(date: Date): boolean;
declare function isBankHoliday(date: Date): boolean;

export { Holiday, Holidays, getBankHolidays, getChristmas, getColumbusDay, getEaster, getFathersDay, getFederalHolidays, getGoodFriday, getHalloween, getHolidays, getIndependenceDay, getJuneteenth, getLaborDay, getMartinLutherKingJrDay, getMemorialDay, getMothersDay, getNewYearsDay, getNewYearsEve, getObservedHolidays, getPresidentsDay, getThanksgiving, getValentinesDay, getVeteransDay, isBankHoliday, isFederalHoliday, isHoliday, isInHolidayList };
