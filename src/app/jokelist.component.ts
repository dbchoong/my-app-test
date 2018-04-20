import { Component } from '@angular/core';
import {  Joke } from './joke.component';

@Component({
    selector: 'joke-list',
    template: `
    <joke *ngFor="let j of jokes" [joke]="j"></joke>
    `
})

export class JokeListComponent {
    jokes: Joke[];

    constructor() {
        this.jokes = [
            new Joke('What joke 01?','Joke 1'),
            new Joke('What joke 02?','Jole 2'),
            new Joke('What joke 03?','Joke \'3\''),
        ];
    }
}