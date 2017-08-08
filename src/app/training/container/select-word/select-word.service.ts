import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ITranslateObject, IWord} from "../../../interfaces";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {delay} from "rxjs/operator/delay";
import "rxjs/add/operator/delay";
import {switchMap} from "rxjs/operator/switchMap";

@Injectable()
export class SelectWordService {

  private translateObject: ITranslateObject;
  private wordsStream$;
  private cleanUpStream$;
  public updateStream$$: BehaviorSubject<IWord[]>;


  constructor() {
  }

  public init(translateObject: ITranslateObject) {
    this.translateObject = translateObject;
    this.updateStream$$ = new BehaviorSubject(translateObject.translates);

    this.wordsStream$ = this.getWordsStream(this.translateObject);
    this.wordsStream$.subscribe(this.updateStream$$);

    this.cleanUpStream$ = this.getCleanUpStream(this.translateObject);
    this.cleanUpStream$.subscribe(this.updateStream$$);
  }

  public check(word: IWord): void {
    this.wordsStream$.next(word);
    this.cleanUpStream$.next();
  }

  private getWordsStream(translateObject: ITranslateObject): Observable<IWord[]> {
    return new Subject<IWord>()
      .switchMap(word => Observable
        .from(translateObject.translates)
        .map(item => {
          if (item.id === word.id
            && item.foreign !== translateObject.main.foreign) {
            item.error = true;
          }
          return item;
        })
        .toArray());
  }

  private getCleanUpStream(translateObject: ITranslateObject) {
    return new Subject()
      .switchMap(() => {
        return Observable
          .from(translateObject.translates)
          .delay(500)
          .map(item => {
            item.error = false;
            return item;
          })
          .toArray()
      })
  }

}
















