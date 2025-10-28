import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-campaign-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './campaign-list.component.html',
  styleUrls: ['./campaign-list.component.css']
})
export class CampaignListComponent {
  campaigns = [
    { id: 1, name: 'A Maldição do Dragão', system: 'D&D 5e', story: 'Os heróis enfrentam um dragão ancestral.' },
    { id: 2, name: 'Sombras de Tormenta', system: 'Tormenta20', story: 'Uma conspiração ameaça o reino de Arton.' }
  ];
}
