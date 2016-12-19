import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Bug} from '../Bug';
import {BugStorage} from '../services/BugStorage';

@Component({
    template : ` 
                <span class="bugname" (click)="toggle()" [ngClass]="{closed : data.isClosed}">{{data.name | trimText:30}}</span>
                <div class="datetime">{{data.createdAt}}</div>
                `,
    selector : 'bug-item'
})
export class BugComponent{

    @Input()
    data:Bug = null;

    @Output()
    onToggle:EventEmitter<Bug> = new EventEmitter<Bug>();

    
    toggle(){
        this.onToggle.emit(this.data)
    }
}