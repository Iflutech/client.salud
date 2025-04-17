import { NzListModule } from 'ng-zorro-antd/list'
import { NzSegmentedModule } from 'ng-zorro-antd/segmented'
import { NzTagModule } from 'ng-zorro-antd/tag'

import { NgModule } from '@angular/core'

@NgModule({
  exports: [
    NzListModule,
    NzSegmentedModule,
    NzTagModule,
  ]
})
export class SheetDetailModule {}