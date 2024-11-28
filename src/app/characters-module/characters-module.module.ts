import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharactersCardComponent } from './characters-card/characters-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PlanetsModuleModule } from '../planets-module/planets-module.module';

@NgModule({
  declarations: [CharactersPageComponent, CharactersCardComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, PlanetsModuleModule],
})
export class CharactersModuleModule {}
