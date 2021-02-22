import "./addresspicker.css";
import Geosuggest from "react-geosuggest";

const OverlayAddressPicker = props => {

    const handleAddressSelected = (address) => {
        props.addressChange(address, props.addressType);
    }

    return (
        <div className="col-md-5 col-xs-11 overlay-map-picker fade-in">
            <div className="row">
                <div className="col-xs-12 close-btn">
                    <a onClick={props.close}>
                        <i className="fa fa-arrow-left"></i>
                    </a>
                </div>
            </div>
            <Geosuggest
                country='in'
                {...props}
                onSuggestSelect={handleAddressSelected}
            />
            <style jsx>{
                `.overlay-map-picker {
                    position: absolute;
                    background-color: #f9f9f9;
                    min-height:60vh;
                    z-index:1400;
                }
                .close-btn{
                    margin-bottom:15px;
                    cursor:pointer
                }
               `
            }
            </style>
        </div>
    )
}

export default OverlayAddressPicker;