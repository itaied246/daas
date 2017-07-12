import { IField } from "./interfaces";

const Field = (f: IField) => `${f.name} = models.${f.type}`

export default Field;
