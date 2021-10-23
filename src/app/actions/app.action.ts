import { IPeriodicElement } from "../models/app.model";

export enum APP_ACTIONS_TYPES {
    GET_USER = '[User] GET USER',
    SAVE_USER = '[User] SAVE USER',
    UPDATE_USER = '[User] UPDATE USER',
    DELETE_USER = '[User] DELETE USER',
}

export class GetUser {
    static readonly type = APP_ACTIONS_TYPES.GET_USER;
    constructor() {}
}

export class SaveUser {
    static readonly type = APP_ACTIONS_TYPES.SAVE_USER;
    constructor(public defaultPayload: IPeriodicElement[], public newPayload: IPeriodicElement) {}
}

export class UpdateUser {
    static readonly type = APP_ACTIONS_TYPES.UPDATE_USER;
    constructor(public defaultPayload: IPeriodicElement[], public updatedPayload: IPeriodicElement) {}
}

export class DeleteUser {
    static readonly type = APP_ACTIONS_TYPES.DELETE_USER;
    constructor(public defaultPayload: IPeriodicElement[], public id: string) {}
}
