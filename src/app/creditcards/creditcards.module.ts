import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditcardsRoutingModule } from './creditcards-routing.module';
import { CreditcardsComponent } from './creditcards.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CreditcardsComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    CreditcardsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatPaginator,
    MatPaginatorModule,
    MatCheckboxModule,
    MatIconModule,
  ],
})
export class CreditcardsModule {}
