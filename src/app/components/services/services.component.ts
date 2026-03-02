import { Component, inject } from '@angular/core';
import { ConfigService } from '../../services/config.service';

interface Service {
  icon: string;
  title: string;
  description: string;
  duration: string;
  modalities: string[];
  featured?: boolean;
  price?: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private config = inject(ConfigService);

  readonly services: Service[] = [
    {
      icon: '🌿',
      title: 'Tiragem Geral',
      description: 'Uma visão panorâmica da sua vida: amor, trabalho, saúde, espiritualidade e os principais desafios e oportunidades no horizonte.',
      duration: '60 min',
      modalities: ['Online', 'Presencial'],
      price: 'A partir de R$ 120',
    },
    {
      icon: '💞',
      title: 'Tiragem de Amor',
      description: 'Foco total nos seus relacionamentos: o que está fluindo, o que precisa de atenção, como agir para atrair ou fortalecer o amor na sua vida.',
      duration: '45 min',
      modalities: ['Online', 'Presencial'],
      featured: true,
      price: 'A partir de R$ 100',
    },
    {
      icon: '💼',
      title: 'Tiragem de Carreira',
      description: 'Clareza profissional e financeira. Ideal para decisões importantes: mudar de emprego, abrir um negócio ou entender bloqueios financeiros.',
      duration: '45 min',
      modalities: ['Online', 'Presencial'],
      price: 'A partir de R$ 100',
    },
    {
      icon: '🌌',
      title: 'Mandala Astrológica',
      description: 'A leitura mais completa: integra tarô e astrologia para uma visão profunda e detalhada das 12 casas da sua vida. Uma experiência transformadora.',
      duration: '90 min',
      modalities: ['Online', 'Presencial'],
      price: 'A partir de R$ 200',
    },
  ];

  getWhatsappLink(service: string): string {
    return this.config.getWhatsappLink(`Olá, Vick! Gostaria de agendar uma ${service}.`);
  }
}
