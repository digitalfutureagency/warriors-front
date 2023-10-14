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
import { FilespopupComponent } from '../filespopup/filespopup.component';
import { ViewportRuler } from '@angular/cdk/scrolling';

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
    private viewportRuler: ViewportRuler,
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
  displayedColumns: string[] = ['name', 'email', 'status', 'role', 'payroll', 'action'];

  updateuser(code: any, viewIs: any) {
    this.OpenDialog('1000ms', '600ms', code, viewIs);
  }

  viewDocuments(files: any) {
    this.OpenDialogDocument('1000ms', '600ms', files);
  }

  OpenDialogDocument(enteranimation: any, exitanimation: any, files: any) {
    const windowWidth = this.viewportRuler.getViewportSize().width;
    let dialogWidth = '45%';
    if (windowWidth <= 768) {
      dialogWidth = '100%';
    }
    const popup = this.dialog.open(FilespopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: dialogWidth,
      data: {
        files
      }

    });
    popup.afterClosed().subscribe(res => {
      this.getAll();
    });
  }

  OpenDialog(enteranimation: any, exitanimation: any, code: string, viewIs: boolean) {
    const windowWidth = this.viewportRuler.getViewportSize().width;
    let dialogWidth = '30%';
    if (windowWidth <= 768) {
      dialogWidth = '100%';
    }
    const popup = this.dialog.open(UpdatepopupComponent, {
      enterAnimationDuration: enteranimation,
      exitAnimationDuration: exitanimation,
      width: dialogWidth,
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
