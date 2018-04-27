import {Routes, RouterModule } from '@angular/router';
import { TestPageComponent } from './components/testpage/testpage.component';

const routes: Routes = [
    {path: 'test', component: TestPageComponent}
];

export const AppRouting = RouterModule.forRoot(routes);
