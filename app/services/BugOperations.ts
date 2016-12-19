import {Bug} from "../Bug";
import {Injectable} from '@angular/core';

@Injectable()
export class BugOperations{
    
    createNew(id : number, bugName:string) : Bug{
        var newBug = {
            id : id,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        return newBug;
    }

    toggle(bug : Bug) : void{
        bug.isClosed = !bug.isClosed
    }
}