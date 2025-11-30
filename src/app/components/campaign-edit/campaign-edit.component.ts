import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-campaign-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campaign-edit.component.html'
})
export class CampaignEditComponent {

  model: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CampaignService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.model = { ...this.service.get(id)
 };
  }

  save() {
    this.service.update(this.model.id, this.model);
    this.router.navigate(['/campanha', this.model.id]);
  }
}
