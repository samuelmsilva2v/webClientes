import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-autenticar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './autenticar-usuario.component.html',
  styleUrl: './autenticar-usuario.component.css'
})
export class AutenticarUsuarioComponent {
  erros: any[] = [];

  constructor(private httpClient: HttpClient) { }

  formulario = new FormGroup({
    email: new FormControl('', Validators.required),
    senha: new FormControl('', Validators.required)
  })

  autenticarUsuario() {
    this.httpClient.post('http://localhost:8081/api/usuarios/autenticar', this.formulario.value, { responseType: 'text' }).subscribe({
      next: (data) => {
        sessionStorage.setItem('token', data);
        sessionStorage.setItem('usuario', this.formulario.value.email as string);
        location.href = '/app/consultar-clientes'
      },
      error: (e) => {
        this.erros = JSON.parse(e.error);
      }
    })
  }
}
