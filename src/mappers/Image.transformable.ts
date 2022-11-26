import { MapperTransformer } from './transformable';
import { CreateImageDto } from '../image/dto/create-image.dto';
import { ImageInterface } from 'src/image/entities/image.interface';

export class ImageTransformable implements MapperTransformer<CreateImageDto, ImageInterface>{

    transform(image: CreateImageDto): ImageInterface {
        
        return {

            image_id: image.image_id,
            image: image.image

        }

    }

}