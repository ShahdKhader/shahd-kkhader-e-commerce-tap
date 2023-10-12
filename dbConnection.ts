import db from './models';

export async function setupDatabaseConnection() {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return db.sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}
setupDatabaseConnection();
