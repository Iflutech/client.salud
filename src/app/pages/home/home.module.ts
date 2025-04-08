import { NgModule } from '@angular/core'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { NzMenuModule } from 'ng-zorro-antd/menu'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'

@NgModule({
  exports: [
    NzAvatarModule,
    NzDropDownModule,
    NzLayoutModule,
    NzMenuModule
  ]
})
export class HomeModule { }