import { Pipe, PipeTransform, Injectable } from "@angular/core";

@Pipe({
  name: "truncate",
})
@Injectable({
  providedIn: "root",
})

export class TruncatePipe implements PipeTransform {
  transform(text: string, n: number = 0): string {
    const arrayStr = text.split(" ");
    let newStr = "";
    arrayStr.forEach((elemento) => {
      newStr.length < n ? (newStr += " " + elemento) : null;
    });
    newStr += "...";
    return newStr;
  }
}
