import React from 'react';

import Dropzone from 'react-dropzone';
import { loadImage } from '../utils';

export default class FileUpload extends React.Component {
    constructor(){
        super();
        this.onDrop = this.onDrop.bind(this);
    }
    
    onDrop(files){
        loadImage(files[0].preview).then(image => {
            this.props.onAddImage(image);
        });
    }
    
    render(){
        return (
            <Dropzone
                className="file-dropzone"
                activeClassName="file-dropzone-active"
                onDrop={this.onDrop}
                multiple={false}
                ref="dropzone"
            >
                <div className="file-dropzone-empty">
                    Click or drag to upload your image!
                </div>
                <div className="file-dropzone-target">
                    Drop file here!
                </div>
            </Dropzone>
        );
    }
}
