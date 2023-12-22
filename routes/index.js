const creatorRoutes = require("./creatorRoutes");
const articleRoutes = require("./articleRoutes");
const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

module.exports = (app) => {
  /**
   * Notar que si el sitio está en español, tiene sentido que las URLs que se
   * ven en la barra de direcciiones del navegador también lo estén. No así los
   * nombres de variables, funciones, etc, que siempre se recomienda que estén
   * en inglés.
   */

  app.use("/creator", creatorRoutes);
  app.use("/article", articleRoutes);
  

  app.use("/", publicRoutes);
  app.use("/panel", privateRoutes);
};
