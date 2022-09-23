import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionEntity } from './question.entity';

@Injectable()
export class QuestionsService {
    constructor(@InjectRepository(QuestionEntity) private questionsRepository: Repository<QuestionEntity>) { }

    async createQuestion(createQuestionDto: CreateQuestionDto): Promise<QuestionEntity> {
        const question = this.questionsRepository.create(createQuestionDto);
        await this.questionsRepository.save(question);
        return question;
    }

    async getAll(): Promise<QuestionEntity[]> {
        return this.questionsRepository.find();
    }



}