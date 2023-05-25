import React from 'react'

const FishCard = ({fish}) => {
console.log(fish)
    return (
    <div>
        <div className="header">{fish[1].name["name-USen"]}</div>
        <div className="four column wide" key={fish.id}>
        <div className="ui link cards">
        <div className="card">
                        <div className="image">
                            <img src={fish[1]["icon_uri"]} alt={fish["file-name"]} />
                            <div className="content">
                                <div className="meta pirce">$ {fish.price}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
    </div>            
    )
    };

export default FishCard