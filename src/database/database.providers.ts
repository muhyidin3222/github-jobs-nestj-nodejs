import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from 'src/common/library/config.service';
import { ConfigModule } from 'src/common/library/config.module';
import { JobEntity } from './jobs.entity';
import { UserEntity } from './user.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const host: string = configService.get('HOST');
      const username: string = configService.get('USERNAME');
      const password: string = configService.get('PASSWORD');
      const database: string = configService.get('DATABASE');

      const databaseSetup = {
        host,
        username,
        password,
      };

      const sequelize = new Sequelize({
        dialect: 'mysql',
        logging: false,
        port: 3306,
        ...databaseSetup,
        database,
        define: {
          freezeTableName: true,
          timestamps: false,
        },
      });

      sequelize.addModels([UserEntity, JobEntity]);
      return sequelize;
    },
  },
];
