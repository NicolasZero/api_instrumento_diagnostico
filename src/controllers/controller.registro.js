const { query } = require("../db/postgresql");
const dev = true

const getRegistros = async (request, reply) => {
    try {
        const resp = await query("SELECT * FROM diagnostico")
        return reply.send({ status: "OK", msg: `Se encontraron ${resp.rowCount} resultado(s)`, data: resp.rows });
    } catch (error) {
        reply.code(500).send({ error: "Error interno", status: "failed" });
        dev ? console.log(error) : ""
    }
}

const getRegistroById = async (request, reply) => {
    try {
        const { id } = request.params
        // return reply.send({id})
        const resp = await query("SELECT * FROM diagnostico WHERE id = $1", [id])
        return reply.send({ status: "OK", msg: `Se encontraron ${resp.rowCount} resultado(s)`, data: resp.rows });
    } catch (error) {
        reply.code(500).send({ error: "Error interno", status: "failed" });
        dev ? console.log(error) : ""

    }
}

const getAllRegistroByEstado = async (request, reply) => {
    try {
        const resp = await query("SELECT * FROM matriz_estado")
        return reply.send({ status: "OK", msg: `Se encontraron ${resp.rowCount} resultado(s)`, data: resp.rows });
    } catch (error) {
        reply.code(500).send({ error: "Error interno", status: "failed" });
        dev ? console.log(error) : ""
    }
}

