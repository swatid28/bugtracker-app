import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
    transform(text:string='Empty', trimLength:number = 20) : string {
        if(!text.length) return text;
        return text.length < trimLength ? text : text.substr(0,trimLength)+'...';
    }
}