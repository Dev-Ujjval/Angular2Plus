import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AppService } from '../services/app.service';
import { IPeriodicElement } from '../models/app.model';
import { initDetail, initData } from '../data';
import { DeleteUser, GetUser, SaveUser, UpdateUser } from '../actions/app.action';

export class AppStateModel {
    payload: IPeriodicElement[];
    constructor() {
        this.payload = initData
    }
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        payload: initData
    }
})

@Injectable()
export class AppState {
    constructor(private _appService: AppService) {}

    @Selector()
    static get_user(state: AppStateModel): IPeriodicElement[] {
        return state.payload;
    }

    @Action(GetUser)
    GetUser({patchState}: StateContext<AppStateModel>, {}): void {
        this._appService.onGet(initData);
        patchState({payload: initData})
    }

    @Action(SaveUser)
    SaveUser({}: StateContext<AppStateModel>, { defaultPayload, newPayload }: SaveUser): void {
        this._appService.onPost(defaultPayload, newPayload)
    }

    @Action(UpdateUser)
    UpdateUser({}: StateContext<AppStateModel>, { defaultPayload, updatedPayload }: UpdateUser): void {
        this._appService.onPut(defaultPayload, updatedPayload);
    }

    @Action(DeleteUser)
    DeleteUser({}: StateContext<AppStateModel>, {defaultPayload, id}: DeleteUser): void {
        this._appService.onDelete(defaultPayload, id);
    }
}
