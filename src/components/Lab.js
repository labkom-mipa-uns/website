import React, { Component } from 'react';
import '../styles/lab.css';
import {
    Container, Row, Col,
    Carousel,
    CarouselCaption,
    CarouselControl,
    CarouselIndicators,
    CarouselItem } from 'reactstrap';

export default class Lab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            data:[],
            endpoint: `http://localhost/labkom-api/?i=Laboratorium&include=img&code=${props.endpointCode}`,
            gbrLab: []
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    componentDidMount() {
        fetch(this.state.endpoint)
            .then(result => result.json())
            .then(data => this.setState({data}));
        this.setState({
            gbrLab : this.state.data.gambar_lab
        });
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.state.gbrLab.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.state.gbrLab.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = this.gbrLab.bind(this).map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.gbr} alt={item.alt} />
                    <CarouselCaption captionText={item.alt} captionHeader={item.alt} />
                </CarouselItem>
            );
        });

        return(
            <Container>
                <h3>{this.state.data.nama}</h3>
                <Row>
                    <Col sm="4">
                        <Carousel
                            activeIndex={activeIndex}
                            next={this.next}
                            previous={this.previous}
                        >
                            <CarouselIndicators items={this.state.gbrLab}
                                                activeIndex={activeIndex}
                                                onClickHandler={this.goToIndex} />
                            {slides}
                            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                            <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                        </Carousel>
                    </Col>
                    <Col sm="8">teks</Col>
                </Row>
            </Container>
        );
    }
}