import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class QuestionEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    txt: string;

    @Column({
        length: 30,
    })
    ansA: string;

    @Column({
        length: 30,
    })
    ansB: string;

    @Column({
        length: 30,
    })
    ansC: string;

    @Column({
        length: 30,
    })
    ansD: string;

    @Column({
        length: 30,
    })
    correctAns: string;

    @Column({
        length: 6,
    })
    difficultyLevel: string;
}