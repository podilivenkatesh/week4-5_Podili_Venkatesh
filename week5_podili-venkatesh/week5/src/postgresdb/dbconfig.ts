import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_PROTOCOL,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

const DATABASE_URL = `${DB_PROTOCOL}://${DB_USERNAME}:${encodeURIComponent(DB_PASSWORD!)}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {},
});

// export default sequelize;




sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });


sequelize.sync()  
  .then(() => {
    console.log('Models synchronized with the database.'); 
  })
  .catch((err) => {
    console.error('Unable to synchronize models with the database:', err);
  });



export default sequelize;

