import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignService, Campaign } from '../../services/campaign.service';

@Component({
  selector: 'app-campaign-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']

})
export class CampaignFormComponent {
  model: Partial<Campaign> = {
    name: '',
    status: 'Em andamento',
    system: '',
    description: '',
    notes: '',
    sessions: 0,
    characters: ''
  };
  isEdit = false;
  editingId?: number;

  constructor(
    private service: CampaignService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const idStr = this.route.snapshot.paramMap.get('id');
    if (idStr) {
      const id = Number(idStr);
      const c = this.service.get(id);
      if (c) {
        this.isEdit = true;
        this.editingId = id;
        this.model = { ...c };
      }
    }
  }

  save() {
    if (!this.model.name || !this.model.system) {
      alert('Preencha pelo menos nome e sistema.');
      return;
    }

    if (this.isEdit && this.editingId) {
      this.service.update(this.editingId, this.model as Partial<Campaign>);
      this.router.navigate(['/campanha', this.editingId]);
    } else {
      const created = this.service.create(this.model as Omit<Campaign,'id'>);
      this.router.navigate(['/campanha', created.id]);
    }
  }

  cancel() {
  this.router.navigate(['/']);
}

getSystemPreview(system: string) {
  switch (system) {
    case 'D&D 5e':
      return 'assets/systems/dnd5e.png';
    case 'Tormenta20':
      return 'assets/systems/tormenta20.png';
    case 'Call of Cthulhu':
      return 'assets/systems/coc.png';
    case 'Ordem Paranormal':
      return 'assets/systems/op.png';
    default:
      return '';
  }
}

}
