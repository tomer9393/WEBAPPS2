import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TableListComponent } from './table-list.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { TableListRoutes } from './table-list.routing';
import { CreateArticleComponent } from './articles-list/create-article/create-article.component';
import { EditArticleComponent } from './articles-list/edit-article/edit-article.component';
import { DetailsArticleComponent } from './articles-list/details-article/details-article.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CreateCommentComponent } from './comments-list/create-comment/create-comment.component';
import { EditCommentComponent } from './comments-list/edit-comment/edit-comment.component';
import { DetailsCommentComponent } from './comments-list/details-comment/details-comment.component';




@NgModule({
  declarations: [
    TableListComponent,
    ArticlesListComponent,
    CategoriesListComponent,
    UsersListComponent,
    ContactsListComponent,
    ArticlesListComponent,
    CreateArticleComponent,
    EditArticleComponent,
    DetailsArticleComponent,
    CommentsListComponent,
    CreateCommentComponent,
    EditCommentComponent,
    DetailsCommentComponent,
    ],
  imports: [
    CommonModule,
    RouterModule.forChild(TableListRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ]
})
export class TableListModule { } 
