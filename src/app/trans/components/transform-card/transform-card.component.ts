import { Component, Input, OnInit } from '@angular/core';
import { Transformation } from '../../class/transformation';

@Component({
  selector: 'app-transform-card',
  templateUrl: './transform-card.component.html',
  styleUrls: ['./transform-card.component.css'], // Nota: styleUrls en plural
})
export class TransformCardComponent implements OnInit{
  // Propiedad que recibe datos del padre
  @Input() transformationData: Transformation | undefined;

  ngOnInit(): void {
      console.log("entra al transformations page")
  }

  // Puedes agregar métodos adicionales si es necesario
  getTransformationInfo(): string {
    if (!this.transformationData) {
      return 'No transformation data available';
    }
    console.log(this.transformationData.getInformation())
    return this.transformationData.getInformation();

  }
}
