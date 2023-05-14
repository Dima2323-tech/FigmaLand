import React from "react";
import {BsPhone , BsTwitter , BsFacebook , BsLinkedin , BsMap} from "react-icons/bs"

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="Footer_Content">
                    <div className="Footer_Nav">
                        <nav>
                            <ul className="Footer_Fingertipe">
                                <span className="Footer_Ul_Label">Fingertipe</span>
                                <li className="Footer_li_elem"><a href="#">Home</a></li>
                                <li className="Footer_li_elem"><a href="#">Example</a></li>
                                <li className="Footer_li_elem"><a href="#">Pricing</a></li>
                                <li className="Footer_li_elem"><a href="#">Updates</a></li>
                            </ul>

                            <ul className="Footer_Resources">
                                <span className="Footer_Ul_Label">Resources</span>
                                <li className="Footer_li_elem"><a href="#">Home</a></li>
                                <li className="Footer_li_elem"><a href="#">Example</a></li>
                                <li className="Footer_li_elem"><a href="#">Pricing</a></li>
                                <li className="Footer_li_elem"><a href="#">Updates</a></li>
                            </ul>

                            <ul className="Footer_Aboute">
                                <span className="Footer_Ul_Label">About</span>
                                <li className="Footer_li_elem"><a href="#">Home</a></li>
                                <li className="Footer_li_elem"><a href="#">Example</a></li>
                                <li className="Footer_li_elem"><a href="#">Pricing</a></li>
                                <li className="Footer_li_elem"><a href="#">Updates</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="Footer_AboutUs">
                        <div className="Footer_AboutUs_Location">
                            <div className="Footer_About_Location_Logo">
                                <BsMap className="icon_footer"/>
                            </div>

                            <div className="Footer_About_Location_Text">
                                <span>7480 Mockingbird Hill undefined </span>
                            </div>
                        </div>

                        <div className="Footer_AboutUs_Phone">
                            <div className="Footer_AboutUs_Phone_Logo">
                                <BsPhone className="icon_footer"/>
                            </div>

                            <div className="Footer_AboutUs_Phone_Text">
                                <span>(239) 555-0108</span>
                            </div>
                        </div>

                        <div className="Footer_AboutUs_Socials">
                            <div className="Footer_AboutUs_Socials_Logo">
                                <a href="#"><BsTwitter className="icon_footer"/></a>
                            </div>

                            <div className="Footer_AboutUs_Socials_Logo">
                                <a href="#"><BsFacebook className="icon_footer"/></a>
                            </div>

                            <div className="Footer_AboutUs_Socials_Logo">
                                <a href="#"><BsLinkedin className="icon_footer"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer