import { Routes } from '@angular/router';
import { CampaignListComponent } from './components/campaign-list/campaign-list.component';
import { CampaignFormComponent } from './components/campaign-form/campaign-form.component';
import { CampaignDetailComponent } from './components/campaign-detail/campaign-detail.component';


export const routes: Routes = [
  { path: '', component: CampaignListComponent },
  { path: 'nova', component: CampaignFormComponent },
  { path: 'campanha/:id', component: CampaignDetailComponent },
  { path: '**', redirectTo: '' }
];
