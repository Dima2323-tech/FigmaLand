import React from "react";
import FeaturePhoto from "../../img/FeaturesPhoto.png"
import {GiKnifeFork} from "react-icons/gi"
import {RiAliensFill} from "react-icons/ri"
import {BiInfinite} from "react-icons/bi"
class Features extends React.Component{
    render(){
        return(
            <div className="Feature_Container">
                <div className="Feature_Content">
                    <div className="Feature_Heading">
                        <div className="Feature_Label" data-aos="fade-down" data-aos-offset="100"  data-aos-duration="1500">
                            <span>FEATURES</span>
                        </div>

                        <div className="Feature_Text" data-aos="fade-right" data-aos-offset="150"  data-aos-duration="1500">
                            <span>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</span>
                        </div>
                    </div>

                    <div className="Feature_Main">
                        <div className="Feature_Main_Photo" data-aos="zoom-in" data-aos-offset="250"  data-aos-duration="2000">
                            <img src={FeaturePhoto}/>
                        </div>

                        <aside className="Feature_Main_Aside">

                            {/* Single Source */}
                            <div className="Feature_Main_Aside_Part Source" data-aos="fade-left" data-aos-offset="350"  data-aos-duration="1500">

                                <div className="Feature_Main_Aside_Part_Heading">
                                    <GiKnifeFork className="icon"/>
                                    <span>A single source of truth</span>
                                </div>

                                <div className="Feature_Main_Aside_Part_Text">
                                    <span>When you add work to your Slate calendar we automatically calculate useful insights </span>
                                </div>
                            </div>

                            {/* Alien */}
                            <div className="Feature_Main_Aside_Part Source" data-aos="fade-left" data-aos-offset="250"  data-aos-duration="1500">
                                <div className="Feature_Main_Aside_Part_Heading">
                                    <RiAliensFill className="icon"/>
                                    <span>Intuitive interface</span>
                                </div>

                                <div className="Feature_Main_Aside_Part_Text">
                                    <span>When you add work to your Slate calendar we automatically calculate useful insights </span>
                                </div>

                            </div> 

                            {/* Infinity */}
                            <div className="Feature_Main_Aside_Part Source" data-aos="fade-left" data-aos-offset="250"  data-aos-duration="1500">

                                <div className="Feature_Main_Aside_Part_Heading">
                                    <BiInfinite className="icon"/>
                                    <span>Or with rules</span>
                                </div>

                                <div className="Feature_Main_Aside_Part_Text">
                                    <span>When you add work to your Slate calendar we automatically calculate useful insights </span>
                                </div>

                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        )
    }
}

export default Features