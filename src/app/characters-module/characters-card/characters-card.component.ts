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

  private transformations: Transformation[] = [];
  
  //navigatetoTransforms(characterId: number | undefined) {}

  toTransformation(id: number | undefined): void {
    if (id) {
      localStorage.setItem("charID", id.toString())
      this.router.navigate(["/transformations"]); 
    } else {
      console.warn('El ID no está definido');
    }
  }

  openModalPlanet(): void {
    this.planetsModal.openModal(this.characterData?.id);
  }
}
