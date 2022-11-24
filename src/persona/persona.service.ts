import { Injectable } from '@nestjs/common';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PersonaController } from './persona.controller';

@Injectable()
export class PersonaService {

  private PersonModel: PersonaController

  async create(createPersonaDto: CreatePersonaDto) {
    return await this.PersonModel.create(createPersonaDto);
  }

  async findAll() {
    return await this.PersonModel.findAll();
  }

  async findOne(id: string) {
    return await this.PersonModel.findOne(id);
  }

  async update(id: string, updatePersonaDto: UpdatePersonaDto) {
    return await this.PersonModel.update(id, updatePersonaDto);
  }

  async remove(id: string) {
    return await this.PersonModel.remove(id);
  }
}
