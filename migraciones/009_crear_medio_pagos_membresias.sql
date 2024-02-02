CREATE TABLE medio_pagos_membresias (
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    monto FLOAT NOT NULL,
    numero_transacccion INTEGER NOT NULL,
    medio_pago_id INTEGER,
    membresia_id INTEGER,
    FOREIGN KEY (membresia_id) REFERENCES membresias(id) ON DELETE CASCADE,
    FOREIGN KEY (medio_pago_id) REFERENCES medio_pagos(id) ON DELETE CASCADE
);
