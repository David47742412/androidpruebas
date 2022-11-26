import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ImageModel } from './model/image.model';

@Injectable()
export class ImageService {

  constructor (
    private model: ImageModel
  ) {

  }

  async create(createImageDto: CreateImageDto) {
    return await this.model.insert(createImageDto);
  }

  async findAll() {
    return await this.model.findAll();
  }

  async findOne(id: number) {
    return await this.model.findOne(id);
  }

  async findOnaImage(id: number) {
    return await this.model.findImage(id)
  }

  async update(id: number, updateImageDto: UpdateImageDto) {
    return await this.model.update(id, updateImageDto);
  }

  async remove(id: number) {
    return await this.model.remove(id);
  }
}
