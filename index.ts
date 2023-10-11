import express from 'express';
import db from './models';
import dotenv from 'dotenv';
import addressesRoutes from './routes/addressesRoutes';
import cartProductRoutes from './routes/cartProductRoutes';
import categorysRoutes from './routes/categorysRoutes';
import productsRoutes from './routes/productsRoutes';
import wishingRoutes from './routes/wishingRoutes';
import ordersRoutes from './routes/ordersRouters';
import { setupDatabaseConnection } from './dbConnection';
 dotenv.config();
// console.log(process.env.DB_USER);
console.log(process.env.DB_NAME);
console.log(process.env.DB_HOST);

const app = express();
app.use(express.json());

app.use(addressesRoutes);
app.use(cartProductRoutes);
app.use(categorysRoutes);
app.use(productsRoutes);
app.use(wishingRoutes);
app.use(ordersRoutes);

const port = process.env.PORT || 3005;

setupDatabaseConnection() 
  .then((sequelize) => {
    db.sequelize = sequelize; 
    return sequelize.sync();
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`app is running on port ${port}`);
    });
  })
  .catch((error: any) => {
    console.error(`Error starting the server: ${error.message}`);
  });
