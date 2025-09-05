import { Component } from "react";
import Header from "../../components/Header/header";
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioLink, PortfolioList, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Admin Principles for Content Companies',
    companies: ['General', 'Indaba Music', 'Splice'],
    problem: 'Admins often get the short end of the stick and yet they power the content platforms for all of the media we consume. Part of the reason that internal tooling gets shorted is in the service of accelerating end user value by putting most development resources into the user-facing product and infrastructure.',
    value: `By focusing on creating a great experience for content administrators, we can drive user value by making the platform fully serviceable by its admin. Further, with upfront investment on internal tooling for each shipped project, we'll increase build velocity in the long run, increasing user value.`
  },
  description__intro: `There’s an axiom in the garment industry, “A garment should look as nice on the inside as on the outside.” Taken more abstractly, the craftsmanship of the support product should match the care put into the forward facing product. In software development, this is not always the case. A need to rush to market creates a “just make it work” mentality. Things are hacked in ad hoc. Patches are applied to tears. Eventually, however, as the application scales, it begins to come apart at the seams. The patches wither. The tears become irreparable holes. Details in the deck:`,
  link__artistSprint: {
    url: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563912929/portfolio/decks/gickitajqbfdjsweetre.pdf',
    name: 'Content Admin Principles.pdf'
  },
  footerData: {
    learnings: [
      `Making a platform fully serviceable lets that platform run on its own and either saves money or development cycles in the long run.`,
      `I would like to see this become a product and design principle more broadly; it's something that doesn't get talked about too much.`
    ],
    related: [
      {
        relatedTitle: 'Ampl Music',
        relatedLink: '/work/ampl-music'
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
        <h4 className="work-item__main-section work-item__header">Project Description</h4>
        <h4 className="work-item__main-section work-item__header work-item__header--sub-header">Sprint</h4>
        <PortfolioDescription
          description={this.data.description__intro} />
        <PortfolioLink
          link={this.data.link__artistSprint} />

        <PortfolioFooter
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPage;