import type { AWS } from '@serverless/typescript';
import * as jsonModels from './payload-schemas/request/main';

export const functions: AWS['functions'] = {
    quiz: {
        name: 'Quiz_Function',
        handler: 'src/functions/quiz/handler.main',
        events: [
            {
                http: {
                    method: 'post',
                    path: 'quiz'
                }
            }
        ]
    },
    hello: {
        name: 'Test_Function',
        handler: 'src/functions/hello/handler.main',
        events: [
            {
                http: {
                    method: 'post',
                    path: 'hello',
                    request: {
                        schemas: {
                            'application/json': jsonModels.helloSchema
                        }
                    }
                }
            }
        ]
    }
}