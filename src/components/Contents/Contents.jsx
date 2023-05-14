import React from "react";
import macbook from "../../img/Macbook.png"
import boards from "../../img/Boards.png"
import {Link} from "react-router-dom"
class Contents extends React.Component{

    render(){
        return(
            <div className="Contents_Container">
                <div className="Contents_Content">
                    <div className="Contents_Heading">
                            <div className="Contents_Heading_Label" data-aos="fade-down" data-aos-offset="200"  data-aos-duration="1500">
                                <span>Contents</span>
                            </div>

                            <div className="Contents_Heading_Text" data-aos="fade-right" data-aos-offset="250"  data-aos-duration="1500">
                                <span>
                                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                                </span>
                            </div>
                    </div>
                       
                    <div className="Contents_Cards">
                        <div className="Contents_Card Work" data-aos="fade-right" data-aos-offset="600"  data-aos-duration="1000">
                            <div className="Contents_Card_Heading" >

                                <div className="Contents_Card_Heading_Label" data-aos="fade-down" data-aos-offset="550"  data-aos-duration="2000">
                                    <span>Work</span>
                                </div>

                                <div className="Contents_Card_Heading_Text" data-aos="fade-right" data-aos-offset="500"  data-aos-duration="2000">
                                    <span>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</span>
                                </div>
                                
                            </div>

                            <div className="Contents_Card_Btn Work_Btn" data-aos="fade-right" data-aos-offset="400"  data-aos-duration="2000">
                                <Link to="/Login">
                                    Sign In
                                </Link>
                            </div>

                            <div className="Contents_Card_Img" data-aos="zoom-in" data-aos-offset="250"  data-aos-duration="2000">
                                <img src={macbook}/>
                            </div>
                        </div>

                        <div className="Contents_Card Data" data-aos="fade-left" data-aos-offset="600"  data-aos-duration="1000">
                            <div className="Contents_Card_Heading">

                                <div className="Contents_Card_Heading_Label" data-aos="fade-down" data-aos-offset="550"  data-aos-duration="2000">
                                    <span>Design with real data</span>
                                </div>

                                <div className="Contents_Card_Heading_Text" data-aos="fade-left" data-aos-offset="500"  data-aos-duration="2000">
                                    <span>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</span>
                                </div>
                                
                            </div>

                            <div className="Contents_Card_Btn Data_Btn">
                                <Link to='/Register' type="submit" data-aos="fade-left" data-aos-offset="400"  data-aos-duration="2000">
                                    Try For Free
                                </Link>
                            </div>

                            <div className="Contents_Card_Img" data-aos="zoom-in" data-aos-offset="280"  data-aos-duration="2000">
                                <img src={boards}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Contents