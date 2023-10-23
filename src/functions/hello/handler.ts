import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/apiGateway';
import { formatJSONResponse } from '@libs/apiGateway';
import mock from './mock.json';
import { Utilities } from '@libs/utils';
import * as jsonModels from 'src/payload-schemas/request/main';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof jsonModels.helloSchema> = async (event) => {
  let utils = new Utilities();
  let payload = utils.resolvePayload(mock, event);

  return formatJSONResponse({
    message: `Hello ${payload.name}, welcome to the exciting Serverless world!`
  });
}

export const main = hello;