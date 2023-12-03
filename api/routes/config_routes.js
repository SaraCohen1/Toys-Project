const indexR = require("./index");
const usersR = require("./users");
const cakesR = require("./toys");
// const countriesR = require("./countries");

exports.routesInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/toys",cakesR)
  // app.use("/countries",countriesR)
}