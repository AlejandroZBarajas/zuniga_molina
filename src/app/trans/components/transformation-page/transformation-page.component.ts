import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para obtener parámetros de la URL
import { TransformationsService } from '../../services/transformations.service';
import { Transformation } from '../../class/transformation';
import { Input } from '@angular/core';
import { PlanetsServiceService } from '../../../planets-module/services/planets-service.service';
import { TransformationI } from '../../../characters-module/interfaces/charactersResponse-i';

@Component({
  selector: 'app-transformation-page',
  templateUrl: './transformation-page.component.html',
  styleUrls: ['./transformation-page.component.css'],
})
export class TransformationPageComponent implements OnInit {
  transformations: TransformationI[] = [];
  characterId: number | null = null;

  public filteredTransformations: Transformation[] = [];
  public characterName: string | null = null;

  constructor(
    private transformationService: TransformationsService,
    private route: ActivatedRoute,
    private planetsService: PlanetsServiceService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.characterId = id ? +id : null;
      this.planetsService
        .getCharacterWithPlanet(this.characterId)
        .subscribe((character) => {
          this.transformations = character.transformations;
        });
    });
  }
}
