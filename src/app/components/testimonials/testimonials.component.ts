import { Component, signal, computed } from '@angular/core';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
  initials: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  readonly currentIndex = signal(0);
  readonly Array = Array;

  readonly testimonials: Testimonial[] = [
    {
      name: 'Ana Paula S.',
      location: 'São Paulo, SP',
      text: 'A Vick tem um dom incrível! A leitura foi extremamente precisa e me deu a clareza que eu precisava para tomar uma decisão muito difícil. Ela foi acolhedora, sem julgamentos, e as mensagens ressoaram profundamente na minha alma.',
      rating: 5,
      service: 'Tiragem Geral',
      initials: 'AP',
    },
    {
      name: 'Juliana M.',
      location: 'Rio de Janeiro, RJ',
      text: 'Consultei sobre meu relacionamento e fiquei impressionada com a precisão. Tudo que a Vick disse se confirmou depois. Ela me ajudou a entender padrões que eu repetia sem perceber. Transformador!',
      rating: 5,
      service: 'Tiragem de Amor',
      initials: 'JM',
    },
    {
      name: 'Carlos Eduardo R.',
      location: 'Curitiba, PR',
      text: 'Estava em dúvida se devia mudar de emprego. A leitura de carreira foi muito esclarecedora. A Vick identificou pontos que eu nem havia mencionado. Tomei minha decisão com muito mais segurança.',
      rating: 5,
      service: 'Tiragem de Carreira',
      initials: 'CE',
    },
    {
      name: 'Fernanda L.',
      location: 'Brasília, DF',
      text: 'A Mandala Astrológica foi uma experiência única. Durou quase 2 horas e eu saí completamente diferente. Entendi coisas sobre mim mesma que carregava há anos sem compreender.',
      rating: 5,
      service: 'Mandala Astrológica',
      initials: 'FL',
    },
    {
      name: 'Mariana C.',
      location: 'Belo Horizonte, MG',
      text: 'Super recomendo! A Vick é muito sensível e profissional. A leitura foi online e mesmo assim a conexão foi incrível. Já marquei mais uma sessão para o próximo mês!',
      rating: 5,
      service: 'Tiragem Geral',
      initials: 'MC',
    },
    {
      name: 'Roberto A.',
      location: 'Porto Alegre, RS',
      text: 'Sou cético, mas fui por curiosidade. Saí completamente convencido. A Vick tocou em pontos muito específicos da minha vida que não havia mencionado. Uma experiência que me fez refletir profundamente.',
      rating: 5,
      service: 'Tiragem Geral',
      initials: 'RA',
    },
  ];

  readonly totalPages = computed(() => Math.ceil(this.testimonials.length / 3));

  readonly visibleTestimonials = computed(() => {
    const start = this.currentIndex() * 3;
    return this.testimonials.slice(start, start + 3);
  });

  prev(): void {
    this.currentIndex.update(i => (i > 0 ? i - 1 : this.totalPages() - 1));
  }

  next(): void {
    this.currentIndex.update(i => (i < this.totalPages() - 1 ? i + 1 : 0));
  }

  getStars(rating: number): string[] {
    return Array(rating).fill('★');
  }
}
