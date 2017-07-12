import { IField } from "../model";

const Field = (f: IField) => `${f.name} = models.${f.type}`

export default Field;