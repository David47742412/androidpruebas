import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateImageDto } from './create-image.dto';

export class UpdateImageDto extends PartialType(OmitType( CreateImageDto, ['image_id'] as const)) {

    image?: string;

}
