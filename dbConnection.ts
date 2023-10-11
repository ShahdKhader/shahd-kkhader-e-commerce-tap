import { Sequelize } from 'sequelize';

export async function setupDatabaseConnection() {
  const sequelize = new Sequelize({
    database: process.env.BD_NAME,
    username: process.env.DB_NAME,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: process.env.DB_DIALECT as 'mysql',
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