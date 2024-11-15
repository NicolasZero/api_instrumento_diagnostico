const { query } = require("../db/postgresql");
const { encrypt, compare } = require("../helpers/helperEncrypt.js");
require('dotenv').config()

const auth = async (request, reply) => {
    try {        
        const { key, user, pass } = request.body

        if (key !== process.env.KEY) {
            return reply.code(409).send({ error: "No tiene permiso", status: "failed" });
        }

        if (!user || !pass) {
            return reply.code(200).send({ error: "Usuario o contraseña incorrecta", status: "failed" });
        }

        const resp = await query(`SELECT * FROM usuarios where UPPER(username)=UPPER($1);`, [user])

        if (resp.rowCount != 1) {
            return reply.code(200).send({ error: "Usuario o contraseña incorrecta", status: "failed" });
        }

        const checkPass = await compare(pass, resp.rows[0].password);

        if (!checkPass) {
            return reply.code(200).send({ error: "Usuario o contraseña incorrecta", status: "failed" });
        }

        return reply.code(200).send({ data: true, status: "OK" });

    } catch (error) {
        reply.code(500).send({ error: "Error interno", status: "failed" });
        console.log(error);
    }
}

const register = async (request, reply) => {
    try {
        const { data } = request.body

        let passEncrypt = []
        data.forEach(e => {
            const work = encrypt(e)

            passEncrypt.push(work)

            // console.log(passEncrypt)
        });
        return reply.send(passEncrypt)
    } catch (error) {
        reply.code(500).send({ error: "Error interno", status: "failed" });
        console.log(error);
    }

}

module.exports = {
    auth,
    register
}