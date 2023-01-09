import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html'
})
export class SobreComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle("Cooperserra | Sobre Nós")
   }

  ngOnInit(): void {
  }
}
