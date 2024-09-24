import { Component } from '@angular/core';
import { CreditCard } from '../../models/credit-card';
import { CreditcardsService } from '../../services/creditcards.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
})
export class AddComponent {
  constructor(
    private creditcardsService: CreditcardsService,
    private router: Router
  ) {}

  newCreditCard: CreditCard = {
    id: 1,
    name: '',
    bankName: '',
    description: '',
    maxCredit: 5000,
    interestRate: 12,
    active: true,
    createdDate: Date(),
    updatedDate: Date(),
  };

  saveCreditCard() {
    console.log(this.newCreditCard);
    this.creditcardsService
      .createCreditCard(this.newCreditCard)
      .subscribe((data) => {
        alert('Created');
        this.router.navigate(['creditcards']);
      });
  }
}
