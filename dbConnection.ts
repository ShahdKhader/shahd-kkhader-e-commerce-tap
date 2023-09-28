import { Sequelize } from 'sequelize';

export async function setupDatabaseConnection() {
  const sequelize = new Sequelize({
    database: 'ecommerce2',
    username: 'shahd',
    password: '123456',
    host: 'localhost',
    dialect: 'mysql',
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
