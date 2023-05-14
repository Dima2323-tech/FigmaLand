import React from "react";
import avatar from "../../img/avatar.png"
import avatar1 from "../../img/avatar1.png"
import avatar2 from "../../img/avatar2.png"
import avatar3 from "../../img/avatar3.png"
class Testimonials extends React.Component{
    render(){
        return(
            <div className="Testimonials_Container">
                <div className="Testimonials_Content">
                    <div className="Testimonials_Heading" data-aos="fade-down" data-aos-offset="100"  data-aos-duration="1500">
                        <span>Testimonials</span>
                    </div>

                    <div className="Testimonials_Cards">
                        <div className="Testimonials_Card card_test" data-aos="fade-right" data-aos-offset="200"  data-aos-duration="1000">
                            <div className="Testimonials_Card_Heading" >
                                <div className="Testimonials_Card_Heading_Img">
                                    <img src={avatar} alt=""/>
                                </div>

                                <div className="Testimonials_Card_Heading_Text">
                                    <div className="Testimonials_Card_Heading_Text_Name">
                                        <span>Claire Bell</span>
                                    </div>
                                    <div className="Testimonials_Card_Heading_Text_Proffesion">
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>

                            <div className="Testimonials_Card_Text" >
                                <span>
                                    Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                                </span>
                            </div>

                        </div>

                        <div className="Testimonials_Card card_test_1" data-aos="fade-left" data-aos-offset="400"  data-aos-duration="1000">
                            <div className="Testimonials_Card_Heading">
                                <div className="Testimonials_Card_Heading_Img">
                                    <img src={avatar1} alt=""/>
                                </div>

                                <div className="Testimonials_Card_Heading_Text">
                                    <div className="Testimonials_Card_Heading_Text_Name">
                                        <span>Francisco Lane</span>
                                    </div>
                                    <div className="Testimonials_Card_Heading_Text_Proffesion">
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Testimonials_Card_Text">
                                <span>
                                    Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                                </span>
                            </div>
                        </div>

                        <div className="Testimonials_Card card_test_2" data-aos="fade-right" data-aos-offset="300"  data-aos-duration="1000">
                            <div className="Testimonials_Card_Heading">
                                <div className="Testimonials_Card_Heading_Img">
                                    <img src={avatar2} alt=""/>
                                </div>

                                <div className="Testimonials_Card_Heading_Text">
                                    <div className="Testimonials_Card_Heading_Text_Name">
                                        <span>Ralph Fisher</span>
                                    </div>
                                    <div className="Testimonials_Card_Heading_Text_Proffesion">
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Testimonials_Card_Text">
                                <span>
                                    Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                                </span>
                            </div>
                        </div>

                        <div className="Testimonials_Card card_test_3" data-aos="fade-left" data-aos-offset="500"  data-aos-duration="1000">
                            <div className="Testimonials_Card_Heading">
                                <div className="Testimonials_Card_Heading_Img">
                                    <img src={avatar3} alt=""/>
                                </div>

                                <div className="Testimonials_Card_Heading_Text">
                                    <div className="Testimonials_Card_Heading_Text_Name">
                                        <span>Jorge Murphy</span>
                                    </div>
                                    <div className="Testimonials_Card_Heading_Text_Proffesion">
                                        <span>Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="Testimonials_Card_Text">
                                <span>
                                    Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.your financial goal for the month and year.
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Testimonials