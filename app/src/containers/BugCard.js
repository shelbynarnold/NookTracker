import React from 'react'

const BugCard = ({bug}) => {
console.log(bug)
    return (
    <div>
        <div className="header">{bug[1].name["name-USen"]}</div>
        <div className="four column wide" key={bug.id}>
        <div className="ui link cards">
        <div className="card">
                        <div className="image">
                            <img src={bug[1]["icon_uri"]} alt={bug["file-name"]} />
                            <div className="content">
                                <div className="meta pirce">$ {bug.price}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
    </div>            
    )
    }

export default BugCard