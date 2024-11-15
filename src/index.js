const fastify = require("fastify")({ logger: false });
const cors = require('@fastify/cors')
require('dotenv').config()

fastify.register(cors, {
  origin:true
})

fastify.get("/", (request, reply) => {
  reply.send({ msg: "Wellcome to the api" });
});

// Nombre de las rutas
const routeName = ['registro','auth']

// funcion que carga las rutas
routeName.forEach((route) => {
  fastify.register(require(`./routes/route.${route}.js`), { prefix: `${route}` })
})

const start = async () => {
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || "0.0.0.0";
  try {
    await fastify.listen({ port: port, host: host });
    console.log(`API running on the port ${port} and host ${host}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();