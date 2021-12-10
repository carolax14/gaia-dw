import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gaia-dw';
  pageSuivante(){
    location.href = "./page/m&s-etape2.html";
 }
}
