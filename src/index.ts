import 'reflect-metadata';
import { AppDataSource } from './data-source';
import { User } from './entity/User';

const main = async () => {
    await AppDataSource.initialize();
    const manager = AppDataSource.manager;

    const clearResult = await manager.clear(User);
    console.log('clearResult', clearResult);

    const insertResult = await manager.insert(User, [{
        lastName: 'あい',
        firstName: 'うえお',
        age: 20,
    }, {
        lastName: 'かき',
        firstName: 'くけこ',
        age: 30,
    }]);
    console.log('insertResult', insertResult);

    const findAllResult = await manager.find(User);
    console.log('findAllResult', findAllResult);

    const findOneResult = await manager.findOne(User, { where: { id: 2 } });
    console.log('findOneResult', findOneResult);

    const findOneFailResult = await manager.findOne(User, { where: { id: 3 } });
    console.log('findOneFailResult', findOneFailResult);

    process.exit();
};
main();
