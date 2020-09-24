// nestjs
import { Module } from '@nestjs/common';

// @encuestas packages
import { DataModule } from '@encuestas/data';

// providers
import { SurveyProvider } from './providers';

// controllers
import { SurveyController } from './controllers';

@Module({
  controllers: [SurveyController],
  imports: [DataModule],
  providers: [SurveyProvider]
})
export class SurveyModule { }
