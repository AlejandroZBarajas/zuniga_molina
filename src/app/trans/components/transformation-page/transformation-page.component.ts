import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransformationsService } from '../../services/transformations.service';
import { Transformation } from '../../class/transformation';

@Component({
  selector: 'app-transformation-page',
  templateUrl: './transformation-page.component.html',
  styleUrls: ['./transformation-page.component.css'],
})
export class TransformationPageComponent implements OnInit {
  filteredTransformations: Transformation[] = [];
  characterId: string | null = null;

  constructor(
    private transformationService: TransformationsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      // Obtener las transformaciones del personaje con el ID
      this.transformationService.getAllById(id).subscribe({
        next: (transformations) => {
          this.filteredTransformations = transformations;
        },
        error: (err) => {
          console.error('Error al obtener transformaciones:', err);
        },
      });
    } else {
      console.error('ID no encontrado en la URL');
    }
  }
}
