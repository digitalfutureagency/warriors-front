import { Component } from '@angular/core';
import { User } from '../model/usermodel';
import { ToastrService } from 'ngx-toastr';
import { VimeoService } from '../service/vimeo.service';
import { ModalContentComponent } from '../modal-content/modal-content.component';
import { MatDialog } from '@angular/material/dialog';

declare var Vimeo: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public token: any;
  public data: any;
  public dataUser: User | null = null;
  customerlist: any;
  dataSource: any;
  currentIndex: number = 0;
  private idForex = 17139766;
  private idsinteticIndex = 16811190;
  private traderMind = 17153257;
  public videos: any[] = [];
  public videosSintetics: any[] = [];

  constructor(
    private toastr: ToastrService,
    private vimeoService: VimeoService,
    private dialog: MatDialog
  ) {
    const userData = localStorage.getItem('warriors-club-session');

    if (userData) {
      const parsedUserData = JSON.parse(userData);
      this.dataUser = {
        _id: parsedUserData.id,
        email: parsedUserData.email,
        firstName: parsedUserData.firstName,
        lastName: parsedUserData.lastName,
        roles: parsedUserData.roles,
        viewIs: parsedUserData.viewIs
      };
    }
    this.getAll()
  }

  getAll() {
    if (this.dataUser?.viewIs) {
      
      this.vimeoService.GetListVideosVimeo(this.idForex).subscribe(
        (resForex: any) => {
          console.log('Forex', resForex);
          this.videos = resForex.data;
          this.videos.reverse();
        },
        (error: any) => {
          console.error('Error al traer los videos:', error);
          this.toastr.error('Ha ocurrido un error al traer los videos.');
        }
      );
      this.vimeoService.GetListVideosVimeo(this.idsinteticIndex).subscribe(
        (resSintetics: any) => {
          console.log('Indices Sinteticos', resSintetics);
          this.videosSintetics = resSintetics.data;
          this.videosSintetics.reverse();
        },
        (error: any) => {
          console.error('Error al traer los videos:', error);
          this.toastr.error('Ha ocurrido un error al traer los videos.');
        }
      );
      
    } else {
      this.toastr.warning('Lo sentimos, no puede ver los videos, confirma tu subscripción para seguir disfrutando de los servicios.');
    }
  }

  openModal(video: any) {
    this.dialog.open(ModalContentComponent, {
      width: '800px', // Ancho del modal (ajusta según tus necesidades)
      data: {
        videoUrl: video.player_embed_url,
        password: video.password,
      },
    });
  }

}