const setRegistro = async (request, reply) => {
    try {
        const { key, nombre, apellido, cedula, telefono, correo, avenida_calle, edifi_casa_sede, nombre_edifi_casa_sede, num_piso, telefono_infraestructura, estado_id, municipio_id, ciudad_id, ciudad, parroquia_id, zona_postal, sede_id, propia, propia_desc, alquilada, alquilada_desc, apoyo_interinstitucional, apoyo_interinstitucional_dec, techos, techos_desc, paredes, paredes_desc, pisos, pisos_desc, otra_infraestructura, electricidad, electricidad_desc, agua, agua_desc, telefonia, telefonia_desc, internet, internet_desc, otro_servicio_publico, num_bien1, tipo_bien1, num_bien2, tipo_bien2, num_bien3, tipo_bien3, num_bien4, tipo_bien4, num_bien5, tipo_bien5, num_bien6, tipo_bien6, num_bien7, tipo_bien7, num_bien8, tipo_bien8, num_bien9, tipo_bien9, num_bien10, tipo_bien10, num_bien11, tipo_bien11, num_bien12, tipo_bien12, num_bien13, tipo_bien13, num_bien14, tipo_bien14, num_bien15, tipo_bien15, num_bien16, tipo_bien16, num_bien17, tipo_bien17, num_bien18, tipo_bien18, num_bien19, tipo_bien19, num_bien20, tipo_bien20, automovil, cant_auto, num_placa_auto1, modelo_auto1, condiciones_auto1, num_placa_auto2, modelo_auto2, condiciones_auto2, num_placa_auto3, modelo_auto3, condiciones_auto3, num_placa_auto4, modelo_auto4, condiciones_auto4, num_placa_auto5, modelo_auto5, condiciones_auto5, autobus, cant_bus, num_placa_bus1, modelo_bus1, condiciones_bus1, num_placa_bus2, modelo_bus2, condiciones_bus2, num_placa_bus3, modelo_bus3, condiciones_bus3, num_placa_bus4, modelo_bus4, condiciones_bus4, num_placa_bus5, modelo_bus5, condiciones_bus5, otros, cant_otro, num_placa_otro, modelo_otro, condiciones_otro, cant_mujeres, mujeres_activas, mujeres_reposo, mujeres_vacaciones, cant_hombres, hombres_activos, hombres_reposo, hombres_vacaciones, equipo_medico1, equipo_medico2, equipo_medico3, equipo_medico4, equipo_medico5, equipo_medico6, equipo_medico7, equipo_medico8, equipo_medico9, equipo_medico10, observacion, recomendaciones, nombre_testigo1, apellido_testigo1, cedula_testigo1, cargo_testigo1, nombre_testigo2, apellido_testigo2, cedula_testigo2, cargo_testigo2, nombre_enlace_inm, apellido_enlace_inm, cedula_enlace_inm, cargo_enlace_inm } = request.body

        if (key !== process.env.KEY) {
            return reply.code(409).send({ error: "No tiene permiso", status: "failed" });
        }

        const queryText = `INSERT INTO diagnostico 
        (nombre, apellido, cedula, telefono, correo, avenida_calle, edifi_casa_sede, nombre_edifi_casa_sede, num_piso, telefono_infraestructura, estado_id, municipio_id, ciudad, parroquia_id, zona_postal, sede_id, propia, propia_desc, alquilada, alquilada_desc, apoyo_interinstitucional, apoyo_interinstitucional_dec, techos, techos_desc, paredes, paredes_desc, pisos, pisos_desc, otra_infraestructura, electricidad, electricidad_desc, agua, agua_desc, telefonia, telefonia_desc, internet, internet_desc, otro_servicio_publico, num_bien1, tipo_bien1, num_bien2, tipo_bien2, num_bien3, tipo_bien3, num_bien4, tipo_bien4, num_bien5, tipo_bien5, num_bien6, tipo_bien6, num_bien7, tipo_bien7, num_bien8, tipo_bien8, num_bien9, tipo_bien9, num_bien10, tipo_bien10, num_bien11, tipo_bien11, num_bien12, tipo_bien12, num_bien13, tipo_bien13, num_bien14, tipo_bien14, num_bien15, tipo_bien15, num_bien16, tipo_bien16, num_bien17, tipo_bien17, num_bien18, tipo_bien18, num_bien19, tipo_bien19, num_bien20, tipo_bien20, automovil, cant_auto, num_placa_auto1, modelo_auto1, condiciones_auto1, num_placa_auto2, modelo_auto2, condiciones_auto2, num_placa_auto3, modelo_auto3, condiciones_auto3, num_placa_auto4, modelo_auto4, condiciones_auto4, num_placa_auto5, modelo_auto5, condiciones_auto5, autobus, cant_bus, num_placa_bus1, modelo_bus1, condiciones_bus1, num_placa_bus2, modelo_bus2, condiciones_bus2, num_placa_bus3, modelo_bus3, condiciones_bus3, num_placa_bus4, modelo_bus4, condiciones_bus4, num_placa_bus5, modelo_bus5, condiciones_bus5, otros, cant_otro, num_placa_otro, modelo_otro, condiciones_otro, cant_mujeres, mujeres_activas, mujeres_reposo, mujeres_vacaciones, cant_hombres, hombres_activos, hombres_reposo, hombres_vacaciones, equipo_medico1, equipo_medico2, equipo_medico3, equipo_medico4, equipo_medico5, equipo_medico6, equipo_medico7, equipo_medico8, equipo_medico9, equipo_medico10, observacion, recomendaciones, nombre_testigo1, apellido_testigo1, cedula_testigo1, cargo_testigo1, nombre_testigo2, apellido_testigo2, cedula_testigo2, cargo_testigo2, nombre_enlace_inm, apellido_enlace_inm, cedula_enlace_inm, cargo_enlace_inm) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65, $66, $67, $68, $69, $70, $71, $72, $73, $74, $75, $76, $77, $78, $79, $80, $81, $82, $83, $84, $85, $86, $87, $88, $89, $90, $91, $92, $93, $94, $95, $96, $97, $98, $99, $100, $101, $102, $103, $104, $105, $106, $107, $108, $109, $110, $111, $112, $113, $114, $115, $116, $117, $118, $119, $120, $121, $122, $123, $124, $125, $126, $127, $128, $129, $130, $131, $132, $133, $134, $135, $136, $137, $138, $139, $140, $141, $142, $143, $144, $145, $146, $147, $148, $149);`

        const queryValue = [nombre, apellido, cedula, telefono, correo, avenida_calle, edifi_casa_sede, nombre_edifi_casa_sede, Number(num_piso), telefono_infraestructura, estado_id, municipio_id, ciudad, parroquia_id, zona_postal, sede_id, propia != "on" ? false : true, propia_desc, alquilada != "on" ? false : true, alquilada_desc, apoyo_interinstitucional != "on" ? false : true, apoyo_interinstitucional_dec, techos != "on" ? false : true, techos_desc, paredes != "on" ? false : true, paredes_desc, pisos != "on" ? false : true, pisos_desc, otra_infraestructura, electricidad != "on" ? false : true, electricidad_desc, agua != "on" ? false : true, agua_desc, telefonia != "on" ? false : true, telefonia_desc, internet != "on" ? false : true, internet_desc, otro_servicio_publico, num_bien1, tipo_bien1, num_bien2, tipo_bien2, num_bien3, tipo_bien3, num_bien4, tipo_bien4, num_bien5, tipo_bien5, num_bien6, tipo_bien6, num_bien7, tipo_bien7, num_bien8, tipo_bien8, num_bien9, tipo_bien9, num_bien10, tipo_bien10, num_bien11, tipo_bien11, num_bien12, tipo_bien12, num_bien13, tipo_bien13, num_bien14, tipo_bien14, num_bien15, tipo_bien15, num_bien16, tipo_bien16, num_bien17, tipo_bien17, num_bien18, tipo_bien18, num_bien19, tipo_bien19, num_bien20, tipo_bien20, automovil != "on" ? false : true, Number(cant_auto), num_placa_auto1, modelo_auto1, condiciones_auto1, num_placa_auto2, modelo_auto2, condiciones_auto2, num_placa_auto3, modelo_auto3, condiciones_auto3, num_placa_auto4, modelo_auto4, condiciones_auto4, num_placa_auto5, modelo_auto5, condiciones_auto5, autobus != "on" ? false : true, Number(cant_bus), num_placa_bus1, modelo_bus1, condiciones_bus1, num_placa_bus2, modelo_bus2, condiciones_bus2, num_placa_bus3, modelo_bus3, condiciones_bus3, num_placa_bus4, modelo_bus4, condiciones_bus4, num_placa_bus5, modelo_bus5, condiciones_bus5, otros, Number(cant_otro), num_placa_otro, modelo_otro, condiciones_otro, Number(cant_mujeres), Number(mujeres_activas), Number(mujeres_reposo), Number(mujeres_vacaciones), Number(cant_hombres), Number(hombres_activos), Number(hombres_reposo), Number(hombres_vacaciones), equipo_medico1, equipo_medico2, equipo_medico3, equipo_medico4, equipo_medico5, equipo_medico6, equipo_medico7, equipo_medico8, equipo_medico9, equipo_medico10, observacion, recomendaciones, nombre_testigo1, apellido_testigo1, cedula_testigo1, cargo_testigo1, nombre_testigo2, apellido_testigo2, cedula_testigo2, cargo_testigo2, nombre_enlace_inm, apellido_enlace_inm, cedula_enlace_inm, cargo_enlace_inm]

        const resp = await query(queryText, queryValue)

        if (resp.rowCount != 1) {
            return reply.code(409).send({ error: "Ocurrio un error al registrar", status: "failed" });
        }


        return reply.code(200).send({ data: `Se registro con exito`, status: "OK" });

    } catch (error) {
        reply.code(500).send({ error: "Error interno", status: "failed" });
        dev ? console.log(error) : ""

    }
}

