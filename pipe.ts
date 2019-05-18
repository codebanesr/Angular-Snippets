https://stackblitz.com/edit/angular-wxtdqa
import { Component, Pipe } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'AnGuLar';
}


@Pipe({
  name: "default"
})
export class DefaultPipe{
  transform(name: string, makeLowerCase:boolean=false){
    if(makeLowerCase){
      name = name.toLocaleLowerCase();
    }
    return name;
  }
}





<hello name="{{ name | default:false }}"></hello>
<p>
  Start editing to see some magic happen :)
</p>
