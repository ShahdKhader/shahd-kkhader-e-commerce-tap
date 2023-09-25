import express from 'express'
import db from './models';
const app = express();
app.use(express.json());
const port = process.env.PORT|| 3005;

db.sequelize.sync().then(()=>{
  app.listen(port, () => {
    console.log(`app is running on port ${port}`);
  });
});

