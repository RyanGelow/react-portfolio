import React, { Component } from 'react';
import axios from 'axios';

export default class ContactForm extends Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	name: "",
  	email: "",
  	message:""
	}
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    
     this.setState({name: "", email: "", message: ""})
  }
  
  render() {
    let resumeData = this.props.resumeData;
	  return(
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
            Feel free to contact me about my work or with any questions!
            </p>
          </div>
        </div>
        <div className="ContactForm row">
          <form id="contact-form" className="twelve columns" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control" rows="3" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in:&nbsp;
                  <a href={"https://www.linkedin.com/in/"+resumeData.linkedinId}>
                  {resumeData.linkedinId}
                  </a>
                </h4>
              </div>
            </aside>
          </div>
      </section>
	  );
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}