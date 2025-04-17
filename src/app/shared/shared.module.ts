import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzModalModule } from 'ng-zorro-antd/modal'

@NgModule({
  exports: [
    CommonModule,

    NzButtonModule,
    NzBreadCrumbModule,
    NzGridModule,
    NzIconModule,
    NzEmptyModule,
    NzFormModule,
    NzInputModule,
    NzMessageModule,
    NzSpinModule,
    NzTypographyModule,
    NzModalModule,
    
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SharedModule { }