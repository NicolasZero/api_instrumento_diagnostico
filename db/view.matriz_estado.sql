-- Si no esta usando la version 4 o superior de create.table.sql. Necesitara aplicar este archivo
CREATE VIEW matriz_estado AS
    select 
        estado_id,
        COUNT(CASE WHEN sede_id = 'Compartida' THEN sede_id ELSE NULL END) AS Compartida,
        COUNT(CASE WHEN sede_id = 'INAMUJER' THEN sede_id ELSE NULL END) AS INAMUJER,
        COUNT(CASE WHEN sede_id = 'CAFIM' THEN sede_id ELSE NULL END) AS CAFIM,
        COUNT(CASE WHEN sede_id = 'Casa de abrigo' THEN sede_id ELSE NULL END) AS "Casa de abrigo",
        COUNT(CASE WHEN sede_id = 'UAIM' THEN sede_id ELSE NULL END) AS UAIM,
        COUNT(CASE WHEN sede_id = 'Defensoria' THEN sede_id ELSE NULL END) AS Defensoria,
        COUNT(sede_id) as total_estado
    from diagnostico
    group by estado_id
    UNION 
    SELECT 'TOTAL',
        COUNT(CASE WHEN sede_id = 'Compartida' THEN sede_id ELSE NULL END) AS Compartida,
        COUNT(CASE WHEN sede_id = 'INAMUJER' THEN sede_id ELSE NULL END) AS INAMUJER,
        COUNT(CASE WHEN sede_id = 'CAFIM' THEN sede_id ELSE NULL END) AS CAFIM,
        COUNT(CASE WHEN sede_id = 'Casa de abrigo' THEN sede_id ELSE NULL END) AS CAFIM,
        COUNT(CASE WHEN sede_id = 'UAIM' THEN sede_id ELSE NULL END) AS UAIM,
        COUNT(CASE WHEN sede_id = 'Defensoria' THEN sede_id ELSE NULL END) AS Defensoria,
        COUNT(*) as total_estado
    from diagnostico
    order by total_estado asc
;