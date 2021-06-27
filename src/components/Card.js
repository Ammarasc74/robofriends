import React from "react";
import 'tachyons';

const Card = ({ name, email, id }) => {
    return (
        <div className="pa50 mg10 tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
            <img className="tc" alt='robots' src={`https://robohash.org/${id}?200x200`} />
            <div className=''>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;