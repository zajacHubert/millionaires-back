import { IsEnum, IsString, MaxLength, MinLength } from "class-validator";
import { DifficultyLevel } from "../types/question.enum";

export class EditQuestionDto {
    @IsString()
    @MinLength(5)
    @MaxLength(300)
    txt: string;

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    ansA: string;

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    ansB: string;

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    ansC: string;

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    ansD: string;

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    correctAns: string;

    @IsString()
    @MinLength(4)
    @MaxLength(6)
    @IsEnum(DifficultyLevel)
    difficultyLevel: string;
}