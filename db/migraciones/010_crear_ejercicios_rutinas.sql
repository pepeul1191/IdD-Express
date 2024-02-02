CREATE TABLE ejercicios_rutinas (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    serie INTEGER NOT NULL,
    orden INTEGER NOT NULL,
    repeticiones INTEGER NOT NULL,
    ejercicio_id INTEGER,
    rutina_id INTEGER,
    FOREIGN KEY (ejercicio_id) REFERENCES ejercicios(id) ON DELETE CASCADE,
    FOREIGN KEY (rutina_id) REFERENCES rutinas(id) ON DELETE CASCADE
);