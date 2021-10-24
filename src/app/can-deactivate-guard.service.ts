import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { BsModalService } from 'ngx-bootstrap';
import { ModalComponent } from './components/modal/modal.component';


export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private modalService: BsModalService) {}

  canDeactivate(component: CanComponentDeactivate) {
    if (component) {
      const subject = new Subject<boolean>();

      const modal = this.modalService.show(ModalComponent, {class: 'modal-dialog-centered'});
      modal.content.subject = subject;

      return subject.asObservable();
    }

    return true;
  }
}
