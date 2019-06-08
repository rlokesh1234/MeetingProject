import React from 'react';
import PSPDFKIT from 'pspdfkit'

const baseUrl = `${window.location.protocol}//${window.location.host}/${
  process.env.PUBLIC_URL
}`;

export default class PSPDFKITComponent extends React.Component{

    componentDidMount(){
        PSPDFKIT.load({
            pdf:this.props.pdfurl,
            licenseKey:'lsIXoHfEZUsT7ap_71vHcRdbSZ-6o8Y-P3b0eQCfjbU8Iq32cuTkpnIQy4zDruHe9aa0bh4bvdU9hLNl4DVfq-N6DzVoMroXUKPAKTJy8CvC8AxzXiaDTHjiF_SURgbdE9MMxF3F6A5y244vRcV7pmq4URSKzptZdBd-kKjHVfQJgnSMQpRi-XXhwLL1LgZZ254IKwpMMCBjGpgfi_M7Cy9UV7rbDA782LyGEHVZP52TUzdF-Y6JiuvQkzFISjpF5Gt3TYn4aJSEvxKoDmhITH8yuWYchBKpObrYU4YCmdnJNvStk402XpzkqX4d3s9GfN1nQ0FeXshIHZgahmVVrYa-gx2mmGdE3H8gqIqkQzWlnZmF_LhPaE4lENcDxF9Qb58t4kU7PhyeKnE0Pfjj2B_EIeS42Kvpo17yCe1S-a73UWv7Fl0ju3BpJfzC5o2S',
            container:this.refs.container,
            baseUrl:baseUrl
        }).then(instance => {
            console.log("success",instance)
        }).catch(err =>{
            console.error(err.message);
            
        })
    }
    render(){
        return(
            <div ref="container" style=
            {{
                width:'100%',
                height:'100%',
                position:'absolute'
            }}/>

        )
    }
}