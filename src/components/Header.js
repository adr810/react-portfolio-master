import React, { Component } from "react";
import Particles from "react-particles-js";
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <header id="home">
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "70vh",
            }}
          >
            <Particles
              params={{
                particles: {
                  number: {
                    value: 70,
                    density: {
                      enable: true,
                      value_area: 1500,
                    },
                  },
                  size: {
                    value: 4,
                  },
                },
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "70vh",
                marginTop: "20vh",
              }}
            >
              <nav id="nav-wrap">
                <a
                  className="mobile-btn"
                  href="#nav-wrap"
                  title="Show navigation"
                >
                  Show navigation
                </a>
                <a className="mobile-btn" href="#" title="Hide navigation">
                  Hide navigation
                </a>
                <ul id="nav" className="nav">
                  <li className="current">
                    <a className="smoothscroll" href="#home">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#about">
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#resume">
                      Resumo
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#portfolio">
                      Projetos
                    </a>
                  </li>
                  <li>
                    <a className="smoothscroll" href="#contact">
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
              {/* <div id="home-banner"> */}
              {/* <Particles /> */}
              <div className="row banner">
                <div className="banner-text">
                  <h1 className="responsive-headline">
                    Olá, eu sou o {resumeData.name}
                  </h1>
                  <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                     {resumeData.role}.{resumeData.roleDescription}
                  </h3>
                  <hr />
                  <ul className="social">
                    {resumeData.socialLinks &&
                      resumeData.socialLinks.map((item) => {
                        return (
                          <li key={item.name}>
                            <a href={item.url} target="_blank">
                              <i className={item.className}></i>
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
              {/* </div> */}

              <p className="scrolldown">
                <a className="smoothscroll" href="#about">
                  <i className="icon-down-circle"></i>
                </a>
              </p>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
