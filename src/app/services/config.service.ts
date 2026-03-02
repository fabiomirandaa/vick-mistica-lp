import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  readonly whatsappNumber = '5511999999999';
  readonly instagramUrl = 'https://instagram.com/vickmistica';
  readonly tiktokUrl = 'https://tiktok.com/@vickmistica';

  getWhatsappLink(message: string): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }
}
