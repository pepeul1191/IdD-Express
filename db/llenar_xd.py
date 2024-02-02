# -*- coding: utf-8 -*-
import random

membresias_id = [x for x in range(1, 109)]
medio_pagos_id = [x for x in range(1, 6)]
rpta = ''

for membresia_id in membresias_id:
    primera_cuota = random.randint(1, 100)
    segunda_cuota = random.randint(1, int(primera_cuota))
    primera_medio_pagos_id = random.randint(1,5)
    segunda_medio_pagos_id = random.randint(1,5)
    tercera_medio_pagos_id = random.randint(1,5)
    tercera_cuota = 0
    if (segunda_cuota + primera_cuota > 100):
       segunda_cuota = 100 - primera_cuota
    else:
       tercera_cuota = 100 - primera_cuota - segunda_cuota
    tmp1 = 'INSERT INTO medio_pagos_membresias (monto, numero_transaccion, medio_pago_id, membresia_id) VALUES ({}, {}, {}, {});\n'.format(primera_cuota, random.randint(10000,99999), primera_medio_pagos_id, membresia_id)
    rpta = rpta + tmp1
    tmp2 = 'INSERT INTO medio_pagos_membresias (monto, numero_transaccion, medio_pago_id, membresia_id) VALUES ({}, {}, {}, {});\n'.format(segunda_cuota, random.randint(10000,99999), segunda_medio_pagos_id, membresia_id)
    rpta = rpta + tmp2
    if tercera_cuota != 0:
        tmp3 = 'INSERT INTO medio_pagos_membresias (monto, numero_transaccion, medio_pago_id, membresia_id) VALUES ({}, {}, {}, {});\n'.format(tercera_cuota, random.randint(10000,99999), tercera_medio_pagos_id, membresia_id)
        rpta = rpta + tmp3

    print('1 +++++++++++++++++++++++++++++++')
    print(primera_cuota)
    print(segunda_cuota)
    print(tercera_cuota)
    print(membresia_id)
print(rpta)

nombre_archivo = "migraciones/019_llenar_medio_pagos_membresias.sql"
with open(nombre_archivo, 'w') as archivo:
        archivo.write(rpta)