-- Si no usando la version 2 o superior de create.table.sql. Necesitara aplicar este archivo
-- Esta separado por si ya esta creada la tabla diagnostico
CREATE TABLE usuarios (
    id integer NOT NULL UNIQUE GENERATED ALWAYS AS IDENTITY (START WITH 1) ,
    username varchar NOT NULL UNIQUE,
    cedula varchar NOT NULL UNIQUE,
    name varchar NOT NULL,
    last_name varchar NOT NULL,
    password varchar NOT NULL,
    is_active boolean DEFAULT true,
    rol varchar NOT NULL DEFAULT 'usuario',
    primary key(id)
)