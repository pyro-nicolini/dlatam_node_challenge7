
# Pruebas API de Cafés ☕

Esta suite de pruebas automatizadas valida las operaciones básicas de una API REST para la gestión de cafés.
Utiliza **Jest** y **Supertest** para comprobar el comportamiento esperado de las rutas definidas en el servidor.

## Pruebas 
1. **GET /cafes**
   - Verifica que la ruta retorne status **200** y un **arreglo con al menos un objeto**.

2. **DELETE /cafes/:id** (con ID inexistente)
   - Comprueba que eliminar un café con un ID que no existe retorne status **404**.

3. **POST /cafes**
   - Asegura que al enviar un nuevo café válido, se agregue correctamente y se retorne status **201**.

4. **PUT /cafes/:id** (IDs diferentes)
   - Verifica que si el ID enviado en los parámetros de la URL **no coincide** con el ID en el **payload**, la API responda con status **400**.

## Ejecutar tests

```bash
npm install
npm test
```

---