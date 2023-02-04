import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
  }
}

gsap.registerPlugin(ScrollTrigger)
gsap.from('#carrer-content', {
  scrollTrigger: {
    trigger: '#carrer-content',
    start: 'top 80%',
  },
  autoAlpha: 0,
  x: -500
});

gsap.from('.card', {
  scrollTrigger: {
    trigger: '.card',
    start: 'top 80%',
  },
  autoAlpha: 0,
  y: -200
});

gsap.from('#note-content', {
  scrollTrigger: {
    trigger: '#note-content',
    start: 'top 80%',
  },
  autoAlpha: 0,
  x: -500
});


