import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-estrutura',
  templateUrl: './estrutura.component.html',
  styleUrls: ['./estrutura.component.css']
})
export class EstruturaComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle("Cooperserra | Estrutura")
   }

  ngOnInit(): void {
  }

}
