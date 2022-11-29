import React from "react"
import Lottie from 'react-lottie-player'
import { useNavigate } from "react-router-dom";
import ViewDocumentsLottie from '../../json/viewDocuments.json';

const ViewDocuments = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-white border-radius-15 text-center card-boxShadow border-radius-15 w-35 mx-auto px-2 py-5 mt-5">
            <div className="success-img text-center mb-2">
                <Lottie
                    loop
                    animationData={ViewDocumentsLottie}
                    play
                    style={{ width: 250, height: 200, margin: '0 auto' }}
                />
            </div>
            <p className="mb-2">Great! You've Successfully signed the documents</p>
            <div className="text-center">
                <button className="ui button bg-success-dark text-white fw-100 mr-2 mb-1 fs-7 fw-400">View Documents</button>
                <button onClick={() => navigate('/signandPayment')} className="ui button bg-secondary text-white fw-100 mb-1 fs-7 fw-400">Continue</button>
            </div>
        </div>
    )
}

export default ViewDocuments