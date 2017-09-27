import React from 'react';

import Animator from './Animator';
import FaceTracker from '../animations/FaceTracker';
import Redify from '../animations/Redify';

const items = [
    {start: 0, end: 2000, getAnimation: Redify},
    // {start: 0, end: 2000, getAnimation: FaceTracker}
]

export default class Canvas extends React.Component {
    componentDidMount(){
        const { width, height, scale } = this.getDimensions();
        this.ctx = this._canvas.getContext("2d");
        this.ctx.drawImage(this.props.image, 0, 0, width, height);
        this.animator = new Animator({scale, ctx: this.ctx, image: this.props.image, items: items});
        this.animator.start();
    }
    
    getDimensions(){
        let height, width, scale;
        
        if (this.props.image.naturalHeight > this.props.image.naturalWidth) {
            height = Math.min(this.props.maxHeight, this.props.image.naturalHeight);
            scale = height / this.props.image.naturalHeight;
            width = scale * this.props.image.naturalWidth;
        } else {
            width = Math.min(this.props.maxWidth, this.props.image.naturalWidth);
            scale = width / this.props.image.naturalWidth;
            height = scale * this.props.image.naturalHeight;
        }
        
        return {width, height, scale};
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
