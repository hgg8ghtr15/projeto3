import { Sequelize } from 'sequelize';
const config = require('./config.js');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
  }
);

sequelize.sync({ force: true })
  .then(() => {
    console.log('Tabelas criadas com sucesso');
  })
  .catch((error) => {
    console.error('Erro ao criar tabelas:', error);
  });

export default sequelize;