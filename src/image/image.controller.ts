import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadedFile } from '@nestjs/common/decorators';
import { diskStorage } from 'multer';
import { Response } from 'express';
import { Image } from './entities/image.entity';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];
          const fileExtension = file.originalname.split('.')[1];
          const newFileName =
            name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;

          cb(null, newFileName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(jpg | jpge | png)$/)) {
          return cb(null, false);
        } else {
          cb(null, true);
        }
      },
    }),
  )
  create(
    @Body() image: CreateImageDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    if (!file) {
      return {
        error: 'Solo se pueden subir imagenes jpg | jpge | png ',
      };
    } else {
      const response = {
        filePath: `http://ec2-52-90-172-250.compute-1.amazonaws.com/image/picture/${file.filename}`,
      };
      image.image = response.filePath;
      return this.imageService.create(image);
    }
  }

  @Get()
  findAll() {
    return this.imageService.findAll();
  }

  @Get('/picture/:field')
  async findOneImage(@Param('field') field: string, @Res() res: Response) {
    res.sendFile(field, { root: './uploads' });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const valor = this.imageService.findOne(+id);

    if (valor) {
      return this.imageService.findOnaImage(+id);
    }
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const name = file.originalname.split('.')[0];
          const fileExtension = file.originalname.split('.')[1];
          const newFileName =
            name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;

          cb(null, newFileName);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.originalname.match(/\.(jpg | jpge | png)$/)) {
          return cb(null, false);
        } else {
          cb(null, true);
        }
      },
    }),
  )
  update(
    @Param('id') id: string,
    @UploadedFile() file,
    @Body() updateImageDto: UpdateImageDto,
  ) {
    if (!file) {
      return {
        error: 'Solo se pueden subir imagenes jpg | jpge | png ',
      };
    } else {
      const response = {
        filePath: `http://[::1]:3000/image/pictures/${file.filename}`,
      };
      updateImageDto.image = response.filePath;
      return this.imageService.update(+id, updateImageDto);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.imageService.remove(+id);
  }
}
