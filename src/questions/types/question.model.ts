import { DifficultyLevel } from "./question.enum";
export interface Question {
    id: string;
    txt: string;
    ansA: string;
    ansB: string;
    ansC: string;
    ansD: string;
    correctAns: string;
    difficultyLevel: DifficultyLevel;
}