import { NgModule }      from '@angular/core';
import {TrimTextPipe} from './pipes/trimText.pipe';

@NgModule({
  imports:      [  ],
  declarations: [ TrimTextPipe ],
  bootstrap:    [  ],
  providers :   [  ],
  exports : [ TrimTextPipe ]
})
export class UtilsModule { }