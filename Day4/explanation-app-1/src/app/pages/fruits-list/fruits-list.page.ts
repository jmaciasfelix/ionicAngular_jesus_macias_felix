import { Component, OnInit } from '@angular/core';
import { Fruit } from '../../models/fruit.model';

@Component({
  selector: 'app-fruits-list-page',
  templateUrl: 'fruits-list.page.html',
  styleUrls: ['fruits-list.page.scss'],
})
export class FruitsListPage implements OnInit {

  public fruits: Fruit[];

  constructor() {

  }

  public ngOnInit(): void {

    this.fruits = [
      {
        id: 1,
        name: 'Apple',
        image: 'apple.png',
        description: 'The usually round red, green, or yellow fruit of a small tree of the rose family.',
        link: 'https://www.wikipedia.org/wiki/Apple'
      },
      {
        id: 2,
        name: 'Orange',
        image: 'orange.png',
        description: 'A rounded, reddish yellow, bitter or sweet citrus fruit that can be eaten.',
      },
      {
        id: 3,
        name: 'Lemon',
        image: 'lemon.png',
        description: 'The yellowish, acid fruit of a subtropical citrus tree.',
        link: 'https://www.wikipedia.org/wiki/Lemon'
      },
      {
        id: 4,
        name: 'Pear',
        image: 'pear.png',
        description: 'The rounded fruit of a tree of the rose family.',
      },
      {
        id: 5,
        name: 'Strawberry',
        image: 'strawberry.png',
        description: 'The fleshy red fruit of a stemless plant belonging to the rose family.',
        link: 'https://www.wikipedia.org/wiki/Strawberry'
      },
      {
        id: 6,
        name: 'Pineapple',
        image: 'pineapple.png',
        description: 'A tropical plant having a short stem and rigid, spiny leaves.',
      },
      {
        id: 7,
        name: 'Watermelon',
        image: 'watermelon.png',
        description: 'A large melon with a hard, green rind and sweet, juicy, usually red pulp.',
        link: 'https://www.wikipedia.org/wiki/Watermelon'
      },
      {
        id: 8,
        name: 'Grapes',
        image: 'grapes.png',
        description: 'The smooth-skinned, green or purple fruit that grows in clusters on vines, may be eaten, and is used to make wine.',
      }
    ];
  }

  public deleteFruit(index: number): void {

    console.log('TODO: Remove fruit index', index);
  }
}
