import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContainerComponent} from './container/container.component';
import { SelectionComponent } from './container/selection/selection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContainerComponent, SelectionComponent],
  exports: [ContainerComponent]
})
export class TrainingModule {
}
