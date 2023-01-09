import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacidade',
  templateUrl: './privacidade.component.html',
  styleUrls: ['./privacidade.component.css']
})
export class PrivacidadeComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle("Cooperserra | Privacidade")
   }

  ngOnInit(): void {
  }

}
