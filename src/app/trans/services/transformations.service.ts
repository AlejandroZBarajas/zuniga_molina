import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, mergeMap, tap } from 'rxjs';
import { Transformation } from '../class/transformation';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private url: string = 'https://dragonball-api.com/api/characters/';
  private urlTransf = 'https://dragonball-api.com/api/transformations/'

  constructor(private http: HttpClient) {}

    getTransformations(): Observable<number[]> {
      const id = parseInt(localStorage.getItem("charID") || '0');
      console.log(`${this.url}${id}`)
      return this.http.get<any>(`${this.url}${id}`).pipe(
        map(response => response.transformations.map((transformation: any) => transformation.id)),
        tap(ids => {
          localStorage.setItem('transformationIds', JSON.stringify(ids));
        })
      );
    }

    /* 
    getTransformationDetails(): Observable<Transformation[]> {
      const ids = JSON.parse(localStorage.getItem('transformationIds') || '[]');
      const requests = ids.map((id: number) =>
        this.http.get<Transformation>(`${this.urlTransf}${id}`).pipe(  // Cambio aquí: <Transformation>
          map(response => ({
            name: response.name,
            ki: response.ki,
            image: response.image,
            description: response.character.description,
          }))
        )
      );
    
      // Esperar a que todas las solicitudes finalicen
      return forkJoin(requests);
    } */
   
}
