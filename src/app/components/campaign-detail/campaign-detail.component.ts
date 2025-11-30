import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CampaignService, Campaign } from '../../services/campaign.service';

@Component({
  selector: 'app-campaign-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.css']
})
export class CampaignDetailComponent {
  campaign?: Campaign;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CampaignService
  ) {}

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id');
    const id = idStr ? Number(idStr) : NaN;
    console.log('Detail: id param =', idStr);
    this.campaign = isNaN(id) ? undefined : this.service.get(id);
    console.log('Detail: loaded campaign =', this.campaign);
  }

  delete() {
    if (!this.campaign) return;
    if (confirm('Deseja excluir esta campanha?')) {
      this.service.delete(this.campaign.id);
      this.router.navigate(['/']);
    }
  }

  edit() {
    if (!this.campaign) return;
    this.router.navigate(['/editar', this.campaign.id]);
  }
}
