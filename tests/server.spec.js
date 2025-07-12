const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
  it("1. Testeo de ruta GET/cafes. Debe retornar status 200 & tipo de dato Arreglo con al menos 1 objeto.", async () => {
    const response = await request(server).get("/cafes").send();
    const { body: cafes } = response;
    const status = response.statusCode;
    expect(status).toBe(200);
    expect(cafes).toBeInstanceOf(Array);
    expect(cafes[0]).toBeInstanceOf(Object);
    expect(cafes.length).toBeGreaterThanOrEqual(1);
  });
  it("2. Obteniendo status 404 al eliminar un café con id inexistente", async () => {
    const idxTest = -1;
    const jwt = "token";
    const response = await request(server)
    .delete(`/cafes/${idxTest}`)
    .set("Authorization", jwt)
    .send();
    expect(response.statusCode).toBe(404);
});
it("3. Comprobar ruta POST/cafes, agrega un nuevo Café y retornar status 201", async()=>{
    const id = -1;
    const nuevoCafe = { id, nombre: "Nuevo SuperCafe extra Forte"}
    const response = await request(server)
    .post('/cafes')
    .send(nuevoCafe);
    const { body: cafes} = response;
    expect(cafes).toContainEqual(nuevoCafe);
    expect(response.statusCode).toBe(201);
  })
it("4. ruta PUT /cafes devuelve status code 400 si intentas actualizar un café enviando un id  en los parámetros que sea diferente al id del payload.", async()=>{
    const id = 1;
    const newCafe = {id: 2, nombre: "café actualizado"}
    const response = await request(server)
    .put(`/cafes/${id}`)
    .send(newCafe);
    expect(response.statusCode).toBe(400)
  })
});