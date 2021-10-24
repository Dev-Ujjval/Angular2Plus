Step-1] npm install @swimlane/ngx-datatable

Step-2] Set theme
@import '~@swimlane/ngx-datatable/release/index.css';
@import '~@swimlane/ngx-datatable/release/themes/material.css';
@import '~@swimlane/ngx-datatable/release/assets/icons.css';

Step-3] import module
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

Step-4] put html like below:
<div>
      <ngx-datatable
        [rows]="rows"
        [columns]="columns">
      </ngx-datatable>
    </div>