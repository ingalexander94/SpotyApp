import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { ArtistaComponent } from './componentes/artista/artista.component';

const APP_RUTAS: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'filtro', component: FiltroComponent },
    { path: 'artista/:id', component: ArtistaComponent },
    { path: '', pathMatch:'full',redirectTo:'inicio' },
    { path: '**', pathMatch:'full',redirectTo:'inicio' },

];

export const APP_ENRUTADOR = RouterModule.forRoot(APP_RUTAS);
