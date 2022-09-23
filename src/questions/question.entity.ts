import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class QuestionEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    txt: string;

    @Column()
    ansA: string;

    @Column()
    ansB: string;

    @Column()
    ansC: string;

    @Column()
    ansD: string;

    @Column()
    correctAns: string;
}