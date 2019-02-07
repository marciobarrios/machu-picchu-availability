// const puppeteer = require("puppeteer");
const chrome = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

const {
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
} = require("./constants");

/**
 * Search availability tickets in Machu Picchu for a specific year, month and route
 * @param {number} route - index of route to search for (check constants.js)
 * @param {number} year - year to search
 * @param {number} month - month to search for (check constants.js)
 */
const getAvailability = async ({ route = 2, year = 2019, month = 0 } = {}) => {
  if (!ROUTES[route].option) throw new Error("`route` is not valid");
  if (year !== 2019 && year !== 2020)
    throw new Error("`year` should be 2019 or 2020");
  if (!MONTHS[month])
    throw new Error(
      "`month` needs to be a number between 0 and 11 (from January to December)",
    );

  try {
    const browser = await puppeteer.launch({
      args: chrome.args,
      executablePath: await chrome.executablePath,
      headless: chrome.headless,
    });
    const page = await browser.newPage();

    await page.setViewport({ width: WIDTH, height: HEIGHT });
    await page.goto(URL);

    const sessionExpired = await page.$(ERROR);

    // Check if the session expired
    if (sessionExpired) {
      await Promise.all([page.waitForNavigation(), page.click(LINK_TO_HOME)]);
      await page.goto(URL);
    }

    // Select route and month, then submit
    await page.select(ROUTE_FORM, `${ROUTES[route].option}`);
    await page.select(MONTH_FORM, `${month + 1}`);
    await Promise.all([page.waitForNavigation(), page.click(SUBMIT)]);

    // Store the data for a given month for a specific route
    const result = await page.evaluate(
      ({
        DAY_CONTAINER,
        DAY_NAME,
        DAY_VALUE,
        ROUTES,
        MONTHS,
        route,
        month,
      }) => {
        const availability = [];
        const days = document.querySelectorAll(DAY_CONTAINER);

        for (const info of days) {
          availability.push({
            route: ROUTES[route].name,
            month: MONTHS[month],
            day: parseInt(info.querySelector(DAY_NAME).innerText.trim()),
            quantity: parseInt(info.querySelector(DAY_VALUE).innerText.trim()),
          });
        }

        return availability;
      },
      { DAY_CONTAINER, DAY_NAME, DAY_VALUE, ROUTES, MONTHS, route, month },
    );

    await browser.close();
    return result;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAvailability };
