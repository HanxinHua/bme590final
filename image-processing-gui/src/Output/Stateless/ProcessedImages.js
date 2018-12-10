import React from 'react';
import {connect} from 'react-redux';
import './ProcessedImages.css';

import ImagePairs from './ImagePairs';
import HistogramGroup from './HistogramGroup';

const ProcessedImages=props=>{
    return (
        props.imagePairs.map(pair=>{
            let index = props.imagePairs.indexOf(pair);
            let name = props.imageNames[index];
            let size = props.imageSizes[index];
            let histogram=props.histograms[index];
            // let histogram=props.histograms[index];
            return(
                <div className="eachGroup" key={Math.random()}>
                    {/* Images */}
                    <ImagePairs pair={pair} />
                    <p>Image size:{size}</p>
                    {/* Histograms */}
                    <HistogramGroup histogram={histogram} />

                    {/* Download Button */}
                    <button type="button" onClick={() => props.download(pair[1], "processed_"+name)}>Download processed image</button>
                </div >
            )
        }
    ))
}

const mapStatetoProps = reduxState => {
    return {
        imagePairs: reduxState.returnedData.imagePairs,
        imageSizes: reduxState.returnedData.imageSizes,
        imageNames: reduxState.returnedData.imageNames,
        histograms: reduxState.returnedData.histograms
    }
}

export default connect(mapStatetoProps)(ProcessedImages);