import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
    constructor(private questionsService: QuestionsService) { }

    @Post('/')
    createQuestion(@Body() createQuestionDto: CreateQuestionDto) {
        return this.questionsService.createQuestion(createQuestionDto);
    }

    @Get('/')
    getAll() {
        return this.questionsService.getAll();
    }

    @Get('/:id')
    getOne(@Param('id') id: string) {
        return this.questionsService.getOne(id);
    }
}
