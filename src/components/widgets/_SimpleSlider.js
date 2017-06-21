import React from 'react';
import Slider from 'react-slick';
import {Button, Card, CardBlock, CardImg, CardText, CardTitle} from "reactstrap";

export default class SimpleSlider extends React.Component {

    getSetting(){
        return {
            arrows: false,
            infinite: true,
            speed: 1500,
            autoplay: true,
            autoplaySpeed: 2,
            slidesToShow: 5,
            slidesToScroll: 3
        };
    }

    getList(){
        return this.props.slider;
    }

    render(){
        console.log(this.getList());
        if(this.getList() !== ''){
            return (
                <Slider {...this.getSetting()}>
                    {this.getList().map((item, index) => (
                        <div key={index}>
                            <Card>
                                <CardImg top width="100%" src={item.image} />
                                <CardBlock>
                                    <CardTitle>{item.name}</CardTitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content. {item.price}</CardText>
                                    <Button>Add to Cart</Button>
                                </CardBlock>
                            </Card>
                        </div>
                    ))}
                </Slider>
            );
        }

        return null;
    }
}
