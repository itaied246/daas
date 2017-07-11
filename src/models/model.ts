export interface Model {
    name: string;
    fields: [Field]
}

export interface Field {
    name: string;
    type: string;
}