import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    template : `
    <section class="sort">
        <label for="">Order By :</label>
        <input type="text" [(ngModel)]="sortBugBy" (change)="triggerSort(sortBugBy, sortBugOrder)">
        <label for="">Descending? : </label>
        <input type="checkbox" [(ngModel)]="sortBugOrder" (change)="triggerSort(sortBugBy, sortBugOrder)">
    </section>`,
    selector : 'bug-sort'
})
export class BugSort{

    @Output()
    onSort: EventEmitter<{by : string, descending : boolean}> = new EventEmitter<{by : string, descending : boolean}>()

    triggerSort(sortBugBy:string, sortBugOrder:boolean){
        console.log(`triggering onSort - ${sortBugBy}, ${sortBugOrder}`)
        this.onSort.emit({by : sortBugBy, descending : sortBugOrder})
    }
}