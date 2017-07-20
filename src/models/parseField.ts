import { IField } from "./interfaces";

export const parseField = (f: IField) => `${f.name} = models.${f.type}`;
