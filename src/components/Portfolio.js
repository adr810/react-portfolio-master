import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Veja alguns de meus projetos.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <a
                          href={`${item.link}`}
                          target="_blank"
                          onClick={() => {
                            window.open(item.link, "_blank");
                          }}
                        >
                          <img src={`${item.imgurl}`} className="item-img" />
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <a href={`${item.link}`} target="_blank">
                                <h5>{item.name}</h5>
                              </a>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="project-links">
                        {item.sourcecode && (
                          <a href={`${item.sourcecode}`} target="_blank">
                            <i
                              class="fa fa-2x fa-github"
                              aria-hidden="true"
                            ></i>
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
