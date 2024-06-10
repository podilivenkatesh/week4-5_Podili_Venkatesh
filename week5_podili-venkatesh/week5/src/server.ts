import app from './app';
import sequelize from './postgresdb/dbconfig';
import logger from './utils/logger';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // Synchronize models with the database
    logger.info('Database connected!');
    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
};

startServer();
