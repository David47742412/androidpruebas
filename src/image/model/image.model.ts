import { Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ImageTransformable } from '../../mappers/Image.transformable';
import { Image } from '../entities/image.entity';
import { CreateImageDto } from '../dto/create-image.dto';
import { UpdateImageDto } from '../dto/update-image.dto';
import { ImageInterface } from '../entities/image.interface';

@Injectable({ scope: Scope.REQUEST })
export class ImageModel {
  private transform = new ImageTransformable();

  constructor(
    @InjectRepository(Image)
    private imageRepository: Repository<Image>,
  ) {}

  public async insert(image: CreateImageDto) {
    try {
      const imagen = this.transform.transform(image);
      const result = await this.imageRepository.insert(imagen);
      return await this.imageRepository.findOne({
        where: { image_id: result.identifiers[0].image_id },
      });
    } catch (error) {
      return {
        message: 'Error al Subir una Imagen',
      };
    }
  }

  public async update(id: number, image: UpdateImageDto) {
    try {
      const imagen = this.transform.transform(image as CreateImageDto);
      return await this.imageRepository.update({ image_id: id }, imagen);
    } catch (error) {
      return {
        message: 'Error al Actualizar una imagen',
        error: error,
      };
    }
  }

  public async findAll() {
    try {
      return this.imageRepository.find();
    } catch (error) {
      return {
        message: 'Error al Listar todas las imagenes',
      };
    }
  }

  public async findOne(id: number) {
    try {
      return await this.imageRepository.findOne({ where: { image_id: id } });
    } catch (error) {
      return {
        message: 'Error al listar esta imagen',
      };
    }
  }

  public async findImage(id: number) {
    try {
      const image = new Image();

      const imagen = this.transform.transform(image as CreateImageDto);

      return imagen.image;
    } catch (error) {
      return {
        message: 'Error al listar esta imagen',
      };
    }
  }

  public async remove(id: number) {
    try {
      return await this.imageRepository.delete({ image_id: id });
    } catch (error) {
      return {
        message: 'Error al Eliminar una Imagen',
      };
    }
  }
}
