import { Component } from "react";

class PortfolioItem extends Component {

  render() {
    return (
      <div>
        <section className="work-item__header">
          <h3>
            {this.props.data.title}
          </h3>
          <h4 className="work-item__companies">{this.props.data.companies.map((company, index) => <span key={index.toString()}>{(index ? ', ' : '') + company}</span>)}</h4>
        </section>
        {
          this.props.data.description__intro &&
          <section className="work-item__section">
            <p className="work-item__description">{this.props.data.description__intro}</p>
          </section>
        }
        {
          this.props.data.description__image &&
          <section className="work-item__section">
            <p className="work-item__description">{this.props.data.description__intro}</p>
          </section>
        }
      </div>
    );
  }

}

export default PortfolioItem;