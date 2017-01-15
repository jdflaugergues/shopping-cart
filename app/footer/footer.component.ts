import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: 'app/footer/footer.component.html',
  styleUrls: ['app/footer/footer.component.css']
})
export class FooterComponent {
  author: string = 'Jonathan de Flaugergues';
}
