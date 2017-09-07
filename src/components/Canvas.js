import React from 'react';

export default class FileUpload extends React.Component {
    constructor(){
        super();
        this.state = {
            height: 0,
            width: 0
        };
    }
    
    componentDidMount(){
        debugger;
        const image = new Image();
        image.onload = () => {
            this.setState({
                height: image.naturalHeight,
                width: image.naturalWidth
            }, () => {
                this.ctx = this._canvas.getContext("2d");
                this.ctx.drawImage(image, 0, 0);
            });
            
        }
        image.src = this.props.file.preview;
    }
    
    render(){
        return (
            <canvas
                ref={(node) => { if (node) { this._canvas = node }}}
                height={this.state.height}
                width={this.state.width}
            />
        );
    }
}
