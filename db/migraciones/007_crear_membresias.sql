CREATE TABLE membresias (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    inicio DATE NOT NULL,
    fin DATE NOT NULL,
    pago FLOAT NOT NULL,
    miembro_id INTEGER,
    FOREIGN KEY (miembro_id) REFERENCES miembros(id) ON DELETE CASCADE
);

