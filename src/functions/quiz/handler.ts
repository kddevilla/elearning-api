import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import mock from './mock.json';
import { Utilities } from '@libs/utils';
import * as jsonModels from 'src/payload-schemas/request/main';
import { QuizService } from './services/quiz-service';
import { QuizDataService } from './services/quiz-dataservice';

const qds = new QuizDataService();
const qs = new QuizService(qds);
const utils = new Utilities();

export const main: ValidatedEventAPIGatewayProxyEvent<typeof jsonModels.quizSchema.getQuizItemsBySubject |
                                                      typeof jsonModels.quizSchema.getScoreScaleEquivalent> = async (event) => {

    try {
        let payload = utils.resolvePayload(mock, event);
        let actioncd: string = utils.resolveActionCd(event);
        let result: any = {};

        switch(actioncd.toLowerCase()) {
            case 'getquiz':
                result = qds.getQuiz();
                break;
            case 'getquizitems':
                result = await qs.getQuizItemsBySubject(payload.subject);
                break;
            case 'getscoredetails':
                result = qs.getScoreScaleEquivalent(payload.score);
                break;
            default:
                throw new Error('actioncd unrecognized');
        }

        return formatJSONResponse({
            statusCode: 200,
            response: result
        });
    }
    catch (ex) {
        console.log('handler error:', ex);
        throw formatJSONResponse({
            statusCode: 500,
            message: ex.message,
            stackTrace: utils.resolveStackTrace(ex.stack)
        });
    }
}