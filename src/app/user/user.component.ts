import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AuthService } from '../service/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component'
import { ToastrService } from 'ngx-toastr';
import { FilesService } from '../service/files.service';
import { CookieService } from 'ngx-cookie';
import { User } from '../model/usermodel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements AfterViewInit {

  public token: any;
  public data: any;
  public email: any;
  public name: any;
  userlist: any;
  dataSource: any;
  public dataUser: User | null = null;
  public myReader: FileReader = new FileReader();
  customerlist: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private builder: FormBuilder, 
    private service: AuthService, 
    private dialog: MatDialog,
    private toastr: ToastrService,
    private fileService: FilesService,
    private _cookieService: CookieService) {
    
    this.getAll();
  }
 
  ngAfterViewInit(): void {

  }
  LoadUser() {
    this.service.Getall().subscribe(res => {
      this.userlist = res;
      this.dataSource = new MatTableDataSource(this.userlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  displayedColumns: string[] = ['name', 'email', 'status', 'role', 'action'];

  updateuser(code: any, viewIs: any) {
    this.OpenDialog('1000ms', '600ms', code, viewIs);
    console.log(code)
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: string, viewIs: boolean) {
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: '30%',
      data: {
        code,
        viewIs: viewIs
      }

    });
    popup.afterClosed().subscribe(res => {
      this.getAll();
    });
  }

  getAll() {
    this.fileService.GetListAdminFiles().subscribe(res => {
      this.customerlist = res;
      this.dataSource = new MatTableDataSource(this.customerlist);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
