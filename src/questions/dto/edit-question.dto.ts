import { IsEnum, IsString, MaxLength, MinLength } from "class-validator";

export class EditQuestionDto {
    @IsString()
    @MinLength(5)
    @MaxLength(200)
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
}