import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//custom 
import { UserListComponent } from '../user-list/user-list.component';
import { UserSearchComponent } from '../user-search/user-search.component';

//third party 
import { MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  declarations: [UserListComponent, UserSearchComponent],
  exports: [UserListComponent, UserSearchComponent]
})
export class CustomModule { }
