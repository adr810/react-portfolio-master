import React, { Component } from "react";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <center>
          <a href={`mailto:${resumeData.email}`}>
            <i class="fa fa-4x fa-envelope email-fa"></i>
          </a>
          <br></br>
          <br></br>
          <h3>Entre em contato por email</h3>
          <br></br>
          <a href={`mailto:${resumeData.email}`}>{resumeData.email}</a>
        </center>
      </section>
    );
  }
}
