const { DataSource } = require('typeorm');
const dotenv = require('dotenv');

dotenv.config();

const AppDataSource = new DataSource({
  type: process.env.DATABASE_TYPE,
  host: process.env.DATABASE_HOST || 'localhost',
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/dist/infra/entities/*.{js,ts}'],
  migrations: [__dirname + '/dist/infra/migrations/*{js,ts}'],
  synchronize: false,
});

module.exports = { AppDataSource };
