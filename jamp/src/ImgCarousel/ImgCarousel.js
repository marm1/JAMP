import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import image1 from '../assets/Image1.jpg';
import image2 from '../assets/Image2.jpg';
import image3 from '../assets/Image3.jpg';

const items = [
  {
    src: image1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: image2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: image3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          className="custom-tag"
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                text-algin: center;
                max-width: 100%;
                height: 700px;
                background: black;
              }
              img {
                width: 100%;
                height: 100%;
              }
              .carousel-height {
                height: 700px;
              }
              .carousel-fade .carousel-item {
                display: block;
                position: absolute;
                opacity: 0;
                transition: opacity 1.5s ease-in-out;
              }
              .carousel-fade .carousel-item.active {
                opacity: 1;
                position: relative;
              }
              `
          }
        </style>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
        pause={false}
        interval={7000}
        ride="carousel"
        slide={false}
        className="carousel-height carousel-fade"
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
    );
  }
}


export default Example;