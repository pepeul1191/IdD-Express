CREATE TABLE rutinas (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    inicio DATE NOT NULL,
    fin DATE NOT NULL,
    calentamiento INTEGER,
    membresia_id INTEGER,
    nivel_id INTEGER,
    objetivo_id INTEGER,
    FOREIGN KEY (membresia_id) REFERENCES membresias(id) ON DELETE CASCADE,
    FOREIGN KEY (nivel_id) REFERENCES niveles(id) ON DELETE CASCADE,
    FOREIGN KEY (objetivo_id) REFERENCES objetivos(id) ON DELETE CASCADE
);