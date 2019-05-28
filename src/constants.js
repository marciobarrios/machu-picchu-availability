const URL = "https://www.machupicchu.gob.pe/consulta/disponibilidad";
const WIDTH = 1024;
const HEIGHT = 800;

// Date
const CURRENT_YEAR = new Date().getFullYear();
const CURRENT_MONTH = new Date().getMonth();

// Selectors
const DAY_CONTAINER = ".day";
const ROUTE_FORM = "#slRuta";
const MONTH_FORM = "#slMes";
const DAY_NAME = ".numerodia";
const DAY_VALUE = ".daybody";
const ERROR = ".error-message";
const LINK_TO_HOME = "#main a";
const SUBMIT = "#fDisponibilidad button";

// Form options
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ROUTES = [
  {
    option: 100,
    name: "Machupicchu - A partir de las 6:00",
  },
  {
    option: 101,
    name: "Machupicchu - A partir de las 7:00",
  },
  {
    option: 102,
    name: "Machupicchu - A partir de las 8:00",
  },
  {
    option: 103,
    name: "Machupicchu - A partir de las 9:00",
  },
  {
    option: 104,
    name: "Machupicchu - A partir de las 10:00",
  },
  {
    option: 105,
    name: "Machupicchu - A partir de las 11:00",
  },
  {
    option: 106,
    name: "Machupicchu - A partir de las 12:00",
  },
  {
    option: 107,
    name: "Machupicchu - A partir de las 13:00",
  },
  {
    option: 108,
    name: "Machupicchu - A partir de las 14:00",
  },
  {
    option: 110,
    name: "Machupicchu con montaña Waynapicchu - A partir de las 6:00",
  },
  {
    option: 111,
    name: "Machupicchu con montaña Waynapicchu - A partir de las 7:00",
  },
  {
    option: 112,
    name: "Machupicchu con montaña Waynapicchu - A partir de las 8:00",
  },
  {
    option: 120,
    name: "Machupicchu con montaña Machupicchu - A partir de las 6:00",
  },
  {
    option: 121,
    name: "Machupicchu con montaña Machupicchu - A partir de las 7:00",
  },
  {
    option: 122,
    name: "Machupicchu con montaña Machupicchu - A partir de las 8:00",
  },
];

module.exports = {
  CURRENT_MONTH,
  CURRENT_YEAR,
  DAY_CONTAINER,
  DAY_NAME,
  DAY_VALUE,
  ERROR,
  HEIGHT,
  LINK_TO_HOME,
  MONTH_FORM,
  MONTHS,
  ROUTE_FORM,
  ROUTES,
  SUBMIT,
  URL,
  WIDTH,
};
