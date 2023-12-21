const { Creator } = require("../models");
const { fakerES: faker } = require("@faker-js/faker");
// const bcrypt = require("bcryptjs")


module.exports = async () => {
//   const hashedPassword = await bcrypt.hash("1234", 5);
  const creators = [];
    for (let i = 0; i < 10; i++) {
  creators.push({
    firstname: faker.person.firstName(),
    lastname: faker.person.firstName(),
    aboutMe: faker.lorem.paragraphs(1),
    profilePic: faker.image.avatar(),
    email: faker.internet.email(),
    location: "Montevideo, Uruguay",
    // password: hashedPassword,
    password: 1234,
  });
}
  

  await Creator.bulkCreate(creators);
  console.log("[Database] Se corrió el seeder de Creator.");
};