import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  videoUrl: any;
  constructor(
    private dialogRef: MatDialogRef<ModalContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    console.log(this.data)
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.videoUrl);
  }
  
  closeModal(): void {
    this.dialogRef.close();
  }
}
