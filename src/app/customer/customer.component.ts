import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { FilesService } from '../service/files.service';
import { CookieService } from 'ngx-cookie';
import { User } from '../model/usermodel';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public token: any;
  public data: any;
  public email: any;
  public name: any;
  public dataUser: User | null = null;
  public fileSelect = false;
  public acceptExtensions = '.png, .jpeg, .jpg';
  public myReader: FileReader = new FileReader();
  customerlist: any;
  dataSource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private service: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private fileService: FilesService,
    private _cookieService: CookieService
  ) {
    const userData = localStorage.getItem('warriors-club-session');

    if (userData) {
      const parsedUserData = JSON.parse(userData);
      this.dataUser = {
        _id: parsedUserData.id,
        email: parsedUserData.email,
        firstName: parsedUserData.firstName,
        lastName: parsedUserData.lastName,
        roles: parsedUserData.roles
      };
    }
  }
  ngAfterViewInit(): void {
    this.getAll();
  }
  displayedColumns: string[] = ['email', 'name', 'payroll', 'date', 'action'];


  getAll() {
    this.token = this._cookieService.get('warriors-club-session');
    this.fileService.GetListFiles(this.token).subscribe(res => {
      this.customerlist = res;
      const userId = this.dataUser?._id;
      const userData = localStorage.getItem('warriors-club-session');
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        this.email = parsedUserData.email;
        this.name = parsedUserData.firstName;
      }
      const userFiles = this.customerlist.find((customer: any) => customer._id === userId)?.files || [];
      console.log(userFiles)
      this.dataSource = new MatTableDataSource(userFiles);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  fileChangeListener($event: any) {
    this.fileSelect = true;
    let image = new Image();
    this.data = File = $event.target.files[0];
    let file_4 = $event.target.files[0].name.slice(-4);
    switch (file_4) {
      case '.png':
      case '.PNG':
      case '.jpg':
      case '.JPG':
      case 'jpeg':
      case 'JPEG':
        break;
      default:
        $event.target.files[0] = '';
        break;
    }
    if ($event.target.files[0]) {
      const maxAllowedSize = 5 * 1048576;
      if ($event.target.files[0].size > maxAllowedSize) {
        $event.target.files[0] = '';
      }
    }
    let that = this;
    this.myReader.onload = function (loadEvent: any) {
      image.src = loadEvent.target.result;
    };
    this.myReader.readAsDataURL(this.data);
  }

  uploadFile() {
    const file = this.data;
    const Upload = new FormData();
    Upload.append('file', file);
    this.fileService.UploadImage(Upload).subscribe({
      next: (res) => {
        this.toastr.success('El documento se ha subido con éxito.');
      },
      error: (error) => {
        console.error('Error al subir la imagen:', error);
        this.toastr.error('Ha ocurrido un error al subir la imagen.');
      },
      complete: () => {
        this.getAll()
      }
    });
  }


  downloadFile(name: any) {
    this.fileService.DownloadFile(name).subscribe({
      next: (res: any) => {
        if (res instanceof Blob) {
          // Utiliza la biblioteca 'file-saver' para descargar el archivo
          saveAs(res, name);
          this.toastr.success('Se ha descargado el documento con éxito.');
        } else {
          // Manejar explícitamente respuestas que no son Blob
          console.error('Error al descargar la imagen: Respuesta no válida');
          this.toastr.error('Error al descargar la imagen: Respuesta no válida');
        }
      },
      error: (error) => {
        console.error('Error al descargar la imagen:', error);
        this.toastr.error('Error al descargar la imagen.');
      },
    });
  }
  


}
