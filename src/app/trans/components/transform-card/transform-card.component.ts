import { Component, Input, OnInit } from '@angular/core';
import { Transformation } from '../../class/transformation';
import { ActivatedRoute } from '@angular/router';
import { TransformationsService } from '../../services/transformations.service';

@Component({
  selector: 'app-transform-card',
  templateUrl: './transform-card.component.html',
  styleUrls: ['./transform-card.component.css'], 
})
export class TransformCardComponent implements OnInit{
  @Input() transformation: Transformation = new Transformation({
    name: '',
    ki: '',
    description: '',
    image: '',
  });

  constructor(
    private route: ActivatedRoute,
    private transformationService: TransformationsService
  ) {}

  ngOnInit(): void {
    console.log('Transformación recibida:', this.transformation);
  }
}