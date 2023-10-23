export class Utilities {
    public debugMode(): boolean {
        console.log(this.debugInvokeLocal() || this.debugOfflineStart());
        return this.debugInvokeLocal() || this.debugOfflineStart();
    }

    public debugInvokeLocal(): boolean {
        return process.env['IS_LOCAL'] === 'true';
    }

    public debugOfflineStart(): boolean {
        return process.env['IS_OFFLINE'] === 'true';
    }

    public tryJSONParse(payload: any): any {
        try {
            return typeof payload === 'string' ? JSON.parse(payload): payload;
        }
        catch (err) {
            throw err;
        }
    }

    public resolvePayload(mock: any, event: any): any {
        return this.tryJSONParse(this.debugInvokeLocal() ? mock : event.body)
    }

    public resolveActionCd(event: any): string {
        return 'queryStringParameters' in event ? event.queryStringParameters.actioncd.toLowerCase() : '';
    }

    public resolveStackTrace(stack: string): Array<string> {
        let stackArray: Array<string> = stack.split("\n");
        let resolvedStack: Array<string> = new Array<string>();

        stackArray.forEach(stack => {
            if (stack.length > 0) resolvedStack.push(stack.includes('^') ? stack : stack.trim());
        });

        return resolvedStack;
    }
}