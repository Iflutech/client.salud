import { NgModule } from '@angular/core'
import { NzAnchorModule } from 'ng-zorro-antd/anchor'
import { NzDividerModule } from 'ng-zorro-antd/divider'
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzUploadModule } from 'ng-zorro-antd/upload'

@NgModule({
	exports: [
		NzAnchorModule,
		NzDividerModule,
		NzDrawerModule,
		NzPopconfirmModule,
		NzSelectModule,
		NzTableModule,
		NzTagModule,
		NzToolTipModule,
		NzUploadModule
	]
})
export class ExamModule {}