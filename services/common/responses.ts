export class BaseResponse {
    isSuccess: boolean = false;
    message: string = "";

    constructor(fields?:{ isSuccess: boolean, message: string }) {
        Object.assign(this, fields);
    }
}

export class GenericDataResponse<T> extends BaseResponse {
    data: T | null | undefined = null;
    isSuccess: boolean = false;
    message: string = "";

    constructor(fields?: { data: T, isSuccess: boolean, message: string }) {
        super(fields);
        this.data = fields?.data;
    }
}