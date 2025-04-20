import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ExportService } from './pages/shared/services/export.service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client.salud'
  // cabecera = [
  //   { label: "Fecha Creacion", key: "createdDate" },
  //   { label: "Grupo de Motivo", key: "motivoGrupo" },
  //   { label: "Estado", key: "estado" }
  // ]
  // data = [
  //   { createdDate: '2025-03-20', motivoGrupo: 'M8', estado: 'A' },
  //   { createdDate: '2025-03-20', motivoGrupo: 'M8', estado: 'A' },
  //   { createdDate: '2025-03-20', motivoGrupo: 'M8', estado: 'A' },
  //   { createdDate: '2025-03-20', motivoGrupo: 'M8', estado: 'A' },
  //   { createdDate: '2025-03-20', motivoGrupo: 'M8', estado: 'A' }
  // ]
  // constructor(
  //   private readonly exportService: ExportService
  // ) {}

  // exportarDatos(): void {
  //   this.exportService.exportToExcel(this.cabecera, this.data, 'test')
  // }
}
