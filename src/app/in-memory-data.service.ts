import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 999, name: 'Soldier Boy' },
      { id: 989, name: 'Capitão Pátria' },
      { id: 958, name: 'Billy Butcher' },
      { id: 850, name: 'Rainha Maeve' },
      { id: 845, name: 'Black Noir' },
      { id: 845, name: 'Kimiko ' },
      { id: 760, name: 'Trem-Bala' },
      { id: 540, name: 'Luz-Estrela' },
      { id: 480, name: 'Profundo' },
    ];
    return { heroes };
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
