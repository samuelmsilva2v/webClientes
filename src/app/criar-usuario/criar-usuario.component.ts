import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './criar-usuario.component.html',
  styleUrl: './criar-usuario.component.css'
})
export class CriarUsuarioComponent {

  constructor(private httpClient: HttpClient) { }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required])
  });

  criarUsuario() {
    this.httpClient.post('http://localhost:8081/api/usuarios/criar', this.formulario.value, { responseType: 'text' }).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (e) => {
        console.log(e.error)
      }
    })
  }
}
