import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { QuestionsModule } from './questions/questions.module';
import { configValidationSchema } from './config.schema';
import { QuestionEntity } from './questions/question.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
          type: 'mysql',        
          host: process.env.DB_HOST,
          port: Number(process.env.DB_PORT),
          username: 'root',
          password: process.env.DB_PASSWORD,
          database: 'millionaires',        
          entities:[QuestionEntity],
          synchronize:true,
       
    }),
    QuestionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
