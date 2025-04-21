import { NgModule } from '@angular/core'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

@NgModule({
  exports: [
    NzDividerModule,
    NzDrawerModule,
    NzPopconfirmModule,
    NzSelectModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule
  ]
})
export class DriverModule {}