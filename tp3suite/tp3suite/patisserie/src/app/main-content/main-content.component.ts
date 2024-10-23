import { Component } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent {
  favoriteMessage: string = '';

  save() {
    this.favoriteMessage = 'Merci pour votre appréciation!';
  }
}


