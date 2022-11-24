import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
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
    private utily: UtilityService,
  ) {}

  @Post()
  async create(@Body() usuario: CreatePersonaDto) {
    try {
      usuario.createdAt = this.utily.obtenerfechaactual();
      usuario.updatedAt = this.utily.obtenerfechaactual();

      return await this.person.create(usuario);

    } catch (error) {
      return {
        message: 'Error con los datos creo XD',
      };
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.person.find();
    } catch (error) {
      return {
        message: 'error al devolver los datos',
      };
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.person.findById(id);
    } catch (error) {
      return {
        message: 'Usuario No Encontrado',
      };
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonaDto: UpdatePersonaDto) {
    try {
      
      updatePersonaDto.updatedAt = updatePersonaDto.updatedAt =
      this.utily.obtenerfechaactual();
      return await this.person.findByIdAndUpdate(id, updatePersonaDto);

    } catch (error) {
      return {
        message: 'Error al Actualizar un solo dato',
      };
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      return await this.person.remove(id);
    } catch (error) {
      return {
        message: 'Error al Eliminar un dato',
      };
    }
  }
}
