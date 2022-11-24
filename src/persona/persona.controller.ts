import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona, PersonaDocument } from './schema/persona.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UtilityService } from 'src/services/getHours.services';

@Controller('persona')
export class PersonaController {
  constructor(
    @InjectModel(Persona.name) private person: Model<PersonaDocument>,
    private utily: UtilityService
    ) {}

  @Post()
  async create(@Body() usuario: CreatePersonaDto) {

    usuario.createdAt = this.utily.obtenerfechaactual();
    usuario.updatedAt = this.utily.obtenerfechaactual();

    return await this.person.create(usuario);
  }

  @Get()
  findAll() {
    return this.person.find();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.person.findById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) { 
    updatePersonaDto.updatedAt = updatePersonaDto.updatedAt = this.utily.obtenerfechaactual();
    return this.person.findByIdAndUpdate(id, updatePersonaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.person.remove(id);
  }
}
