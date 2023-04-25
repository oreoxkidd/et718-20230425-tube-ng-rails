import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomemadeComponent } from './homemade/homemade.component';


const routes: Routes = [
  
      { path: '', component: HomemadeComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
