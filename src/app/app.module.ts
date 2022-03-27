import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HeroDetailComponent } from './page/hero-detail/hero-detail.component';
import { HttpClientModule } from '@angular/common/http';

import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeroesService } from './services/heroes.service';
import { ObjToArrayPipe } from './objetToArry.pipe';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filterPost.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ObjToArrayPipe,
    FilterPipe
   
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    FormsModule

    
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
