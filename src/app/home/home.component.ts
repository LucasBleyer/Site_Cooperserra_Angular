import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(title: Title, private modalService: NgbModal) {
    title.setTitle("Cooperserra | Home")
  }

  ngOnInit(): void {
  }

  public abrirDiferencas(modalDiferencas: TemplateRef<NgbModal>){
    this.modalService.open(modalDiferencas);
  }

  public abrirTabela(modalTabela: TemplateRef<NgbModal>){
    this.modalService.open(modalTabela);
  }
}
