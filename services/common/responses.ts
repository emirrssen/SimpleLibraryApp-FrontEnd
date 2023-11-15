export class BaseResponse {
    IsSuccess: boolean = false;
    Message: string = "";

    constructor(fields?:{ IsSuccess: boolean, Message: string }) {
        Object.assign(this, fields);
    }
}

export class GenericDataResponse<T> extends BaseResponse {
    Data: T | null | undefined = null;
    IsSuccess: boolean = false;
    Message: string = "";

    constructor(fields?: { Data: T, IsSuccess: boolean, Message: string }) {
        super(fields);
        this.Data = fields?.Data;
    }
}