import { NzDatePickerModule } from 'ng-zorro-antd/date-picker'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'

import { NgModule } from '@angular/core'

@NgModule({
  exports: [
    NzDatePickerModule,
    NzDrawerModule,
    NzSelectModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule
  ]
})
export class SheetInformationModule {}