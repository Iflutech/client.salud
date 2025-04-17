import { Routes } from '@angular/router'
import { LoginComponent } from './pages/login/login/login.component'
import { AuthGuard, AuthSheetGuard, LoginGuard } from './guard/auth.guard'
import { LoginAdminComponent } from './pages/login/login-admin/login-admin.component'
import { SaludComponent } from './pages/salud/salud.component'
import { ResponseComponent } from './pages/response/response.component'
import { HomeComponent } from './pages/home/home.component'
import { DashboardComponent } from './pages/home/modules/dashboard/dashboard.component'
import { SheetInformationComponent } from './pages/home/modules/sheet-information/sheet-information.component'
import { DetailSheetComponent } from './pages/home/modules/sheet-information/detail/sheet-detail.component'

export const routes: Routes = [
  { path: '', component: SaludComponent, canActivate: [AuthSheetGuard] },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
      { path: 'dashboard', component: DashboardComponent, data: { breadcrumb: 'Dashboard' } },
      { path: 'sheet-information', component: SheetInformationComponent, data: { breadcrumb: 'Ficha' },
        children: [
          { path: 'detail/:id', component: DetailSheetComponent, data: { breadcrumb: 'Detalle' } }
        ]
      }
    ]
  },
  { path: 'response', component: ResponseComponent, canActivate: [AuthSheetGuard] },
  { path: 'verification', component: LoginComponent },
  { path: 'login', component: LoginAdminComponent, canActivate: [LoginGuard] }
];
