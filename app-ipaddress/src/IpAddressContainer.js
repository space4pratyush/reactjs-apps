import React, {Component} from "react";


var xhr;

class IPaddressContainer extends Component{

    constructor(props){
        super(props);

        this.state={
            ip_address:"..."
        };
        this.processRequest=this.processRequest.bind(this);
    }

    componentDidMount(){
        xhr=new XMLHttpRequest();
        xhr.open("GET","http://localhost:8080/api/v1/employees/7", true);
        xhr.send();

        xhr.addEventListener("readystatechange", this.processRequest, false);
    }


    processRequest(){
        if(xhr.readyState===4 && xhr.status===200){
            var response=JSON.parse(xhr.responseText);

            this.setState({
                ip_address:response.emailId
            });
        }
    }

    render(){
        return(
        <div>{this.state.ip_address}</div>
        );
    }
}

export default IPaddressContainer;