import { Component } from '@angular/core';
import {NewsservicesService} from "../newsservices.service";

@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})
export class UserinputComponent {
  timezone : any = ""
   constructor() {
     this.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    }
}
