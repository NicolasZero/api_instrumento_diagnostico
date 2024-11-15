-- Si esta usando la primera version de create.table.sql. Necesitara aplicar este archivo
alter table diagnostico add constraint pk_diagnostico primary key (id);
alter table usuarios add constraint pk_usuarios primary key (id);