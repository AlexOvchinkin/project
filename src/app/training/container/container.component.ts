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
      foreign: 'welcome',
      native: 'добро пожаловать'
    },
    translates: [
      {
        foreign: 'hello',
        native: 'привет'
      },
      {
        foreign: 'welcome',
        native: 'добро пожаловать'
      },
      {
        foreign: 'good morning',
        native: 'доброе утро'
      },
      {
        foreign: 'good bye',
        native: 'до свидания'
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

}
