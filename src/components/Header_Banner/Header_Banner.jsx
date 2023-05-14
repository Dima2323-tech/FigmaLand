import React from "react";
import mockup from "../../img/screens.png"
import {Link} from 'react-router-dom'

class Header_Banner extends React.Component{
    constructor(props){
        super(props);
        this.scroll = this.scroll.bind(this)
    }
    render(){
        return(
                <div className="Header_Banner_Container">
                    <div className="Header_Banner_Content">
                        <div className="Header_Banner_Label" data-aos="fade-left"  data-aos-duration="1500">
                            <span>Work at the speed of thought</span>
                        </div>

                        <div className="Header_Banner_UnderBannerText" data-aos="fade-right" data-aos-duration="1500">
                            <span>Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</span>
                        </div>

                        <div className="Header_Bunner_BtnS" data-aos="fade-up"  data-aos-duration="1500">
                            
                                <Link to="/Login" className="btn">
                                    <span>Try For Free</span>
                                </Link >
                            
                            <button onClick={this.scroll}>
                                <span>Learn More</span>
                            </button>
                        </div>

                        <div className="Header_Bunner_Mockup" data-aos="fade-left" data-aos-offset="600" data-aos-duration="1500">
                            
                                <img src={mockup} />
                        </div>
                    </div>
                </div>
        )
    }
    scroll(){
        let container = document.querySelector(".Gallery_Container")
        container.scrollIntoView({behavior : "smooth" , block: "center"})
    }
}

export default Header_Banner