import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import PortfolioItem from "../../components/PortfolioItem/portfolio-item";

const portfolioData = {
  title: 'Converse Rubber Tracks Sample Library Case Study',
  companies: ['Indaba Music', 'Converse', 'Cornerstone'],
  description__intro: 'The Converse Rubber Tracks Sample Library was a first of its kind free, online content library for audio samples. Converse had started a community studio in Brooklyn, NY where bands could record in a professional studio for free.',
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
        <PortfolioItem data={this.data} />
      </main>
    );
  }
}

export default RubberTracksPage;