CREATE TABLE diagnostico(
    id integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY (START WITH 1),
    fecha_creacion DATE NOT NULL DEFAULT CURRENT_DATE,
    hora_creacion time NOT NULL DEFAULT CURRENT_TIME,
    
    nombre varchar,
    apellido varchar,
    cedula varchar,
    telefono varchar,
    correo varchar,
    
    avenida_calle varchar,
    edifi_casa_sede varchar,
    nombre_edifi_casa_sede varchar,
    num_piso integer,
    telefono_infraestructura varchar,
    estado_id varchar,
    municipio_id varchar,
    ciudad varchar,
    parroquia_id varchar,
    zona_postal varchar,

    sede_id varchar,
    propia boolean,
    propia_desc varchar,
    alquilada boolean,
    alquilada_desc varchar,
    apoyo_interinstitucional boolean,
    apoyo_interinstitucional_dec varchar,
    techos boolean,
    techos_desc varchar,
    paredes boolean,
    paredes_desc varchar,
    pisos boolean,
    pisos_desc varchar,
    otra_infraestructura varchar,

    electricidad boolean,
    electricidad_desc varchar,
    agua boolean,
    agua_desc varchar,
    telefonia boolean,
    telefonia_desc varchar,
    internet boolean,
    internet_desc varchar,
    otro_servicio_publico varchar,

    num_bien1 varchar,
    tipo_bien1 varchar,
    num_bien2 varchar,
    tipo_bien2 varchar,
    num_bien3 varchar,
    tipo_bien3 varchar,
    num_bien4 varchar,
    tipo_bien4 varchar,
    num_bien5 varchar,
    tipo_bien5 varchar,
    num_bien6 varchar,
    tipo_bien6 varchar,
    num_bien7 varchar,
    tipo_bien7 varchar,
    num_bien8 varchar,
    tipo_bien8 varchar,
    num_bien9 varchar,
    tipo_bien9 varchar,
    num_bien10 varchar,
    tipo_bien10 varchar,
    num_bien11 varchar,
    tipo_bien11 varchar,
    num_bien12 varchar,
    tipo_bien12 varchar,
    num_bien13 varchar,
    tipo_bien13 varchar,
    num_bien14 varchar,
    tipo_bien14 varchar,
    num_bien15 varchar,
    tipo_bien15 varchar,
    num_bien16 varchar,
    tipo_bien16 varchar,
    num_bien17 varchar,
    tipo_bien17 varchar,
    num_bien18 varchar,
    tipo_bien18 varchar,
    num_bien19 varchar,
    tipo_bien19 varchar,
    num_bien20 varchar,
    tipo_bien20 varchar,

    automovil boolean,
    cant_auto integer,
    num_placa_auto1 varchar,
    modelo_auto1 varchar,
    condiciones_auto1 text,
    num_placa_auto2 varchar,
    modelo_auto2 varchar,
    condiciones_auto2 text,
    num_placa_auto3 varchar,
    modelo_auto3 varchar,
    condiciones_auto3 text,
    num_placa_auto4 varchar,
    modelo_auto4 varchar,
    condiciones_auto4 text,
    num_placa_auto5 varchar,
    modelo_auto5 varchar,
    condiciones_auto5 text,

    autobus boolean,
    cant_bus integer,
    num_placa_bus1 varchar,
    modelo_bus1 varchar,
    condiciones_bus1 text,
    num_placa_bus2 varchar,
    modelo_bus2 varchar,
    condiciones_bus2 text,
    num_placa_bus3 varchar,
    modelo_bus3 varchar,
    condiciones_bus3 text,
    num_placa_bus4 varchar,
    modelo_bus4 varchar,
    condiciones_bus4 text,
    num_placa_bus5 varchar,
    modelo_bus5 varchar,
    condiciones_bus5 text,

    otros varchar,
    cant_otro integer,
    num_placa_otro varchar,
    modelo_otro varchar,
    condiciones_otro text,

    cant_mujeres integer,
    mujeres_activas integer,
    mujeres_reposo integer,
    mujeres_vacaciones integer,

    cant_hombres integer,
    hombres_activos integer,
    hombres_reposo integer,
    hombres_vacaciones integer,

    equipo_medico1 varchar,
    equipo_medico2 varchar,
    equipo_medico3 varchar,
    equipo_medico4 varchar,
    equipo_medico5 varchar,
    equipo_medico6 varchar,
    equipo_medico7 varchar,
    equipo_medico8 varchar,
    equipo_medico9 varchar,
    equipo_medico10 varchar,

    observacion text,

    recomendaciones text,

    nombre_testigo1 varchar,
    apellido_testigo1 varchar,
    cedula_testigo1 varchar,
    cargo_testigo1 varchar,

    nombre_testigo2 varchar,
    apellido_testigo2 varchar,
    cedula_testigo2 varchar,
    cargo_testigo2 varchar,
    
    nombre_enlace_inm varchar,
    apellido_enlace_inm varchar,
    cedula_enlace_inm varchar,
    cargo_enlace_inm varchar
);