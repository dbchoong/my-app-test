import { Component, OnInit } from '@angular/core';
import {  Joke } from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css'],

})
export class JokeListComponent implements OnInit {

  jokes: Joke[];

  constructor() {
      this.jokes = [
          new Joke('What joke Z1?','Joke 1'),
          new Joke('What joke z2?','Blah Blah 2'),
          new Joke('What joke z3?','Joke \'3\''),
      ];
  }
  addJoke(joke) {
    this.jokes.unshift(joke);
    //this.jokes.push(joke);
    }
  ngOnInit() {
  }

}
