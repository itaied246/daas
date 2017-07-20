import { IField } from "../interfaces/index";
import { parseField } from "../parseField";

export const parseFields = (fields: [IField]) =>
    fields.map(parseField)
        .map((field) => `    ${field}`)
        .join("\n");
