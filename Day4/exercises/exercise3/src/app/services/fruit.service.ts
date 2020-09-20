// angular
import { Injectable } from "@angular/core";

// interfaces
import { Fruit } from "../interfaces";

@Injectable({
  providedIn: "root",
})
export class FruitService {
  private readonly fruits: Fruit[] = [
    {
      id: 1,
      name: "Apple",
      image: "apple.png",
      description:
        "The usually round red, green, or yellow fruit of a small tree of the rose family.",
    },
    {
      id: 2,
      name: "Orange",
      image: "orange.png",
      description:
        "A rounded, reddish yellow, bitter or sweet citrus fruit that can be eaten.",
    },
    {
      id: 3,
      name: "Lemon",
      image: "lemon.png",
      description: "The yellowish, acid fruit of a subtropical citrus tree.",
    },
    {
      id: 4,
      name: "Pear",
      image: "pear.png",
      description: "The rounded fruit of a tree of the rose family.",
    },
    {
      id: 5,
      name: "Strawberry",
      image: "strawberry.png",
      description:
        "The fleshy red fruit of a stemless plant belonging to the rose family.",
    },
    {
      id: 6,
      name: "Pineapple",
      image: "pineapple.png",
      description:
        "A tropical plant having a short stem and rigid, spiny leaves.",
    },
    {
      id: 7,
      name: "Watermelon",
      image: "watermelon.png",
      description:
        "A large melon with a hard, green rind and sweet, juicy, usually red pulp.",
    },
    {
      id: 8,
      name: "Grapes",
      image: "grapes.png",
      description:
        "The smooth-skinned, green or purple fruit that grows in clusters on vines, may be eaten, and is used to make wine.",
    },
  ];

  /**
   * get all fruits
   *
   * @returns array with fruits
   */
  public getListFruit(): Fruit[] {
    return this.fruits;
  }

  /**
   * get one fruit
   *
   * @param nameFruit fruit name
   * @returns {Fruit} a fruit
   */
  public getFruit(nameFruit: string): Fruit {
    return this.fruits.find(fruit => fruit.name === nameFruit);
  }
}
