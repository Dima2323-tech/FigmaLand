import React from "react";
import  card from "../../img/Card.png"
import  card1 from "../../img/Card-1.png"
import  card2 from "../../img/Card-2.png"
import  card3 from "../../img/Card-3.png"
import  card4 from "../../img/Card-4.png"
import  card5 from "../../img/Card-5.png"
import  card6 from "../../img/Card-6.png"
class Gallery extends React.Component{
    render(){
        return(
            <div className="Gallery_Container">
                <div className="Gallery_Content">
                    <div className="Gallery_Heading">

                        <div className="Gallery_Heading_Label" data-aos="fade-down" data-aos-offset="100"  data-aos-duration="1500">
                            <span>Gallery</span>
                        </div>

                        <div className="Gallery_Heading_Text" data-aos="fade-left" data-aos-offset="110"  data-aos-duration="1500">
                            <span>
                                We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                            </span>
                        </div>

                        <div className="Gallery_Main">
                            <div className="Gallery_Main_Photo card" data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500">
                                <img src={card} alt=""/>
                            </div>

                            <div className="Gallery_Main_Photo card1" data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500">
                                <img src={card1} alt=""/>
                            </div>

                            <div className="Gallery_Main_Photo card2" data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500">
                                <img src={card2} alt=""/>
                            </div>

                            <div className="Gallery_Main_Photo card3" data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500">
                                <img src={card3} alt=""/>
                            </div>

                            <div className="Gallery_Main_Photo card4" data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500">
                                <img src={card4} alt=""/>
                            </div>

                            <div className="Gallery_Main_Photo card5" data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500">
                                <img src={card5} alt=""/>
                            </div>

                            <div className="Gallery_Main_Photo card6" data-aos="zoom-in" data-aos-offset="200"  data-aos-duration="1500">
                                <img src={card6} alt=""/>
                            </div>
                        </div>

                        <div className="Gallery_Btn" data-aos="fade-up" data-aos-offset="100"  data-aos-duration="1500" >
                            <button type="submit">
                                <span>See more</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gallery