import {Component, Output, EventEmitter} from '@angular/core'

@Component({
    template : ` <section class="edit">
        <label for="">Bug :</label>
        <input type="text" [(ngModel)]="newBugName">
        <input type="button" value="Add New" (click) = "addNew(newBugName)">
    </section>`,
    selector : 'bug-edit'
})
export class BugEdit{
    @Output()
    onAdd : EventEmitter<string> = new EventEmitter<string>();

    addNew(bugName:string){
        this.onAdd.emit(bugName);
    }
}