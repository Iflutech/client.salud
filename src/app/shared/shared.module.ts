import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzMessageModule } from 'ng-zorro-antd/message'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzEmptyModule } from 'ng-zorro-antd/empty'

@NgModule({
  exports: [
    CommonModule,

    NzButtonModule,
    NzGridModule,
    NzIconModule,
    NzEmptyModule,
    NzFormModule,
    NzInputModule,
    NzMessageModule,
    NzSpinModule,
    NzTypographyModule,
    
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class SharedModule { }