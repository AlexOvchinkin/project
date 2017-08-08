import {Component, Input, OnInit} from '@angular/core';
import {SelectWordService} from "./select-word.service";
import {ITranslateObject, IWord} from "../../../interfaces";

@Component({
  selector: 'app-select-word',
  templateUrl: './select-word.component.html',
  styleUrls: ['./select-word.component.css'],
  providers: [SelectWordService]
})
export class SelectWordComponent implements OnInit {

  @Input() translateObject: ITranslateObject;

  public checkWord: IWord;
  public pickWords: IWord[];

  constructor(private selectWordService: SelectWordService) { }

  ngOnInit() {
    this.selectWordService.init(this.translateObject);
    this.checkWord = this.translateObject.main;

    this.selectWordService.updateStream$$
      .subscribe((words) => this.pickWords = words);
  }

  onWordClick(word: IWord): void {
    this.selectWordService.check(word);
  }

}
