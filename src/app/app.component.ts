import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   @Input() selected_news : any = "";

    title = 'QKPost';


    OnNewsCLick(event: any) : void{
      this.selected_news =event
    }
}
