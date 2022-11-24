import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreatePersonaDto } from './create-persona.dto';

export class UpdatePersonaDto extends PartialType(OmitType(CreatePersonaDto, ['createdAt'] as const)) {
    persona_comentario: string;

    persona_content:string;

    persona_genero: string;

    persona_puntacion: number;

    persona_despuntacion: number;

    persona_porcentaje: number;

    persona_title: string;

    updatedAt: string;
}
