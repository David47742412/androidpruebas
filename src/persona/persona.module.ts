import { Module } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';
import { UtilityService } from 'src/services/getHours.services';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonaSchema, Persona } from './schema/persona.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Persona.name,
        schema: PersonaSchema
      }
    ])
  ],
  controllers: [PersonaController],
  providers: [PersonaService, UtilityService]
})
export class PersonaModule {}
