import { AuthService } from '../service/auth.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  
  @ViewChild('miVideo', { static: true }) miVideo!: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngAfterViewInit() {
    // Accede al elemento de video y silencia el video
    const videoElement = this.miVideo.nativeElement;
    videoElement.muted = true;
  }

}
