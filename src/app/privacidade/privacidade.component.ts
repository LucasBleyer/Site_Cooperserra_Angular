import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.component.html'
})
export class PrivacidadeComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle("Cooperserra | Privacidade")
   }

  ngOnInit(): void {
  }
}
