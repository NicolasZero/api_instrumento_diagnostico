// const controller = require("../controllers/controller.registro")
const controller = require("../controllers/controller.registro")

module.exports = async function (fastify) {
  // Consulta en la BD
  fastify.get("/", controller.getRegistros);
  fastify.get("/id/:id", controller.getRegistroById);
  fastify.get("/matriz", controller.getAllRegistroByEstado);

  // Registra en la BD
  fastify.post("/", controller.setRegistro);

  // fastify.post("/1",controller.test)
}