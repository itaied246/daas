import { IField } from "../interfaces/index";
import Field from '../Field';

export const parseFields = (fields: [IField]) =>
    fields.map(field => Field(field))
        .map(field => `    ${field}`)
        .join('\n');