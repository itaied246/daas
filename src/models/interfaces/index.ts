export interface IModel {
    name: string;
    body: IField[];
    description?: string;
}

export interface IField {
    field: IInfo;
    input?: IInfo;
}

export interface IInfo {
    name: string;
    type: string;
}
