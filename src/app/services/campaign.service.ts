import { Injectable } from '@angular/core';

export type CampaignStatus = 'Em andamento' | 'Pausada' | 'Finalizada';

export interface Campaign {
  id: number;
  status: CampaignStatus;
  name: string;
  system: string;
  description: string;
  notes?: string;
  sessions?: number;
  characters?: string;
}

@Injectable({ providedIn: 'root' })
export class CampaignService {
  private storageKey = 'campaigns';
  private campaigns: Campaign[] = [];

  constructor() {
    this.load();
  }

  private load() {
    const raw = localStorage.getItem(this.storageKey);
    const stored: Campaign[] = raw ? JSON.parse(raw) : [];
    // Compatibilidade com campanhas criadas antes do campo status.
    this.campaigns = stored.map(c => ({ ...c, status: c.status ?? 'Em andamento' }));
  }

  private save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.campaigns));
  }

  getAll(): Campaign[] {
    return this.campaigns;
  }

  get(id: number): Campaign | undefined {
    return this.campaigns.find(c => c.id === id);
  }

  create(data: Omit<Campaign, 'id'>) {
    const newCampaign: Campaign = { id: Date.now(), ...data, status: data.status ?? 'Em andamento' };
    this.campaigns.push(newCampaign);
    this.save();
    return newCampaign;
  }

  update(id: number, data: Partial<Campaign>) {
    const idx = this.campaigns.findIndex(c => c.id === id);
    if (idx >= 0) {
      this.campaigns[idx] = { ...this.campaigns[idx], ...data };
      this.save();
    }
  }

  delete(id: number) {
    this.campaigns = this.campaigns.filter(c => c.id !== id);
    this.save();
  }
}
