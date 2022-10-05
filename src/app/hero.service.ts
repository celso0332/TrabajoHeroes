import { Injectable } from '@angular/core';
import { HEROES } from './mock-heores';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private messageService : MessageService){}

getHeroes(): Observable<Hero[]> {

  return of(HEROES);
}
getHero(id: number): Observable<Hero> {
  const hero = HEROES.find(h => h.id === id)!;
 if(id!=0){
  this.messageService.add(`HeroService: fetched hero id=${id}`);
 }else{
  this.messageService.add('');
 }
  return of(hero);
 
}
}
