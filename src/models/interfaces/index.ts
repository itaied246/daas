export interface IModel {
    name: string;
    fields: IField[];
    inputs: IField[];
    description?: string;
}

export interface IField {
    name: string;
    type: string;
}
