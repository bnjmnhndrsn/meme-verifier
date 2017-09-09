import React from 'react';

export default class Canvas extends React.Component {
    componentDidMount(){
        this.ctx = this._canvas.getContext("2d");
        this.ctx.drawImage(this.props.image, 0, 0);
    }
    
    render(){
        return (
            <canvas
                ref={(node) => { if (node) { this._canvas = node }}}
                height={this.props.image.naturalHeight}
                width={this.props.image.naturalWidth}
            />
        );
    }
}
