import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private readonly apiHost = 'http://localhost:5267';

  constructor(private httpClient: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<any>(`${this.apiHost}/recipes`)
      .pipe(
        map(response => (response as any[])
          .map(recipe => new Recipe(recipe.id, recipe.name, recipe.description, recipe.ingredients)))
      );
  }
}