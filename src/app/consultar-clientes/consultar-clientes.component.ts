import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [CommonModule, NgxMaskDirective, NgxMaskPipe, NgxPaginationModule, RouterLink],
  providers: [provideNgxMask()],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent {

  clientes: any[] = [];
  paginador:  number = 1;
  mensagem: string = '';

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

  excluirCliente(id: string) {

    if(confirm('Deseja realmente excluir o cliente selecionado?')) {
      this.httpClient.delete('http://localhost:8080/api/clientes/' + id, { responseType: 'text'}).subscribe({
        next:(resposta) => {
          this.mensagem = resposta;
          this.ngOnInit();
        }
      })
    }
  }

  handlePageChange(event : any) {
    this.paginador = event;
  }
}
