import React from "react";
import appstore from "../../img/appstore.png"
import apiary from "../../img/logos_apiary.png"
import android from "../../img/logos_android-icon.png"
import basecamp from "../../img/logos_basecamp.png"
import bnb from "../../img/logos_airbnb.png"
import imb from "../../img/logos_ibm.png"
class Parthners extends React.Component{
    render(){
        return(
            <div className="Parthners_Container">
                <div className="Parthners_Content">
                    <div className="Parthners_Heading">
                        <div className="Parthners_Heading_Label" data-aos="fade-down" data-aos-offset="100"  data-aos-duration="1500">
                            <span>Partners</span>
                        </div>

                        <div className="Parthners_Heading_Text" data-aos="fade-left" data-aos-offset="110"  data-aos-duration="1500">
                            <span>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</span>
                        </div>
                    </div>

                    <div className="Parthners_Logos">
                        <div className="Parthners_Logo" data-aos="fade-up" data-aos-offset="150"  data-aos-duration="1000">
                            <img src={appstore} alt=""/>
                        </div>

                        <div className="Parthners_Logo" data-aos="fade-down" data-aos-offset="150"  data-aos-duration="1300">
                            <img src={apiary} alt=""/>
                        </div>

                        <div className="Parthners_Logo" data-aos="fade-up" data-aos-offset="150"  data-aos-duration="1600">
                            <img src={android} alt=""/>
                        </div>

                        <div className="Parthners_Logo" data-aos="fade-down" data-aos-offset="150"  data-aos-duration="1900">
                            <img src={basecamp} alt=""/>
                        </div>

                        <div className="Parthners_Logo" data-aos="fade-up" data-aos-offset="150"  data-aos-duration="2200">
                            <img src={bnb} alt=""/>
                        </div>

                        <div className="Parthners_Logo" data-aos="fade-down" data-aos-offset="150"  data-aos-duration="2500">
                            <img src={imb} alt=""/>
                        </div>
                    </div>

                    <div className="Parthners_Btn" data-aos="fade-up" data-aos-offset="100"  data-aos-duration="1500">
                        <button type="submit">
                            All Parthners
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Parthners