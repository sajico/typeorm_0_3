import { DataSource, DataSourceOptions } from 'typeorm';
import { User } from './entity/User';

const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'typeorm_user',
    password: 'typeorm_password',
    database: 'typeorm_0_3',
    synchronize: true,
    logging: false,
    entities: [User],
};

export const AppDataSource: DataSource =
    new DataSource(dataSourceOptions);
