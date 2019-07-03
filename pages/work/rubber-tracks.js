import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage } from "../../components/PortfolioItems/portfolio-items";

const portfolioData = {
  title: 'Converse Rubber Tracks Sample Library Case Study',
  companies: ['Indaba Music', 'Converse', 'Cornerstone'],
  description__intro: 'The Converse Rubber Tracks Sample Library is a first of its kind free, online content library for audio samples. Converse had started a community studio in Brooklyn, NY where bands could record in a professional studio for free.',
}

class RubberTracksPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  data = portfolioData;

  render() {
    return (
      <main>
        <Header />
        <PortfolioHeader 
          title={this.data.title}
          companies={this.data.companies} />
        <PortfolioDescription
          description={this.data.description__intro} />
      </main>
    );
  }
}

export default RubberTracksPage;