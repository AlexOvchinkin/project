export interface IWord {
  foreign: string,
  native: string
}

export interface ITranslateObject {
  main: IWord,
  translates: IWord[]
}
