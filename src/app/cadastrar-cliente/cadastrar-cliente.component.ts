import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css'
})
export class CadastrarClienteComponent {

  constructor(private httpClient: HttpClient) { }

  formulario = new FormGroup({
    nome: new FormControl(),
    email: new FormControl(),
    telefone: new FormControl()
  });

  cadastrarCliente() {
    this.httpClient.post(
      'http://localhost:8080/api/clientes',
      this.formulario.value,
      { responseType: 'text' }
    ).subscribe({
      next: (resposta) => {
        console.log(resposta);
      }
    })
  }
}
