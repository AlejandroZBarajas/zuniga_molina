import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, mergeMap  } from 'rxjs';
import { Transformation } from '../class/transformation';


@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private url: string = 'https://dragonball-api.com/api/characters/';

  constructor(private http: HttpClient) {}
    
    getById(id: number): Observable<Transformation> {
      const URL = `https://dragonball-api.com/api/transformations/${id}`;
      return this.http.get<any>(URL).pipe(
        map(response => ({
          name: response.name,
          ki: response.ki,
          description: response.character.description,
          image: response.image, 
        } as Transformation)) 
      );
    }
  
    import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, forkJoin, mergeMap } from 'rxjs';
import { Transformation } from '../class/transformation';

@Injectable({
  providedIn: 'root',
})
export class TransformationsService {
  private url: string = 'https://dragonball-api.com/api/characters/';

  constructor(private http: HttpClient) {}

  getById(id: number): Observable<Transformation> {
    const URL = `https://dragonball-api.com/api/transformations/${id}`;
    return this.http.get<any>(URL).pipe(
      map(response => ({
        name: response.name,
        ki: response.ki,
        description: response.character.description,
        image: response.image,
      } as Transformation))
    );
  }

  getAllById(_id: string): Observable<Transformation[]> {
    const id = parseInt(_id, 10);
    const URL = `${this.url}${id}`; // URL del personaje específico

    return this.http.get<any>(URL).pipe(
      map(response => {
        // Obtenemos los IDs de las transformaciones
        const transformationIds = response.transformations.map((transformation: any) => transformation.id);

        // Usamos forkJoin para esperar todas las solicitudes getById
        return forkJoin(
          transformationIds.map((transformationId: number) =>
            this.getById(transformationId)  // getById devuelve un Observable<Transformation>
          )
        );
      }),
      mergeMap((transformations: Transformation[]) => {
        // No necesitamos envolver el forkJoin en otro observable
        return new Observable<Transformation[]>(subscriber => {
          subscriber.next(transformations);
          subscriber.complete();
        });
      })
    );
  }
}
