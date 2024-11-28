import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Transformation } from '../class/transformation';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private url: string = 'https://dragonball-api.com/api/transformations';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Transformation[]> {
    //console.log(this.http.get)
    return this.http.get<Transformation[]>(this.url).pipe(
      map((data) => {
        const transformations = data.map((item) => new Transformation(item));
        localStorage.setItem('transformations', JSON.stringify(transformations));
        return transformations;
      })
    );
  }

}
