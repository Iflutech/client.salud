import { NgModule } from '@angular/core'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzStepsModule } from 'ng-zorro-antd/steps'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'

@NgModule({
  exports: [
    NzLayoutModule,
    NzStepsModule,
    NzSelectModule,
    NzRadioModule,
    NzPopconfirmModule 
  ]
})
export class SaludModule { }