import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './components/about.component';
import {ContactComponent} from './components/contact.component';
import {HomeComponent} from './components/home.component';

const appRoutes: Routes = [
	{
		path:'',
		component: HomeComponent
	},
	{
		path:'app',
		component: AppComponent
	},
	{
		path: 'about',
		component: AboutComponent
	},
	{
		path: 'contact',
		component: ContactComponent
	}

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);