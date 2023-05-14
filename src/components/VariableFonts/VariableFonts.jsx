import React from "react";
import {Link} from "react-router-dom"
class VariableFonts extends React.Component{
    render(){
        return(
            <div className="VariableFonts_Container">
                <div className="VariableFonts_Content">
                    <div className="VariableFonts_Main">
                        <div className="VariableFonts_Main_Text" data-aos="flip-down" data-aos-offset="100"  data-aos-duration="1500">
                            <span>OpenType features and Variable fonts</span>
                        </div>

                        <div className="VariableFonts_Main_Btn" data-aos="fade-up" data-aos-offset="100"  data-aos-duration="1500">
                        <Link to='/Register' >
                                    Try For Free
                        </Link>
                        </div>

                        
                    </div>
                    <div className="VariableFonts_Img12">
                        
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default VariableFonts