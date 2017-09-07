import React from 'react';

import Dropzone from 'react-dropzone';

export default class FileUpload extends React.Component {
    onDrop(files){
        console.log(files);
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
                <div className="file-dropzone-target">
                    Drop Image Here
                </div>
            </Dropzone>
        );
    }
}
