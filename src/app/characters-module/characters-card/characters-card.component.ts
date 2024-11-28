import { Component, Input, ViewChild } from '@angular/core';
import { CharacterI } from '../interfaces/character-i';

import { Transformation } from '../../trans/class/transformation';

import { PlanetsModalComponent } from '../../planets-module/planets-modal/planets-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrl: './characters-card.component.css',
})
export class CharactersCardComponent {
  constructor(private router: Router) {}

  @Input() characterData: CharacterI | undefined;
  @ViewChild(PlanetsModalComponent) planetsModal!: PlanetsModalComponent;

  navigatetoTransforms(characterId: number | undefined) {}

constructor(private router: Router) {}

  private transformations : Transformation [] = []


  toTransformation(id: number): void {
    localStorage.setItem("id", id.toString())
  }
  

  openModalPlanet(): void {
    this.planetsModal.openModal(this.characterData?.id);
  }

}
