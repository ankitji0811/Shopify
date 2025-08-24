class CarouselComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.container = this.querySelector(".splide");

    if (!this.container) {
      console.error("No .splide element found inside <carousel-component>");
      return;
    }

    this.data = this.container.dataset;

    this.splide = new Splide(this.container, {
      autoplay: this.data.autoplay,
      perPage: this.data.perpage,
      type: this.data.splidetype,
      perMove: this.data.permove,
      gap: this.data.gap,
      arrows: this.data.showarrow,
      pagination: this.data.showdots,
      interval: this.data.interval,
      breakpoints: {
        640: {
          autoplay: this.data.autoplay,
          perPage: this.data.perpagemobile,
          type: this.data.splidetype,
          perMove: this.data.permovemobile,
          gap: this.data.gaponmobile,
          arrows: this.data.showarrowmobile,
          pagination: this.data.showdotsmobile,
          interval: this.data.interval,
        },
      },
    });
    this.splide.mount();
  }
}

customElements.define("carousel-component", CarouselComponent);
