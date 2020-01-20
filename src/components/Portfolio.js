import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Featured Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <a href={item.livelink} target="_blank">
                    <div className="item-wrap">
                      <img src={item.imgurl} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                          <br/>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })
          }
          </div>
          <h1>Hover over for brief summary and click to explore live.</h1>
        </div>
      </div>
  </section>
        );
  }
}