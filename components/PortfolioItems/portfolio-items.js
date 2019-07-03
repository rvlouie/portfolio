import { Component } from "react";

class PortfolioHeader extends Component {

  render() {
    return (
      <div>
        <section className="work-item__header">
          <h3>
            {this.props.title}
          </h3>
          {
            this.props.companies &&
            <h4 className="work-item__companies">{this.props.companies.map((company, index) => <span key={index.toString()}>{(index ? ', ' : '') + company}</span>)}</h4>
          }
        </section>
      </div>
    );
  }

}

class PortfolioDescription extends Component {

  render() {
    return (
      <div>
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
      <div>
        <section className="work-item__section">
          <p className="work-item__description">{this.props.description}</p>
        </section>
      </div>
    );
  }

}

export {
  PortfolioHeader,
  PortfolioDescription,
  PortfolioImage
}