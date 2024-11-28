import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para obtener parámetros de la URL
import { TransformationsService } from '../../services/transformations.service';
import { Transformation } from '../../class/transformation';
import { Input } from '@angular/core';

@Component({
  selector: 'app-transformation-page',
  templateUrl: './transformation-page.component.html',
  styleUrls: ['./transformation-page.component.css']
})
export class TransformationPageComponent implements OnInit {
  @Input() transformationData: Transformation | undefined;

  public transformations: Transformation[] = [];
  public filteredTransformations: Transformation[] = [];
  public characterName: string | null = null;

  constructor(
    private transformationService: TransformationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el nombre del personaje desde los parámetros de la URL
    this.characterName = this.route.snapshot.paramMap.get('name');


    this.transformationService.getAll().subscribe(
      (data: Transformation[]) => {
        this.transformations = data;

        // Filtrar las transformaciones por el nombre del personaje
        if (this.characterName) {
          this.filteredTransformations = this.transformations.filter(
            (transformation) => transformation.characterName === this.characterName
          );
        }
      },
      (error) => {
        console.error('Error fetching transformations:', error);
      }
    );
  }
}
