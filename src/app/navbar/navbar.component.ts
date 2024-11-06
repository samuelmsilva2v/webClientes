import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  autenticado: boolean = false;
  usuario: string = '';

  ngOnInit() {
    let token = sessionStorage.getItem('token');

    if(token) {
      this.autenticado = true;
      this.usuario = sessionStorage.getItem('usuario') as string;
    }
  }

  logout() {
    if(confirm('Deseja realmente sair do sistema?')) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('usuario')
      location.href = '/';
    }
  }

}
