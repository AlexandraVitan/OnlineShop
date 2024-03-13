import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TagsComponent } from './tags/tags.component';
import { PerfumePageComponent } from './perfume-page/perfume-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TagsComponent,
    PerfumePageComponent,
    NotFoundComponent,
    CartPageComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
