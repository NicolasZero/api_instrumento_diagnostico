// const controller = require("../controllers/controller.registro")
const controller = require("../controllers/controller.registro")

module.exports = async function (fastify) {
  // Consulta en la BD
  fastify.get("/", controller.getRegistros);
  // Registra en la BD
  fastify.post("/", controller.setRegistro);

  fastify.post("/1",controller.test)
}