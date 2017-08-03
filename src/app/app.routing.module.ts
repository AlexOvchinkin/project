import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TrainingModule} from "./training/training.module"
import {ContainerComponent} from "./training/container/container.component";

export const routes: Routes = [
  {path: '', component: ContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    TrainingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
