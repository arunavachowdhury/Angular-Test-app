import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My-test-app';
  post = {
    title: "Title",
    isFavorite: true
  }

  isFavoriteChanged(isChanged){
    console.log("Event Triggered :" +isChanged);
    
  }
}
