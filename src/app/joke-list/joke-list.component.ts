import { Component, OnInit } from '@angular/core';
import {  Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],
  template: `<app-joke-form></app-joke-form>
  <app-joke *ngFor="let j of jokes" [joke]="j"></app-joke>
  `
})
export class JokeListComponent implements OnInit {

  jokes: Joke[];

  constructor() {
      this.jokes = [
          new Joke('What joke 01?','Joke 1'),
          new Joke('What joke 02?','Blah Blah 2'),
          new Joke('What joke 03?','Joke \'3\''),
      ];
  }

  ngOnInit() {
  }

}
