import React from 'react';

import Animator from './Animator';
import ColorFiller from '../animations/ColorFiller';

/*
- if height greater, scale down to height
- if width greater, scale down to width

*/

const items = [
    {start: 0, end: 2000, getAnimation: ColorFiller, options: {fillStyle: 'red'}},
    {start: 2000, end: 4000, getAnimation: ColorFiller, options: {fillStyle: 'green'}}
]

export default class Canvas extends React.Component {
    componentDidMount(){
        const { width, height } = this.getDimensions();
        this.ctx = this._canvas.getContext("2d");
        this.ctx.drawImage(this.props.image, 0, 0, width, height);
        this.animator = new Animator({ctx: this.ctx, image: this.props.image, items: items});
        this.animator.start();
    }
    
    getDimensions(){
        let height, width;
        
        if (this.props.image.naturalHeight > this.props.image.naturalWidth) {
            height = this.props.maxHeight;
            width = (this.props.maxHeight / this.props.image.naturalHeight) * this.props.image.naturalWidth;
        } else {
            width = this.props.maxWidth;
            height = (this.props.maxWidth / this.props.image.naturalWidth) * this.props.image.naturalHeight;
        }
        
        return {width, height};
    }
    
    render(){
        const { height, width } = this.getDimensions();
        return (
            <canvas
                className="meme-canvas"
                ref={(node) => { if (node) { this._canvas = node }}}
                height={height}
                width={width}
            />
        );
    }
}
