import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { NGXLogger } from 'ngx-logger';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  items = [];
  @ViewChild('myTable', { static: true }) table: DatatableComponent;

  rows = [];
  columns = [];

  pagination = {
    offset: 0,
    count: 0,
    limit: 0
  };

  modalRef: BsModalRef;
  constructor(private dashboardService: DashboardService, private logger: NGXLogger, private modalService: BsModalService) {
  }
  GetUsers(id) {
    try {
      this.dashboardService.getUsers(id).subscribe(res => {
        this.rows = [...res.data];
        this.pagination.offset = res.page - 1;
        this.pagination.count = res.total;
        this.pagination.limit = res.per_page;
      });
    } catch (error) {
      this.logger.error(error);
    }
  }

  ngOnInit() {
    this.GetUsers(1);
    this.table.offset = 0;
  }

  onPage(val) {
    this.GetUsers(val.offset + 1);
  }


  openModal(template: TemplateRef<any>, data) {
    this.items = [];
    this.items.push({
      avatar: data.avatar,
      email: data.email,
      fullname: data.first_name + ' ' + data.last_name,
    });
    this.modalRef = this.modalService.show(template);
  }
}