const test = async (request, reply) => {
    try {
        const { key, nombre, apellido, cedula, telefono, correo, avenida_calle, edifi_casa_sede, nombre_edifi_casa_sede, num_piso, telefono_infraestructura, estado_id, municipio_id, ciudad_id, ciudad, parroquia_id, zona_postal, sede_id, propia, propia_desc, alquilada, alquilada_desc, apoyo_interinstitucional, apoyo_interinstitucional_dec, techos, techos_desc, paredes, paredes_desc, pisos, pisos_desc, otra_infraestructura, electricidad, electricidad_desc, agua, agua_desc, telefonia, telefonia_desc, internet, internet_desc, otro_servicio_publico, num_bien1, tipo_bien1, num_bien2, tipo_bien2, num_bien3, tipo_bien3, num_bien4, tipo_bien4, num_bien5, tipo_bien5, num_bien6, tipo_bien6, num_bien7, tipo_bien7, num_bien8, tipo_bien8, num_bien9, tipo_bien9, num_bien10, tipo_bien10, num_bien11, tipo_bien11, num_bien12, tipo_bien12, num_bien13, tipo_bien13, num_bien14, tipo_bien14, num_bien15, tipo_bien15, num_bien16, tipo_bien16, num_bien17, tipo_bien17, num_bien18, tipo_bien18, num_bien19, tipo_bien19, num_bien20, tipo_bien20, automovil, cant_auto, num_placa_auto1, modelo_auto1, condiciones_auto1, num_placa_auto2, modelo_auto2, condiciones_auto2, num_placa_auto3, modelo_auto3, condiciones_auto3, num_placa_auto4, modelo_auto4, condiciones_auto4, num_placa_auto5, modelo_auto5, condiciones_auto5, autobus, cant_bus, num_placa_bus1, modelo_bus1, condiciones_bus1, num_placa_bus2, modelo_bus2, condiciones_bus2, num_placa_bus3, modelo_bus3, condiciones_bus3, num_placa_bus4, modelo_bus4, condiciones_bus4, num_placa_bus5, modelo_bus5, condiciones_bus5, otros, cant_otro, num_placa_otro, modelo_otro, condiciones_otro, cant_mujeres, mujeres_activas, mujeres_reposo, mujeres_vacaciones, cant_hombres, hombres_activos, hombres_reposo, hombres_vacaciones, equipo_medico1, equipo_medico2, equipo_medico3, equipo_medico4, equipo_medico5, equipo_medico6, equipo_medico7, equipo_medico8, equipo_medico9, equipo_medico10, observacion, recomendaciones, nombre_testigo1, apellido_testigo1, cedula_testigo1, cargo_testigo1, nombre_testigo2, apellido_testigo2, cedula_testigo2, cargo_testigo2, nombre_enlace_inm, apellido_enlace_inm, cedula_enlace_inm, cargo_enlace_inm } = request.body
        const queryValue = [nombre, apellido, cedula, telefono, correo, avenida_calle, edifi_casa_sede, nombre_edifi_casa_sede, Number(num_piso), telefono_infraestructura, estado_id, municipio_id, ciudad, parroquia_id, zona_postal, sede_id, propia != "on" ? false : true, propia_desc, alquilada != "on" ? false : true, alquilada_desc, apoyo_interinstitucional != "on" ? false : true, apoyo_interinstitucional_dec, techos != "on" ? false : true, techos_desc, paredes != "on" ? false : true, paredes_desc, pisos != "on" ? false : true, pisos_desc, otra_infraestructura, electricidad != "on" ? false : true, electricidad_desc, agua != "on" ? false : true, agua_desc, telefonia != "on" ? false : true, telefonia_desc, internet != "on" ? false : true, internet_desc, otro_servicio_publico, num_bien1, tipo_bien1, num_bien2, tipo_bien2, num_bien3, tipo_bien3, num_bien4, tipo_bien4, num_bien5, tipo_bien5, num_bien6, tipo_bien6, num_bien7, tipo_bien7, num_bien8, tipo_bien8, num_bien9, tipo_bien9, num_bien10, tipo_bien10, num_bien11, tipo_bien11, num_bien12, tipo_bien12, num_bien13, tipo_bien13, num_bien14, tipo_bien14, num_bien15, tipo_bien15, num_bien16, tipo_bien16, num_bien17, tipo_bien17, num_bien18, tipo_bien18, num_bien19, tipo_bien19, num_bien20, tipo_bien20, automovil != "on" ? false : true, Number(cant_auto), num_placa_auto1, modelo_auto1, condiciones_auto1, num_placa_auto2, modelo_auto2, condiciones_auto2, num_placa_auto3, modelo_auto3, condiciones_auto3, num_placa_auto4, modelo_auto4, condiciones_auto4, num_placa_auto5, modelo_auto5, condiciones_auto5, autobus != "on" ? false : true, Number(cant_bus), num_placa_bus1, modelo_bus1, condiciones_bus1, num_placa_bus2, modelo_bus2, condiciones_bus2, num_placa_bus3, modelo_bus3, condiciones_bus3, num_placa_bus4, modelo_bus4, condiciones_bus4, num_placa_bus5, modelo_bus5, condiciones_bus5, otros, Number(cant_otro), num_placa_otro, modelo_otro, condiciones_otro, cant_mujeres, mujeres_activas, mujeres_reposo, mujeres_vacaciones, cant_hombres, hombres_activos, hombres_reposo, hombres_vacaciones, equipo_medico1, equipo_medico2, equipo_medico3, equipo_medico4, equipo_medico5, equipo_medico6, equipo_medico7, equipo_medico8, equipo_medico9, equipo_medico10, observacion, recomendaciones, nombre_testigo1, apellido_testigo1, cedula_testigo1, cargo_testigo1, nombre_testigo2, apellido_testigo2, cedula_testigo2, cargo_testigo2, nombre_enlace_inm, apellido_enlace_inm, cedula_enlace_inm, cargo_enlace_inm]

        if (key !== process.env.KEY) {
            return reply.code(409).send({ error: "No tiene permiso", status: "failed" });
        }

        return reply.send({ data: "bien", status: "OK" });

    } catch (error) {
        reply.code(500).send({ error: "Error interno", status: "failed" });
        dev ? console.log(error) : ""

    }
}

module.exports = {
    getRegistros,
    getRegistroById,
    getAllRegistroByEstado,
    setRegistro,
    test
}