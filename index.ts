import express from 'express';
import dotenv from 'dotenv';
import addressesRoutes from './routes/addressesRoutes';
import cartProductRoutes from './routes/cartProductRoutes';
import categorysRoutes from './routes/categorysRoutes';
import productsRoutes from './routes/productsRoutes';
import wishingRoutes from './routes/wishingRoutes';
import ordersRoutes from './routes/ordersRouters';
import { setupDatabaseConnection } from './dbConnection';
dotenv.config();

const app = express();
app.use(express.json());

app.use(addressesRoutes);
app.use(cartProductRoutes);
app.use(categorysRoutes);
app.use(productsRoutes);
app.use(wishingRoutes);
app.use(ordersRoutes);

const port = process.env.PORT || 5000;

setupDatabaseConnection() 
  .then((sequelize) => {
    return sequelize.sync({ force: false });
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`app is running on port ${port}`);
    });
  })
  .catch((error: any) => {
    console.error(`Error starting the server: ${error.message}`);
  });
