import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utils.module';

import { AppComponent }  from './app.component';
import {BugTracker} from './BugTracker.component'
import {BugComponent} from './BugTracker/Bug.component';
import {BugStats} from './BugTracker/BugStats.component';
import {BugEdit} from './BugTracker/BugEdit.Component';
import {BugSort} from './BugTracker/BugSort.Component';

import {SortPipe} from './pipes/sort.pipe';

import {BugOperations} from './services/BugOperations';
import {BugStorage} from './services/BugStorage';

@NgModule({
  imports:      [ BrowserModule, FormsModule, UtilsModule ],
  declarations: [ AppComponent, BugTracker, BugComponent, BugStats, SortPipe, BugEdit, BugSort],
  bootstrap:    [ AppComponent ],
  providers :   [ BugOperations, BugStorage ]
})
export class AppModule { }