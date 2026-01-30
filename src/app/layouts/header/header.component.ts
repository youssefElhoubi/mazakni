import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // Slider Logic
  currentSlide = 0;
  slides = [
    {
      subtitle: 'The Best',
      title: 'MUSIC BAND EVER',
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look"
    },
    {
      subtitle: 'New Album',
      title: 'LIVE TOUR 2025',
      desc: "Experience the rhythm like never before. Join us for an unforgettable night of music, passion, and energy. Secure your tickets now and be part of history."
    },
    {
      subtitle: 'Exclusive',
      title: 'MEET THE STARS',
      desc: "Get backstage access and meet the band members. A once in a lifetime opportunity to see what happens behind the curtains."
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}