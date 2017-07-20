import * as winston from "winston";

const tsFormat = () => (new Date()).toLocaleTimeString();

export const logger = new (winston.Logger)({
    exitOnError: false,
    transports: [
        new (winston.transports.Console)({
            colorize: true,
            handleExceptions: true,
            timestamp: tsFormat(),
        }),
    ],
});
