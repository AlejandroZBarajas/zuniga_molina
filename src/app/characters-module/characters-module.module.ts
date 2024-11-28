import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersPageComponent } from './characters-page/characters-page.component';
import { CharactersCardComponent } from './characters-card/characters-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TransModule } from '../trans/trans.module';

@NgModule({
  declarations: [CharactersPageComponent, CharactersCardComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, TransModule],
})
export class CharactersModuleModule {}
