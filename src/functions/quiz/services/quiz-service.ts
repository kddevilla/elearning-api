import { QuizDataService } from "./quiz-dataservice";

export class QuizService {
    constructor(private qds: QuizDataService) { }

    public getQuizItemsBySubject(subject: string): Array<any> {
        let questionList: Array<any> = this.randomizeItems(this.qds.getQuizDetailsBySubject(subject));
        questionList.forEach((q: any, index: number) => {
            if (q.type == "multiple") {
                questionList[index].answers = this.randomizeItems(q.answers);
            }
        });

        return questionList;
    }

    private randomizeItems(itemList: Array<any>): Array<any> {
        let currentIndex = itemList.length, randomIndex;

        while (currentIndex > 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [itemList[currentIndex], itemList[randomIndex]] = [itemList[randomIndex], itemList[currentIndex]];
        }

        return itemList;
    }

    public getScoreScaleEquivalent(score: number): any {
        let scoreEvaluation: string = '';
        let courseRecommendation: string = '';
        let scale: Array<any> = this.qds.getScoreScale();

        scale.forEach((s: any, index: number) => {
            if (index < (scale.length - 1) && score >= s.score && score < scale[index + 1].score) {
                scoreEvaluation = s.scale;
                courseRecommendation = s.mRecomCourse;
            }
            else if (index == (scale.length - 1) && score >= s.score) {
                scoreEvaluation = s.scale;
                courseRecommendation = s.mRecomCourse;
            }
        });

        return {
            sEvaluation: scoreEvaluation,
            cRecommendation: courseRecommendation
        }
    }
}