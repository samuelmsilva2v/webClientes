import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-cadastrar-cliente',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  providers: [provideNgxMask()],
  templateUrl: './cadastrar-cliente.component.html',
  styleUrl: './cadastrar-cliente.component.css'
})
export class CadastrarClienteComponent {
  mensagem: string = '';

  constructor(private httpClient: HttpClient) { }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required])
  });

  cadastrarCliente() {
    this.httpClient.post(
      'http://localhost:8080/api/clientes',
      this.formulario.value,
      { responseType: 'text' }
    ).subscribe({
      next: (resposta) => {
        this.mensagem = resposta
        this.formulario.reset()
      }
    })
  }
}
