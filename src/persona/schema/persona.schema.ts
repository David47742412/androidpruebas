import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


export type PersonaDocument = Persona & Document;

@Schema()
export class Persona {
    @Prop()
    createdAt: string;

    @Prop()
    persona_comentario: string;

    @Prop()
    persona_content:string;

    @Prop()
    persona_genero: string;

    @Prop()
    persona_puntacion: number;

    @Prop()
    persona_despuntacion: number;

    @Prop()
    persona_porcentaje: number;

    @Prop()
    persona_title: string;

    @Prop()
    updatedAt: string;
}

export const PersonaSchema = SchemaFactory.createForClass(Persona);