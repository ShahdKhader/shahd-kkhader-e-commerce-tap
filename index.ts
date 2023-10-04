import express from 'express';
import db from './models';

import addressesRoutes from './routes/addressesRoutes';
import cartProductRoutes from './routes/cartProductRoutes';
import categorysRoutes from './routes/categorysRoutes';
import productsRoutes from './routes/productsRoutes';
import wishingRoutes from './routes/wishingRoutes';
import ordersRoutes from './routes/ordersRouters';
const app = express();
app.use(express.json());

app.use(addressesRoutes);
app.use(cartProductRoutes);
app.use(categorysRoutes);
app.use(productsRoutes);
app.use(wishingRoutes);
app.use(ordersRoutes);

const port = process.env.PORT || 3005;

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`app is running on port ${port}`);
  });
});
