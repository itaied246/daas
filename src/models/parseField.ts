import { IField } from "./interfaces";

export const parseField = (f: IField) => `${f.field.name} = models.${f.field.type}`;
