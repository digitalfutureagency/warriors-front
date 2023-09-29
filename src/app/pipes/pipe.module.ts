import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe-pipe/safe-pipe.pipe';
import { DateFormatPipe } from './date-format/date-format.pipe';
import { TruncateTextPipe } from './truncate-text/truncate-text.pipe';

@NgModule({
  declarations: [
    SafePipe,
    DateFormatPipe,
    TruncateTextPipe
  ],
  imports: [CommonModule],
  exports: [
    SafePipe,
    DateFormatPipe,
    TruncateTextPipe
  ]
})
export class PipesModule { }
