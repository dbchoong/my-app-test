import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  template: `
  <div class="card mb-3" style="width: 320px;">
  <div class="card-body">
  <h4 class="card-title">
  {{ joke.setup }}
  </h4>
  <p class="card-text" [hidden]="joke.hide">
  {{ joke.punchline }}
  </p>
  <button class="btn btn-primary" (click)="joke.toggle()" role="button">Tell me</button>
  </div>
  </div>
  `
})
export class JokeComponent implements OnInit {
  @Input() joke: Object;
  constructor() { }

  ngOnInit() {
  }

}

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
      this.setup = setup;
      this.punchline = punchline;
      this.hide = true;
  }

  toggle() {
      this.hide = !this.hide;
  }
}