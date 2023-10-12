import { Sequelize } from 'sequelize';
import configlist from '../config/config';

const nodeenv = process.env.NODE_ENV as 'development' | 'test' | 'production'
const config = configlist[nodeenv || 'development']
console.log('DB_CONFIG:', config);
const dburl = `${config.dialect}://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;

const sequelize = new Sequelize(dburl);

export default sequelize;
