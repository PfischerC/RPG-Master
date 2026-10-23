import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CampaignService, Campaign } from '../../services/campaign.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  campaigns: Campaign[] = [];

  readonly filters = ['Todas', 'Em andamento', 'Pausada', 'Finalizada'] as const;
  selectedFilter: typeof this.filters[number] = 'Todas';

  get filteredCampaigns(): Campaign[] {
    if (this.selectedFilter === 'Todas') return this.campaigns;
    return this.campaigns.filter(c => (c.status ?? 'Em andamento') === this.selectedFilter);
  }

  setFilter(filter: typeof this.filters[number]): void {
    this.selectedFilter = filter;
  }


  constructor(private service: CampaignService) {}

  ngOnInit() {
    this.campaigns = this.service.getAll(); 
    console.log('Home loaded campaigns:', this.campaigns);
  }

  icons: any = {
  "D&D 5e": "🐉",
  "Tormenta20": "⚔️",
  "Call of Cthulhu": "🦑"
};

getIcon(system: string) {
  return this.icons[system] || "📜";
}

}
