import { Routes } from '@angular/router';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { ConsultarClientesComponent } from './consultar-clientes/consultar-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';

export const routes: Routes = [
    {
        path: 'app/cadastrar-cliente',
        component: CadastrarClienteComponent
    },
    {
        path: 'app/consultar-clientes',
        component: ConsultarClientesComponent
    },
    {
        path: 'app/editar-clientes',
        component: EditarClientesComponent
    }
];
