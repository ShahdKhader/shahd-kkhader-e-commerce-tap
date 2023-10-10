import { NUMBER, Sequelize } from 'sequelize';

export async function setupDatabaseConnection() {
  const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: (process.env.DB_DIALECT) as 'mysql' | 'postgres',
    port: Number(process.env.DB_PORT) ,
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
