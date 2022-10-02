import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { EditQuestionDto } from './dto/edit-question.dto';
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

    @Delete('/:id')
    deleteQuestion(@Param('id') id: string) {
        return this.questionsService.deleteQuestion(id);
    }

    @Patch('/:id')
    editQuestion(
        @Param('id') id: string,
        @Body() editQuestionDto: EditQuestionDto,
    ) {
        return this.questionsService.editQuestion(id, editQuestionDto);
    }
}
