-- Si no usando la version 3 o superior de create.table.sql. Necesitara aplicar este archivo
alter table diagnostico add constraint pk_diagnostico primary key (id);
alter table usuarios add constraint pk_usuarios primary key (id);