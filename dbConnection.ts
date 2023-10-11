import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
export async function setupDatabaseConnection() {
 // const sequelize = new Sequelize('postgres://pqibwogl:zQkha3u6XjHG1ntWw1RscWKF-kaC_kw3@surus.db.elephantsql.com/pqibwogl', {
  const sequelize = new Sequelize('postgres://pqibwogl:zQkha3u6XjHG1ntWw1RscWKF-kaC_kw3@surus.db.elephantsql.com/pqibwogl?ssl=true'
  , {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true, 
    },
  });
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
     //new edit
     const modelsDir = path.join(__dirname, 'models');
     fs.readdirSync(modelsDir).forEach((file) => {
       if (file.endsWith('.ts') && !file.endsWith('.test.ts')) {
         const model = require(path.join(modelsDir, file));
         if (model.associate) {
           model.associate(sequelize.models);
         }
       }
     });
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}
setupDatabaseConnection();
