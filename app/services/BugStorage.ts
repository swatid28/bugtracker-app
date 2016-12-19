import {Injectable} from '@angular/core';
import {BugOperations} from './BugOperations';
import {Bug} from '../Bug';

@Injectable()
export class BugStorage{
    currentBugId : number = 0;

    constructor(private _bugOperations : BugOperations){

    }
    addNew(bugName : string) : Bug{
        let newBug : Bug = this._bugOperations.createNew(++this.currentBugId, bugName);
        window.localStorage.setItem(newBug.id.toString(), JSON.stringify(newBug));
        return newBug;
    }
    getAll() : Bug[]{
        let result : Array<Bug> = [];
        let storage = window.localStorage;
        for(let i=0; i < storage.length; i++){
            let key = storage.key(i);
            let dataAsString = storage.getItem(key);
            let bug = JSON.parse(dataAsString);
            this.currentBugId = this.currentBugId > bug.id ? this.currentBugId : bug.id; 
            result.push(bug);
        }
        return result;
    }
    toggle(bug : Bug): void{
        this._bugOperations.toggle(bug);
        window.localStorage.setItem(bug.id.toString(), JSON.stringify(bug));
    }
    remove(bug : Bug):void{
        window.localStorage.removeItem(bug.id.toString());
    }
}