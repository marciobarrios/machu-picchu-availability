const { getAvailability } = require("./getAvailability");
const { parse } = require("url");
const { CURRENT_MONTH, CURRENT_YEAR } = require("./constants");

module.exports = async function(req, res) {
  const { query } = parse(req.url, true);
  const date = new Date();
  const {
    route = 0,
    year = CURRENT_YEAR,
    month = CURRENT_MONTH,
  } = query;

  try {
    const result = await getAvailability({
      route: parseInt(route),
      year: parseInt(year),
      month: parseInt(month),
    });

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(result));
  } catch (e) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Server Error</h1><p>Sorry, there was a problem</p>");
    console.error(e.message);
  }
};
