import React from 'react';
import './OfferDetail.css';

class OfferDetail extends React.Component {
    htmlDecode(input){
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
    }

    render() {
        
        return (
            <div className="OfferDetail">
                <div className="DetailHeader">
                    <img src={process.env.PUBLIC_URL + '/back-button.png'} onClick={this.props.click} />
                    <img src={process.env.PUBLIC_URL + this.props.offer.banner} alt={this.props.offer.vendor} />
                </div>
                <div className="DetailContent">
                    <h6>{this.props.offer.question1}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer1}}></div>
                    <h6>{this.props.offer.question2}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer2}}></div>
                    <h6>{this.props.offer.question3}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer3}}></div>
                    <h6>{this.props.offer.question4}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer4}}></div>
                    <h6>{this.props.offer.question5}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer5}}></div>
                    <h6>{this.props.offer.question6}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer6}}></div>
                    <h6>{this.props.offer.question7}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer7}}></div>
                    <h6>{this.props.offer.question8}</h6>
                    <div className="OfferContent" dangerouslySetInnerHTML={{__html: this.props.offer.answer8}}></div>
                </div>
            </div>
        )
    }
    
}

export default OfferDetail;