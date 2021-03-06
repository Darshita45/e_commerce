import React from 'react';
import './styles.css';
import CallIcon from '@material-ui/icons/Call';
//import useStyles from './styles.css';

const Footer = () => {
    return (
        //     <>
        //     <footer className="footer-area">
        //     <div className="footer-wave-box">
        //         <div className="footer-wave footer-animation"></div>
        //     </div>
        //     <div className="main">
        //         <div className="footer">
        //             <div className="single-footer">
        //                 <h4>Register Here</h4>
        //                 <p>Enter your Email to get our news updates</p>
        //                 <form action="" className="email-form">
        //                     <input type="text" className="txtb" placeholder="Enter Your Email"/>
        //                     <input type="submit" className="btn" value="submit"/>
        //                 </form>
        //             </div>
        //             <div className="single-footer">
        //                 <h4>contact us</h4>
        //                 <ul>
        //                     <li><a href=""><i className="fas fa-map-marker-alt"></i> North Street, Sydney, Australia</a></li>
        //                     <li><a href=""><i className="fas fa-mobile-alt"></i> +88 0123 456 789</a></li>
        //                     <li><a href=""><i className="far fa-envelope"></i> info@demo.com</a></li>
        //                     <li><a href=""><i className="fas fa-globe-europe"></i> www.demo.com</a></li>
        //                 </ul>
        //             </div>
        //             <div className="single-footer">
        //             <div className="map">
        //             <a href="https://maps.app.goo.gl/siYAXWiJ9TJnfn91A">
        //                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0564600467847!2d73.06360621496779!3d23.02169908495345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e6d757926c471%3A0xe3232aeabc8239c8!2sRamesh%20Brothers!5e0!3m2!1sen!2sin!4v1625589891932!5m2!1sen!2sin"  style={{width:"600", height:"450", border:0, allowfullscreen:"", loading:"lazy"}}></iframe>
        //                 {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29377.489843752923!2d73.05765097310908!3d23.016933431604734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e6d58936de175%3A0xb72304f8191d7c71!2sKapadvanj%2C%20Gujarat%20387620!5e0!3m2!1sen!2sin!4v1624594716063!5m2!1sen!2sin" style={{width:"350", height:"250", border:0, allowfullscreen:"", loading:"lazy"}}></iframe> */}
        //             </a>
        //             </div>
        //             </div>
        //         </div>
        //         <div className="copy">
        //             <p>&copy; 2021 all rights reserved</p>
        //         </div>
        //     </div>
        // </footer>
        //     </>
        <>
            <footer>
                <div class="content">
                    <div class="left box">
                        <div class="upper">
                            <div class="topic">About us</div>
                            <p>From 1979 till now Ramesh Brothers has served top quality products and has earned love and trust of its consumers.</p>
                        </div>
                        <div class="lower">
                            <div class="topic">Contact us</div>
                            <div class="phone">
                                <a href="https://wa.me/919099672704">+91 9099672704</a>
                            </div>
                            <div class="email">
                                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNsvKcrnNbmDtxXpChwxrPqMsrMhpMwmtdLWpdHNNnqbclMbfXlGpLjMgDDSvpcqZxptVB"><span style={{color: "#fff", textTransform: "lowercase"}}>kaushik_430@yahoo.com</span></a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="middle box">
                        <div class="topic">Our Services</div>
                        <div><a href="#">Web Design, Development</a></div>
                        <div><a href="#">Web UX Design, Reasearch</a></div>
                        <div><a href="#">Web User Interface Design</a></div>
                        <div><a href="#">Theme Development, Design</a></div>
                        <div><a href="#">Mobile Application Design</a></div>
                        <div><a href="#">Wire raming & Prototyping</a></div>
                    </div> */}
                    <div class="right box">
                        <div class="topic">Find us</div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0564600467847!2d73.06360621496779!3d23.02169908495345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e6d757926c471%3A0xe3232aeabc8239c8!2sRamesh%20Brothers!5e0!3m2!1sen!2sin!4v1625589891932!5m2!1sen!2sin" style={{ width: "600", height: "450", border: 0, allowfullscreen: "", loading: "lazy" }}></iframe>
                    </div>
                </div>
                <div class="bottom">
                    <p>Copyright ?? 2021 <a href="#">Ramesh Brothers</a> All rights reserved</p>
                </div>
            </footer>
        </>
    )
};

export default Footer;