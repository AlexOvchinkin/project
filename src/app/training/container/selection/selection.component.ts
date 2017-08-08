import {Component, Input, OnInit} from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {SelectionService, ILetter} from "./selection.service";

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css'],
  providers: [SelectionService],
  animations: [
    trigger('errorState',
      [
        state('inactive',
          style({
            border: 'none'
          })),
        state('active',
          style({
            border: '2px solid #CF000F'
          })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-in'))
      ]
    )
  ]
})
export class SelectionComponent implements OnInit {

  @Input() word: string;

  arrayOfLetters: ILetter[] = [];
  arrayOfPickLetters: ILetter[] = [];

  public errorState: string = 'inactive';

  constructor(private selectionService: SelectionService) {
  }

  ngOnInit() {
    this.selectionService.initService(this.word);

    this.selectionService.updateStream$$
      .subscribe(arrayOfLetters => {
        this.arrayOfLetters = arrayOfLetters
      });

    this.selectionService.updatePickStream$$
      .subscribe(arrayOfLetters => {
        this.arrayOfPickLetters = arrayOfLetters
      });
  }

  onPickLetterClick(value: ILetter) {
    this.selectionService.checkLetter(value);
  }

}





















