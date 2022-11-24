import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonaModule } from './persona/persona.module';
import { UtilityService } from './services/getHours.services';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PersonaModule, 
    MongooseModule.forRoot(
      "mongodb+srv://webbmass:pas2w3ord1@clustermass.igrofxp.mongodb.net/webmass_pre"
    )
  ],
  controllers: [AppController],
  providers: [AppService, UtilityService ],
})
export class AppModule {}
