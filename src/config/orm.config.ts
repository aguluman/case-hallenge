import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();
export const HabariDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ['dist/src/entities/*.js'],
    migrations: ['src/migrations/*.ts'],
    synchronize: true, // For dev: true, //For production: false
});

HabariDataSource.initialize()
    .then(() => {
        console.log('Data Source has been initialized!');
    })
    .catch((err) => {
        console.error('Error during Data Source initialization:', err);
    });
