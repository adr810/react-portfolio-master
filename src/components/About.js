import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>Sobre mim</h2>
            <p>{resumeData.aboutme}</p>

            <div className="row">
              <div className="columns contact-details">
                <h2>Detalhes para contato</h2>
                <p className="address">
                  <h5>
                    <span>{resumeData.name}</span>
                  </h5>
                  <span>{resumeData.address}</span>
                  <br></br>
                  <br></br>
                  <a href={`https://${resumeData.website}`}>
                    <i class="fa fa-link"></i>
                    {resumeData.website}
                  </a>
                  <br></br>
                  <a href={`mailto:${resumeData.email}`}>
                    <i class="fa fa-envelope"></i>
                    {resumeData.email}
                  </a>
                </p>

                <a class="button resume" href={resumeData.resumelink}>
                  <i class="fa fa-download"></i>Resumo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
