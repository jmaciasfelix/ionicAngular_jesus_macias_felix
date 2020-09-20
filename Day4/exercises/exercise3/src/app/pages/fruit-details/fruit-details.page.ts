//angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// services
import { FruitService } from '../../services';

// interfaces
import { Fruit } from '../../interfaces';

@Component({
  selector: 'app-fruit-details',
  templateUrl: './fruit-details.page.html',
  styleUrls: ['./fruit-details.page.scss'],
})
export class FruitDetailsPage implements OnInit {
  public fruit: Fruit;

  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly fruitService: FruitService) { }

  /**
   * fired on component initialization
   */
  public ngOnInit(): void {
    const nameFruit = this.activatedRoute.snapshot.paramMap.get('name');
    this.fruit = this.fruitService.getFruit(nameFruit);
  }

}
