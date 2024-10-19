import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgxMaskDirective, NgxMaskPipe } from 'ngx-mask';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-editar-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './editar-clientes.component.html',
  styleUrl: './editar-clientes.component.css'
})
export class EditarClientesComponent {

  mensagem: string = '';
  id: string = '';

  constructor(private httpClient: HttpClient, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    this.httpClient.get('http://localhost:8080/api/clientes/' + this.id).subscribe({
      next: (dados) => {
        this.formulario.patchValue(dados);
      }
    })
  }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required])
  })

  atualizarCliente() {
    this.httpClient.put('http://localhost:8080/api/clientes/' + this.id, this.formulario.value, { responseType: 'text' }).subscribe({
      next: (resposta) => {
        this.mensagem = resposta;
      }
    })

  }
}
