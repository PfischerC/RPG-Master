import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { CampaignDetailComponent } from './components/campaign-detail/campaign-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nova', component: CampaignFormComponent },
  { path: 'editar/:id', component: CampaignFormComponent },      // reusa form para edição
  { path: 'campanha/:id', component: CampaignDetailComponent },
  { path: '**', redirectTo: '' }
];
