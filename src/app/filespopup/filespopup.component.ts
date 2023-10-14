import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FilesService } from '../service/files.service';
import * as saveAs from 'file-saver';
import { ToastrService } from 'ngx-toastr';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-filespopup',
  templateUrl: './filespopup.component.html',
  styleUrls: ['./filespopup.component.css']
})
export class FilespopupComponent {
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['date', 'payroll', 'action'];

  constructor(private dialogref: MatDialogRef<FilespopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fileService: FilesService,
    private toastr: ToastrService,
  ) {

  }
  ngOnInit(): void {
    let filesOrd = this.data.files.sort((a: any, b: any) => {
      return new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime();
    });
    this.dataSource = new MatTableDataSource(filesOrd);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  downloadFile(name: any) {
    this.fileService.DownloadFile(name).subscribe(
      (res) => {
        if (res instanceof Blob) {
          saveAs(res, name);
          this.toastr.success('Se ha descargado el documento con éxito.');
        } else {
          console.error('Error al descargar el documento: Respuesta no válida');
          this.toastr.error('Error al descargar el documento: Respuesta no válida');
        }
      },
      (error) => {
        console.error('Error al descargar el documento:', error);
        this.toastr.error('Ha ocurrido un error al descargar el documento.');
      }
    );
  }

}
