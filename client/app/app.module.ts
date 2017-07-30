import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MdButtonModule, MdListModule, MdTabsModule, MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';

import { HeroService }  from './services/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MdButtonModule,
    MdListModule,
    MdInputModule,
    MdTabsModule,
    BrowserAnimationsModule,
    routing
    ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
