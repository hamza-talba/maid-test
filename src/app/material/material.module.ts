import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressBarModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
