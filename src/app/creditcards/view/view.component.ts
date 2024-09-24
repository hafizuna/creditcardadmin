import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss',
})
export class ViewComponent {
  creditCardDetails!: CreditCard;

  constructor(private creditCardsService: CreditcardsService) {
    this.creditCardsService
      .getCreditCardById(1)
      .subscribe((data: CreditCard) => {
        this.creditCardDetails = data;
      });
  }
}
