import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditcardsService } from '../../services/creditcards.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.scss',
})
export class DeleteComponent {
  creditCardId!: Number;

  constructor(
    private router: ActivatedRoute,
    private creditcardsServices: CreditcardsService
  ) {
    this.creditCardId = parseInt(this.router.snapshot.paramMap.get('id') || '');

    // delete functionality
    this.creditcardsServices
      .deleteCreditCard(this.creditCardId)
      .subscribe((data) => {
        console.log('Deleted the credit card');
      });
  }
}
