import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContainerComponent} from './container/container.component';
import { SelectionComponent } from './container/selection/selection.component';
import { SelectWordComponent } from './container/select-word/select-word.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContainerComponent, SelectionComponent, SelectWordComponent],
  exports: [ContainerComponent]
})
export class TrainingModule {
}
