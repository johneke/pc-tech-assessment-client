import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvAllComponent } from './ev-all/ev-all.component';
import { EvDetailComponent } from './ev-detail/ev-detail.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'events',
		pathMatch: 'full'
	},
	{
		path: 'events',
		component: EvAllComponent
	},
	{
		path: 'events/:id',
		component: EvDetailComponent
	},
	{
		path: "**",
		redirectTo: 'events'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {useHash: true})],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule {
}
