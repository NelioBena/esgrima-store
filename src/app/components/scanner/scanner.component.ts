import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  standalone: true,
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css'],
})
export class ScannerComponent implements OnInit {
  ngOnInit() {
    const scanner = document.querySelector('.scanner') as HTMLElement;
    const images = document.querySelectorAll('img');

    function checkImages() {
      const scannerRect = scanner.getBoundingClientRect();

      images.forEach((img) => {
        const imgRect = img.getBoundingClientRect();

        // Si el escáner está tocando la imagen, aplicamos la clase "scanned"
        if (
          scannerRect.top < imgRect.bottom &&
          scannerRect.bottom > imgRect.top
        ) {
          img.classList.add('scanned');
        } else {
          img.classList.remove('scanned');
        }
      });
    }

    // Llamamos a checkImages repetidamente mientras el escáner se mueve
    setInterval(checkImages, 50);
  }
}
