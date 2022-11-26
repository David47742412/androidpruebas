import { ImageInterface } from '../entities/image.interface';

export class CreateImageDto implements ImageInterface {
  image_id: number;

  image: string;
}
