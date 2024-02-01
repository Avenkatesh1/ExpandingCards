import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Expanding_Cards';
  panels!: NodeListOf<Element>;

  ngOnInit() {
    // This is executed after the view has been initialized
    this.panels = document.querySelectorAll('.panel');

    this.panels.forEach((panel: Element) => {
      panel.addEventListener('click', () => {
        this.removeActiveClasses();
        panel.classList.add('active');
      });
    });
  }

  removeActiveClasses() {
    this.panels.forEach((panel: Element) => {
      panel.classList.remove('active');
    });
  }
}
