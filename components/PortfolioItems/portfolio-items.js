import { Component } from "react";
import Link from "next/link";

class PortfolioHeader extends Component {

  render() {
    return (
      <div className="work-item__main-section">
        <section className="work-item__header">
          <h3>
            {this.props.headerData.title}
          </h3>
          {
            this.props.headerData.companies &&
            <h4 className="work-item__companies">{this.props.headerData.companies.map((company, index) => <span key={index.toString()}>{(index ? ', ' : '') + company}</span>)}</h4>
          }
          {
            this.props.headerData.status &&
            <div className="work-item__status">
              {
                this.props.headerData.status.map(status => <span className="work-item__status-item">{status}</span>)
              }
              {
                this.props.headerData.link &&
                <a className="work-item__status-link" href={this.props.headerData.link}>{this.props.headerData.link}</a>
              }
            </div>
          }
          {
            this.props.headerData.video &&
            <iframe className="work-item__video" src={this.props.headerData.video} frameBorder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          }
          {
            this.props.headerData.role &&
            <div className="work-item__section">
              <h4 className="work-item__header">My Role</h4>
              <span>{this.props.headerData.role}</span>
            </div>
          }
          {
            this.props.headerData.problem &&
            <div className="work-item__section">
              <h4 className="work-item__header">Problem</h4>
              <div className="work-item__description">{this.props.headerData.problem}</div>
            </div>
          }
          {
            this.props.headerData.value &&
            <div className="work-item__section">
              <h4 className="work-item__header">User Value, Stakeholder Value</h4>
              <div className="work-item__description">{this.props.headerData.value}</div>
            </div>
          }
        </section>
      </div>
    );
  }
}

class PortfolioDescription extends Component {

  render() {
    return (
      <div className="work-item__main-section">
        <section className="work-item__section">
          <p className="work-item__description">{this.props.description}</p>
        </section>
      </div>
    );
  }

}

class PortfolioImage extends Component {

  render() {
    return (
      <div className="work-item__image-container">
        <img className="work-item__image" src={this.props.imageUrl} /> 
      </div>
    );
  }

}

class PortfolioFooter extends Component {

  render() {
    return (
      <div className="work-item__main-section">
        <section className="work-item__footer">
          {
            this.props.footerData.learnings &&
            <div className="work-item__section">
              <h4 className="work-item__header">Learnings? Next iterations? What did we miss?</h4>
              <ul className="work-item__list">
                {
                  this.props.footerData.learnings.map(learning => 
                    <li className="work-item__list-item">{learning}</li>)
                }
              </ul>
            </div>
          }
          {
            this.props.footerData.related && 
            <div className="work-item__section">
              <h4 className="work-item__header">Related projects</h4>
              <div className="work-item__related-links">
                {
                  this.props.footerData.related.map(related => 
                    <Link href={related.relatedLink}>
                      <a className="work-item__related-link">{related.relatedTitle}</a>
                    </Link>
                    )
                }
              </div>
            </div>
          }
        </section>
      </div>
    );
  }
}

export {
  PortfolioHeader,
  PortfolioDescription,
  PortfolioImage,
  PortfolioFooter
}