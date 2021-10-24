import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  rows = [];

  columns = [{ prop: 'id' }, { name: 'Name' }, { name: 'Year' }, { name: 'Color' }];

  constructor(private dashboardService: DashboardService, private logger: NGXLogger) { }

  ngOnInit() {
    this.GetResources();
  }

  GetResources() {
    try {
      this.dashboardService.getResources().subscribe(res => {
        this.rows = res.data;
      });
    } catch (error) {
      this.logger.error(error);
    }
  }
}

