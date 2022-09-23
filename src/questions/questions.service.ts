import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDto } from './dto/create-question.dto';
import { EditQuestionDto } from './dto/edit-question.dto';
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

    async getOne(id: string): Promise<QuestionEntity> {
        const found = await this.questionsRepository.findOneBy({ id });
        if (!found) {
            throw new NotFoundException(`There is no question with ID:${id}`);
        }
        return found;
    }

    async deleteQuestion(id: string): Promise<void> {
        const result = await this.questionsRepository.delete({ id });

        if (result.affected === 0) {
            throw new NotFoundException(`There is no question with ID:${id}`);
        }
    }

    async editQuestion(id: string, editQuestion: EditQuestionDto) {
        const found = await this.getOne(id);
        await this.questionsRepository.update(found, editQuestion);
    }
}