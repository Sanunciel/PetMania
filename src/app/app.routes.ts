import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListaServicosComponent } from './components/lista-servicos/lista-servicos.component';

export const routes: Routes = [
    {path: '', component: MainComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: 'listaservicos', component: ListaServicosComponent}
];
