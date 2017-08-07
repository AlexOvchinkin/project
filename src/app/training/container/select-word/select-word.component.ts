import {Component, Input, OnInit} from '@angular/core';
import {SelectWordService} from "./select-word.service";
import {ITranslateObject} from "../../../interfaces";

@Component({
  selector: 'app-select-word',
  templateUrl: './select-word.component.html',
  styleUrls: ['./select-word.component.css'],
  providers: [SelectWordService]
})
export class SelectWordComponent implements OnInit {

  @Input() translateObject: ITranslateObject;

  public checkWord: string;

  constructor(private selectWordService: SelectWordService) { }

  ngOnInit() {
    this.checkWord = this.translateObject.main.foreign;
  }

}
