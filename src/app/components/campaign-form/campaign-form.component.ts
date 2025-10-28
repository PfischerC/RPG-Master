import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campaign-form.component.html',
  styleUrls: ['./campaign-form.component.css']
})
export class CampaignFormComponent {
  newCampaign = { name: '', system: '', story: '' };

  constructor(private router: Router) {}

  addCampaign() {
    // por enquanto só loga; depois integraremos com armazenamento
    console.log('Nova campanha criada:', this.newCampaign);
    // opcional: navegar de volta pra lista
    this.router.navigate(['/']);
  }
}
