import React from 'react';
import './styles.scss';

const Team = () => {
    return (
        <>
        <div id="cubeContainer">
            <div id="cubeWrapper">
                <div className="head">
                    <h1>Meet the Team</h1>
                </div>
                <div id="cubes">
                    <div className="cube p1">
                        <div className="name">
                            <h1>Mr.Ramesh Ka.Patel</h1>
                            <p>Founder</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                       
                    </div>
                    
                    <div className="cube p2">
                        <div className="name">
                            <h1>Mr.Jagdish Ka.Patel</h1>
                            <p>Co Founder</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                        
                    </div>
                    <div className="cube p3">
                        <div className="name">
                            <h1>Mr.Rajesh Ka.Patel</h1>
                            <p>Co Founder</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                        
                    </div>
                    <div className="cube p4">
                        <div className="name">
                            <h1>Mr.Mayur Ka.Patel</h1>
                            <p>CEO</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                        
                    </div>
                    <div className="cube p5">
                        <div className="name">
                            <h1>Mr.Nilesh Ka.Patel</h1>
                            <p>CMO</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                       
                    </div>
                    <div className="cube p6">
                        <div className="name">
                            <h1>Mr.Pritesh Ka.Patel</h1>
                            <p>CMO</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                    </div>

                    <div className="cube p7">
                        <div className="name">
                            <h1>Mr.Kaushik Ka.Patel</h1>
                            <p>CFO</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Team
