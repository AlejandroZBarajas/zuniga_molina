import { Component, Input } from '@angular/core';
import { CharacterI } from '../interfaces/character-i';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrl: './characters-card.component.css',
})
export class CharactersCardComponent {
  @Input() characterData: CharacterI | undefined;

  navigatetoTransforms(character: String | undefined) {}
}
