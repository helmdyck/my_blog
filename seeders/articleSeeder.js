/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 * En este ejemplo se están insertando 500 artículos con textos ficticios.
 *
 *
 */

const { fakerES: faker } = require("@faker-js/faker");
const { Article } = require("../models");

module.exports = async () => {
  const articles = [];

  for (let i = 0; i < 30; i++) {
    articles.push({
      title: faker.lorem.sentence(5),
      summary: faker.lorem.sentence(10),
      content: faker.lorem.paragraphs(3),
      image: faker.image.urlLoremFlickr({ category: 'nature' }),
      tags: ["blog", "sex", "lifestyle"],
      creatorId: faker.number.int({ min: 1, max: 10 }),
      categoryId: faker.number.int({ min: 1, max: 3 }),
    });
  }

  await Article.bulkCreate(articles);
  console.log("[Database] Se corrió el seeder de Articles.");
};
