import { IField } from "../interfaces/index";
import Field from '../field';

export const parseFields = (fields: [IField]) =>
    fields.map(Field)
        .map(field => `    ${field}`)
        .join('\n');