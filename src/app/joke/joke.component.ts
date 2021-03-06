import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
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