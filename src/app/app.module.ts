import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';


import {
	CdkVirtualScrollViewport,
	ScrollDispatcher,
} from "@angular/cdk/scrolling";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './shared/navigation-bar/navigation-bar.component';
import { HomeComponent } from './components/home/home.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HeroesCardComponent } from './shared/heroes-card/heroes-card.component';
import { NoimgPipe } from './pipes/noimg.pipe';
import { SearchComponent } from './components/search/search.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
	declarations: [
		AppComponent,
		NavigationBarComponent,
		HomeComponent,
		HeroesCardComponent,
		NoimgPipe,
		SearchComponent,
		HeroeComponent,
		LoadingComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ScrollingModule,
	],
	providers: [
		ScrollDispatcher,
		{ provide: LocationStrategy, useClass: HashLocationStrategy },
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
