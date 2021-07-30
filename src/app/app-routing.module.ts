import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'profils',
    loadChildren: () => import('./profils/profils.module').then(m => m.ProfilsModule)
  },
  {
    path: 'experiencesPro',
    loadChildren: () => import('./experiencespro/experiencespro.module').then(m => m.ExperiencesproModule)
  },
  {
    path: 'formations',
    loadChildren: () => import('./formations/formations.module').then(m => m.FormationsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
