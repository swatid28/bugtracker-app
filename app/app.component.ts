import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Bug Tracker</h1>
            <div>
              <bug-tracker></bug-tracker>
            </div>
            `,
})
export class AppComponent  { 
  name = 'Blackrock!!'; 
}
