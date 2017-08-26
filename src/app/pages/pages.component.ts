import { Component,OnInit } from '@angular/core';
import { Routes } from '@angular/router';

//import { BaMenuService } from '../theme';
import { PAGES_MENU } from './pages.menu';

@Component({
  selector: 'pages',
  template:`
 <app-header>
  <section>ng2投影测试</section>
  <div class="class-select">使用class</div>
  <footer>底部</footer>
  <header>顶部</header>
 </app-header>
  <header appWindow class="container-fluid">
  <div class="row">{{par_name}}
    <a [routerLink]="['/login']" class="col-xs-3">注册</a>
    <a [routerLink]="['/registered']" class="col-xs-3">登录</a>
  </div>
</header>
<div class="al-main">
  <div class="al-content" style="text-align: center;">
  <img src="../assets/images/nature/1.jpg" alt="..." class="img-thumbnail">
  </div>
</div>
<footer class="al-footer clearfix">
  <div class="al-footer-right"> <i class="ion-heart"></i></div>
</footer>
<div (click)="toggle()">ng-if使用</div>
<app-header *ngIf="isTrue"></app-header>
<div (click)="addOtherEpisode()">add</div>
<div *ngFor="let a of episodes;let i=index;trackBy:trackById">{{a.id}}</div>
  `,
  styles:[`
  :host.odd {
    display: block;
    background-color: #eee;
  `]
})
export class Pages {
  constructor() {
  }

  ngOnInit() {
    //<Routes>PAGES_MENU;
  }
  isTrue:boolean=true;
  toggle(){
    this.isTrue = !this.isTrue;
  }


  otherEpisodes = [
    { title: 'Two Swords', director: 'D. B. Weiss', id: 8 },
    { title: 'The Lion and the Rose', director: 'Alex Graves', id: 9 },
    { title: 'Breaker of Chains', director: 'Michelle MacLaren', id: 10 },
    { title: 'Oathkeeper', director: 'Michelle MacLaren', id: 11 }]

  episodes = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten', id: 0 },
    { title: 'The Kingsroad', director: 'Tim Van Patten', id: 1 },
    { title: 'Lord Snow', director: 'Brian Kirk', id: 2 },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk', id: 3 },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk', id: 4 },
    { title: 'A Golden Crown', director: 'Daniel Minahan', id: 5 },
    { title: 'You Win or You Die', director: 'Daniel Minahan', id: 6 },
    { title: 'The Pointy End', director: 'Daniel Minahan', id: 7 }
  ];

  addOtherEpisode() {
    let episodesCopy = JSON.parse(JSON.stringify(this.episodes))
    this.episodes=[episodesCopy, this.otherEpisodes.pop() ];
  }

  trackById(index: number, episode: any): number {
    return episode.id;
  }
}
