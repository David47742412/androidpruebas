import { Injectable, Scope } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TypeOrmConfigService implements TypeOrmConfigService {
  /*getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  listbase=["webmass","prueba1","prueba2"]*/

  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const data: TypeOrmModuleOptions = {
      type: 'mysql',
      host: this.configService.get('database.host'),
      port: this.configService.get('database.port'),
      username: this.configService.get('database.name'),
      password: this.configService.get('database.password'),
      database: this.configService.get('database.database'),
      autoLoadEntities: true,
      synchronize: true,
    };
    return data;
  }
}
