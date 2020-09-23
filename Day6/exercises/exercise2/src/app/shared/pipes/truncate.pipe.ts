//angular
import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: "truncate",
})
@Injectable({
  providedIn: "root",
})
export class TruncatePipe implements PipeTransform {
  /**
   * Truncate a array for number of letter.
   * @param arrayStr Text words list
   * @param limit Limit
   */
  truncateLetters = (arrayStr: string[], limit: number) => {
    let newStr = "";
    arrayStr.forEach((elemento) => {
      newStr.length < limit ? (newStr += " " + elemento) : null;
    });
    newStr += "...";
    return newStr;
  };
  /**
   * Truncate a array for number of words.
   * @param arrayStr Text words list
   * @param limit Limit
   */
  truncateWords = (arrayStr: string[], limit: number) => {
    let newStr = "";
    arrayStr.forEach((elemento, index) => {
      index < limit ? (newStr += " " + elemento) : null;
    });
    newStr += "...";
    return newStr;
  };
  transform(text: string, n: number = 0, words: string = ""): string {
    let newStr = "";
    const arrayStr = text.split(" ");

    if (n !== 0) {
      if (words === "words") {
        newStr = this.truncateWords(arrayStr, n);
      } else {
        newStr = this.truncateLetters(arrayStr, n);
      }
    } else {
      newStr = text;
    }

    return newStr;
  }
}
