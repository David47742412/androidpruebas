import { Image } from '../image/entities/image.entity';
import { ImageService } from '../image/image.service';
import { ImageModel } from '../image/model/image.model';
import { UserService } from './user.service';


export const globalService = {

    ImageService,
    ImageModel,
    UserService

}

export const entities = {

    Image

}