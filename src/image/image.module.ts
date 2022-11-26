import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { entities, globalService } from '../services/global.service';

@Module({
  controllers: [
    ImageController,
  ],
  providers: [globalService.ImageModel, globalService.ImageService, globalService.UserService].flat(),

  imports: [TypeOrmModule.forFeature([entities.Image].flat()),
]
  
})
export class ImageModule {}
