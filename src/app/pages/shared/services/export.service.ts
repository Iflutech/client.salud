import { Injectable } from '@angular/core'
import writeXlsxFile from 'json-as-xlsx'

@Injectable({
    providedIn: 'root'
})
export class ExportService {

    exportToExcel(headers: { label: string, key: string }[], data: any[], fileName: string): void {
        let columns = headers.map((header) => ({
            label: header.label,
            value: header.key
        }));

        let settings = {
            sheetName: 'Reporte',
            fileName: fileName,
            extraLength: 3,
            writeOptions: {}
        };

        let excelData = [{
            sheet: 'Reporte',
            columns: columns,
            content: data
        }];

        writeXlsxFile(excelData, settings);
    }
}

