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
                            <h1>Brain</h1>
                            <p>Manager</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                       
                    </div>
                    <div className="cube p2">
                        <div className="name">
                            <h1>Jessica</h1>
                            <p>Community Manager</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                        
                    </div>
                    <div className="cube p3">
                        <div className="name">
                            <h1>Chris</h1>
                            <p>Web Developer</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                        
                    </div>
                    <div className="cube p4">
                        <div className="name">
                            <h1>James</h1>
                            <p>UX / UI Designer</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                        
                    </div>
                    <div className="cube p5">
                        <div className="name">
                            <h1>Rebecca</h1>
                            <p>Graphics Designer</p>
                        </div>
                        <div className="innerBorder"></div>
                        <div className="darken"></div>
                       
                    </div>
                    <div className="cube p6">
                        <div className="name">
                            <h1>James</h1>
                            <p>UX / UI Designer</p>
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
