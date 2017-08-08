export interface IWord {
  id: number,
  foreign: string,
  native: string,
  error: boolean
}

export interface ITranslateObject {
  main: IWord,
  translates: IWord[]
}
