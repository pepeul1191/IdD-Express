CREATE TABLE ejercicios (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    nombre VARCHAR(30) NOT NULL,
    imagen_url VARCHAR(100) NOT NULL,
    cuerpo_parte_id INTEGER,
    FOREIGN KEY (cuerpo_parte_id) REFERENCES cuerpo_partes(id) ON DELETE CASCADE
);