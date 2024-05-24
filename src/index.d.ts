export interface UtilitySoup {
  increment: (count: number) => number;
  decrement: (count: number) => number;
  upperCaseify: (text: string) => string;
  dateToText: () => string;
  sortArray: (array: number[]) => number[];
}