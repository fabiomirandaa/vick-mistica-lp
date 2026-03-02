import { Component, OnInit, inject } from '@angular/core';
import { SeoService } from './services/seo.service';
import { ConfigService } from './services/config.service';
import { HeroComponent } from './components/hero/hero.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeroComponent,
    BenefitsComponent,
    AboutComponent,
    ServicesComponent,
    TestimonialsComponent,
    FaqComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private seoService = inject(SeoService);
  private config = inject(ConfigService);

  get fabWhatsappLink(): string {
    return this.config.getWhatsappLink('Olá, Vick! Gostaria de agendar minha leitura de tarô.');
  }

  ngOnInit(): void {
    this.seoService.updateSeo();
  }
}
