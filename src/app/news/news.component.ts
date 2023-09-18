import {Component, EventEmitter, Output} from '@angular/core';
import {NewsservicesService} from "../newsservices.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
    news : any = []
    @Output() OnNewsCLick = new EventEmitter<any>();
    constructor(private heroService: NewsservicesService) {
      this.getHeroes()
    }

  select_news(event : object) : void{
      console.log("event", event)
    this.OnNewsCLick.emit(event)
  }
  getHeroes(): void {
      this.heroService.getData().subscribe(data => {
          this.news = (data as any).articles
      })
  }
}
