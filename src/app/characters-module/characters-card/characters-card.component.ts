import { Component, Input } from '@angular/core';
import { CharacterI } from '../interfaces/character-i';
import { Transformation } from '../../trans/class/transformation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrl: './characters-card.component.css',
})
export class CharactersCardComponent {
  @Input() characterData: CharacterI | undefined;


constructor(private router: Router) {}

  private transformations : Transformation [] = []


  toTransformation(id: number): void {
    localStorage.setItem("id", id.toString())
  }
  
}
