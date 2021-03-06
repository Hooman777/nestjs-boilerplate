import { QuestionLogic } from '../logic/question.logic';
import { Question } from '../models/Question';
import { ICrud } from 'interfaces/icrud';
export declare class QuestionController implements ICrud<Question> {
    private readonly questionLogic;
    constructor(questionLogic: QuestionLogic);
    get(id: string): Promise<Question>;
    getAll(): Promise<Question[]>;
    delete(id: string): Promise<boolean>;
    save(instance: Question): Promise<Question>;
    update(id: string, instance: Question): Promise<boolean>;
}
