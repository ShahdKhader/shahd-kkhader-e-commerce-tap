import { Sequelize } from 'sequelize';

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
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}
setupDatabaseConnection();
