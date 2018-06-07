import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = ({onInputChange, onSubmitButton}) => {
    return (
        <div>
            <p className="f3">
                {'This magic brain will detect faces on your pictue. Give it a try'}
            </p>
            <div className="center">
                <div className="pa4 center br3 shadow-5 form">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                    <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
                    onClick={onSubmitButton}
                    >Detect</button>
                </div>
            </div>
        </div> 
    );
}

export default ImageLinkForm;