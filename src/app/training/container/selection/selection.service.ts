import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/first";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/toArray";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/reduce";

export interface ILetter {
  id: number,
  value: string,
  shown: boolean,
  error?: boolean
}

@Injectable()
export class SelectionService {

  private checkArray: ILetter[] = [];
  private pickArray: ILetter[] = [];

  public checkStream$;
  public pickStream$;
  public updateStream$$;
  public updatePickStream$$;

  constructor() {
  }

  initService(word: string) {
    this.checkArray = this.generateCheckArray(word);
    this.pickArray = this.generatePickArray(this.checkArray);

    this.updateStream$$ = new BehaviorSubject(this.checkArray);
    this.updatePickStream$$ = new BehaviorSubject(this.pickArray);

    this.pickStream$ = this.getPickStream(this.pickArray, this.checkArray);
    this.pickStream$.subscribe(this.updatePickStream$$);

    this.checkStream$ = this.getCheckStream(this.checkArray);
    this.checkStream$.subscribe(this.updateStream$$);
  }

  public checkLetter(value: ILetter) {
    this.pickStream$.next(value);
    this.checkStream$.next(value);
  }

  private getCheckStream(checkArray: ILetter[]): Observable<ILetter[]> {
    return new Subject<ILetter>()
      .switchMap(inputLetter => {
        return Observable.from(checkArray)
          .filter(itemLetter => itemLetter.shown === false && itemLetter.value.trim() !== '')
          .first()
          .switchMap(firstHiddenLetter => {
            return Observable.from(checkArray)
              .map(itemLetter => {
                if (itemLetter.id === firstHiddenLetter.id
                  && itemLetter.value === inputLetter.value) {
                  itemLetter.shown = true;
                }
                return itemLetter;
              })
              .toArray();
          })
      });
  }

  private getPickStream(pickArray: ILetter[], checkArray: ILetter[]): Observable<ILetter[]> {
    return new Subject<ILetter>()
      .switchMap(inputLetter => {
        return Observable.from(checkArray)
          .filter(itemLetter => itemLetter.shown === false && itemLetter.value.trim() !== '')
          .first()
          .switchMap(firstHiddenLetter => {
            return Observable.from(checkArray)
              .reduce((acc, itemLetter) => {
                if (itemLetter.id === firstHiddenLetter.id
                  && itemLetter.value !== inputLetter.value) {
                  return acc + 1;
                }
                return acc;
              }, 0)
          })
          .switchMap(errorsCount => {
            return Observable.from(pickArray)
              .map(letter => {
                if (letter.id === inputLetter.id) {
                  letter.shown = errorsCount != 0;
                  letter.error = errorsCount != 0;
                }
                return letter;
              })
              .toArray();
          })
      })
  }

  private generateCheckArray(word: string): ILetter[] {
    const letters = word.split('');
    return letters.reduce((acc, item, index) => {
      acc.push({
        id: index,
        value: item,
        shown: false
      });

      return acc;

    }, []);
  }

  private generatePickArray(arrayOfLetters: ILetter[]): ILetter[] {
    let newArray = [];

    for (let letter of arrayOfLetters) {
      if (letter.value.trim()) {
        newArray.push({
          id: letter.id,
          value: letter.value,
          shown: true,
          error: false
        });
      }
    }

    return this.getRandomArray(newArray);
  }

  private getRandomArray(array: ILetter[]): ILetter[] {
    let newArray: ILetter[] = [];
    let min: number = 0;

    while (array.length > 0) {
      let max = array.length;
      let letter = array.splice(this.getRandomInt(min, max), 1)[0];
      newArray.push(letter);
    }

    return newArray;
  }

  private getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}




























