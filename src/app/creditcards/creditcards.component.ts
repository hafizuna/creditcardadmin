import { Component, ViewChild } from '@angular/core';
import { CreditCard } from '../models/credit-card';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

const TABLE_DATA: CreditCard[] = [
  {
    id: 1,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    termsAndConditions: 'Following are the terms and conditions',
    annualFee: 4,
    createdDate: '2023-31-09',
    updatedDate: '2023-12-09',
  },
  {
    id: 2,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    termsAndConditions: 'Following are the terms and conditions',
    annualFee: 4,
    createdDate: '2023-31-09',
    updatedDate: '2023-12-09',
  },
  {
    id: 3,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    termsAndConditions: 'Following are the terms and conditions',
    annualFee: 4,
    createdDate: '2023-31-09',
    updatedDate: '2023-12-09',
  },
  {
    id: 4,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    termsAndConditions: 'Following are the terms and conditions',
    annualFee: 4,
    createdDate: '2023-31-09',
    updatedDate: '2023-12-09',
  },
  {
    id: 5,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    termsAndConditions: 'Following are the terms and conditions',
    annualFee: 4,
    createdDate: '2023-31-09',
    updatedDate: '2023-12-09',
  },
  {
    id: 6,
    name: 'Bank of America',
    description: 'Bank of America offers customers with various options',
    bankName: 'Bank of America',
    maxCredit: 3000,
    interestRate: 10,
    active: true,
    recommendedScore: '700-900',
    termsAndConditions: 'Following are the terms and conditions',
    annualFee: 4,
    createdDate: '2023-31-09',
    updatedDate: '2023-12-09',
  },
];

@Component({
  selector: 'app-creditcards',
  templateUrl: './creditcards.component.html',
  styleUrl: './creditcards.component.scss',
})
export class CreditcardsComponent {
  displayColumns = [
    'select',
    'id',
    'name',
    'description',
    'bankName',
    'maxCredit',
    'interestRate',
    'active',
    'recommendedScore',
    'annualFee',
    'termsAndConditions',
    'createdDate',
    'updatedDate',
  ];

  dataSource = new MatTableDataSource(TABLE_DATA);

  selection = new SelectionModel(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  selectHandler(row: CreditCard) {
    this.selection.toggle(row as never);
  }
}
