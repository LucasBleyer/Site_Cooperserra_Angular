import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html'
})
export class LocalizacaoComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle("Cooperserra | Localização")
   }

  ngOnInit(): void {
  }

}
