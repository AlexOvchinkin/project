import {Component, OnInit} from '@angular/core';
import {ITranslateObject} from "../../interfaces";

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  public currentTranslateObject: ITranslateObject = {
    main: {
      id: 0,
      foreign: 'welcome',
      native: 'добро пожаловать',
      error: false
    },
    translates: [
      {
        id: 1,
        foreign: 'hello',
        native: 'привет',
        error: false
      },
      {
        id: 0,
        foreign: 'welcome',
        native: 'добро пожаловать',
        error: false
      },
      {
        id: 2,
        foreign: 'good morning',
        native: 'доброе утро',
        error: false
      },
      {
        id: 3,
        foreign: 'good bye',
        native: 'до свидания',
        error: false
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
