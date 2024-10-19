import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, NgxPaginationModule],
  providers: [provideNgxMask()],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent {

  clientes: any[] = [];
  
  paginador:  number = 1;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    this.httpClient.get(
      'http://localhost:8080/api/clientes'
    ).subscribe({
      next: (resposta) => {
        this.clientes = resposta as any[];
      }
    })
  }

  handlePageChange(event : any) {
    this.paginador = event;
  }
}
