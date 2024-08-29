import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QRCodeModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-qr-code-generator';
    qrData: string;
    size: number;
    level: string;

    constructor() {
      this.qrData = 'https://www.google.com';
      this.size = 600;
      this.level = 'M';
    }

    @Input() data!: string;
    @Input() qrCodeSize!: number;
}
