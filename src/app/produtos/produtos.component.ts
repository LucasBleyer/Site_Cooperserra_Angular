import { Component, OnInit, TemplateRef } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(title: Title, private modalService: NgbModal) {
    title.setTitle("Cooperserra | Produtos")
   }

  ngOnInit(): void {
  }

  public abrirReceita(modalReceita: TemplateRef<NgbModal>){
    this.modalService.open(modalReceita);
  }

}
