import express from 'express'
import db from './models';
const app = express();
app.use(express.json());
import router from './routes/router';
const port = process.env.PORT|| 3005;
app.use(router);


db.sequelize.sync().then(()=>{
  app.listen(port, () => {
    console.log(`app is running on port ${port}`);
  });
});

