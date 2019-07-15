import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Marketplace Connections',
    companies: ['Splice'],
    status: ['In progress'],
    role: 'Product design, knowledge graph/ontology development ',
    problem: 'Splice Sounds had no metadata interconnectedness. It was the Converse Rubber Tracks metadata issue all over again x 100. Further, tech debt around this had brought certain queries to a crawl. The only mitigation was through search infrastructure.',
    value: 'Besides tech debt, construction an ontology/knowledge graph would bring tons of user value, allowing the company to reason about the world of recorded music and its relation to the product offering. It would also provide tools that would allow designers and PMs to create n products from the graph, and to fold in machine learning.'
  },
  description__intro: "When the project was green-lit, there really wasn't anything like it in the music space. There were some comps to learn from, like stock image sites and Beatport, but each of those came with a caveat—for example, with stock image sites there was lack of personalization; and with Beatport, while it had robust organizing principles, for musical content categorization it was based in full tracks and musical genres instead of musical component sounds.",
  image__converseOverview: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203541/portfolio/converse_v1/ee3lh7a1mrsywq7tfgl5.png',




  footerData: {
    learnings: [
      "One thing missing here is an admin for the knowledge graph. There are screens and a prototype for this, but before implementing them they'd need to be updated and fit for purpose.",
      "More graph! Graph all the things! Now that we know institutionally how to put nodes and edges into production, we should scale this out as far as we can, starting with migrating all the existing tags into nodes and starting to create connections that the search infrastructure, ML team, and all product verticals can consume and build around."
    ],
    related: [
      {
        relatedTitle: 'Stories and Companion Packs',
        relatedLink: '/work/stories-and-companion-packs'
      }  
    ]
  }
}

class RubberTracksPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  data = converseV1Data;

  render() {
    return (
      <main>
        <Header />
        <PortfolioHeader 
          headerData={this.data.headerData} />
        <h4 className="work-item__main-section work-item__header  ">Project Description</h4>
        <PortfolioDescription
          description={this.data.description__intro} />
        <PortfolioImage 
          imageUrl={this.data.image__converseOverview} />
        <PortfolioDescription
          description={this.data.description__wireframes} />
        <PortfolioImage 
          imageUrl={this.data.image__fakeWireframes} />
        <div className="work-item__image-section">
          <PortfolioImage 
            imageUrl={this.data.image__packDetails} />
          <div className="work-item__image-description">
            <PortfolioDescription
              description={this.data.description__packDetails1} />
            <PortfolioDescription
              description={this.data.description__packDetails2} />
          </div>
        </div>
        <div className="work-item__image-section">
          <div className="work-item__image-description">
            <PortfolioDescription
              description={this.data.description__packGallery1} />
            <PortfolioDescription
              description={this.data.description__packGallery2} />
          </div>
          <PortfolioImage 
            imageUrl={this.data.image__packGallery} />
        </div>
        <PortfolioDescription
          description={this.data.description__browse} />
        <PortfolioImage 
          imageUrl={this.data.image__packRows} />
        <PortfolioDescription
          description={this.data.description__conclusion} />
        <PortfolioFooter 
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPage;