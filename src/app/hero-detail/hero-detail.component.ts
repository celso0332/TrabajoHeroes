import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
hero: Hero|any;

porcentaje=0.1012345;

constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero()
    
  }
  getHero(): void {
    const param=this.route.snapshot.paramMap.get('id');
    const id = param?+param:0;
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }
  goBack():void{
    this.location.back();
  }
}
