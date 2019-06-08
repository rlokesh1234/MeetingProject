import React, {Component} from 'react';
import PSPDFKIT from './components/pspdfkit';



class PspdfKit extends Component{
    constructor(props){
        super();
        this.state = {
            pdf: "example.pdf"
          };
    }
    render(){
        return(
            <div className="kit" style=
            {{
                flex:1,
                position:'relative'
            }}>
                  <PSPDFKIT pdfurl={this.state.pdf}/>  
            </div>
        )
    }
}

export default PspdfKit