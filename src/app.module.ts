import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImageModule } from './image/image.module';
import { UserService } from './services/user.service';
import { enviroments } from './enviroments';
import configuration from './config/configuration';
import { TypeOrmConfigService } from './TypeOrmConfigService';
import { ImageModel } from './image/model/image.model';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    ImageModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: enviroments[process.env.NODE_ENV] || ".env"
    }),
    TypeOrmModule.forRootAsync(
      {
        useClass: TypeOrmConfigService
      }
    ),
  ],
  controllers: [AppController],
  providers: [AppService, UserService, TypeOrmConfigService],
})
export class AppModule {}
