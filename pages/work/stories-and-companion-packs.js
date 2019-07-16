import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioLink, PortfolioList, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Stories and Companion Packs',
    companies: ['Splice'],
    status: ['Shipped'],
    role: 'Product design, sprint facilitation, user research',
    problem: 'Sample pack narratives were limited to pack descriptions and did not allow for the insertion of media or associations with other packs.',
    value: 'Adding narrative and connectedness to sample packs would increase content immersion making.'
  },
  description__intro: `In August of 2018 we decided to run a Google Venture design sprint around "Artist Identity." Besides learning that it is a bad idea to both be the facilitator, do the recruit, implement the prototype and run the user interviews, myself and the team learned a lot.`,
  description__intro2: `Our stated long term goal was: "Represent content so that providers feel empowered and consumers feel inspired." We wanted to add an authentic value to both sides of the 2 sided marketplace. Here's a summary:`,
  link__artistSprint: {
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f27349ec-c7f6-4860-a5d7-2890c513c74f/Artist_Identity_Sprint.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45BGGJQEHD%2F20190716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190716T010741Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKtFVcRMAO3x24t49GXHAVd4WNbB53zVFlxJnyBzFeXAiADSSOraSCp4pqFEhea2I74LuN%2FsFxNMn%2Fk8CXbkU59GiraAwgfEAAaDDI3NDU2NzE0OTM3MCIMEi6SS9Aujz23fYm0KrcDSASz%2FRmXNv5sXJVOob%2BvVbjtNN4HFmQOvLokblRIkh0zqW8dMYQlH%2BLrYvhFTCx13MdaJF2feL4al5ucpeuAJdWldZjM17JRRk%2Bab%2FviMLoIdQFeBlww30Nrxa%2FbNu%2BNiglVoC8jfsa%2B66xQvks8XShaPwDvNK%2FOAk1gCk9hVkujaD%2FSu3VhfUljhuV2p%2FESV8ZDTL1eQp4vw%2BIBUzjx8FmM9WUZitPG9bdQ%2BCUkJZM7hY5tuCTA9e2l73x1sV5vfERbK9nLTYSPEiOAXuS%2BTpN0P9j1Nm%2BzDYxujfuqr0uaBMLXXnUcBVXKFN1hVmZxVoFuumKeX82DxxTtx1ZyqdHDTffXzlx0KxuklHyVSPgCaoRF9tNxoasx4xTFBG%2BVi3RNmghmETytE%2BRloYzobVYF1NPDbK7mzcY6S5lGsWw48KWOpqSmQWSeRugUUaTOigV%2BbL%2BO8ZvZghcPd%2B5xLMbFxLEAWgzD2QZUHWKjAj%2F%2FV34%2BWmBEFf52Y%2BwjiGSxb%2B7rKOaMgSmN0jOPElAV8b%2BG3HcOzcAYUI6AbCuwaN8NsZDiZ842xiTnDLzpiZOszIJDiWw8XDD07LPpBTq1Ad1D2N4A2zJq8jTPTMAUqrGudSJ7BDqn40KmKlHaXcMcvo89EzcAfV80H%2BI%2FFWIy38GvmVdPVFGoJcTbX7%2F35bJrPRzPniTF5d79Y2C7D34Jk%2Fv%2F0kJH1OU4s11WcpqIy3Amen%2BqRlF3Qw9%2BF12BN3UVMdaMv7snVv%2F0YHBFr3RX3hFaSXZ0fWWrlIsujTVoi9VImFbBZYEk5Q5KeHXiw9khjH6VKzc3TkZH19DmoBbz6j9TP7A%3D&X-Amz-Signature=a5025012c9698916475395583325c0df742a6d8f627c5f18f49c4a6b558822da&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Artist%2520Identity%2520Sprint.pdf%22',
    name: 'Artist Identity Sprint.pdf'
  }, 
  description__intro3: `We wound up building and prototyping new content pages that used content created by the artist themselves to tell a story.`,
  image__sprintOverview: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203608/portfolio/stories/cskp7tiaxh0nxvnzkeue.png',
  description__listIntro: `While interviewing users on the last day we learned a few key things:`,
  list__artistSprint: [
    `People are inspired by stories about how content is made, so show don't tell.`,
    `Artists want to tell the story behind their work and producers are eager to hear it.`,
    `The features that hit the hardest were telling the story of an artists process, rather than a story of the artist themselves.`
  ],
  description__dillaIntro: `Acutely, we were launching a campaign with J Dilla that was time sensitive. It seemed like a good time to push a slightly larger in scope project and inject some of our learnings from the artist sprint into the product. Our solution was, of course, story pages.`,
  image__dillaPage: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203608/portfolio/stories/pio58o9ccsxdoh3qt2vj.png',
  description__dilla1: `I had presented several concepts for handling story telling on packs pages, from a video in the header, to a modal experience, through putting stories on their own page. My preferred design solution was to put the story on its own page and also create a model in the database that wasn't tethered exclusively to packs so that the module could be reused in the future; this approach had broad cross-functional consensus.`,
  desciption__dilla2: `A particular challenge with this design was the navigation and sense of place between the main pack, story and companion packs. Another designer and I collaborated on the IA and visual design.`,
  image__navigationFlow: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203607/portfolio/stories/oscqgzlpfk5rrmrc28kq.png',
  description__mainPack: `The main pack navigation leads you to both the story and the individual companion packs.`,
  image__mainPack: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203608/portfolio/stories/yeajqpkla1gh02ztxvqz.png',
  description__companionPack: `We opted for context headers on the story and the companion packs that lead you back to the main pack. And each companion pack could lead you to another companion pack.`,
  image__companionPack: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203608/portfolio/stories/xrbj5n7q4yragtwrs9yg.png',
  description__packsConclusion: `On story pages, companion packs have their own module, closing the loop.`,
  description__conclusion: `Implementation and launch of this feature went very smoothly. I attribute this to involving a large portion of the team in the original sprint, iterating off of the work done during the sprint, getting early cross-functional consensus around the feature to be built for a specific campaign, and an effective design collaboration that afforded multiple sets of eyes on the nitty gritty details.`,
  footerData: {
    learnings: [
      "One thing missing here is an admin for the knowledge graph. There are screens and a prototype for this, but before implementing them they'd need to be updated and fit for purpose.",
      "More graph! Graph all the things! Now that we know institutionally how to put nodes and edges into production, we should scale this out as far as we can, starting with migrating all the existing tags into nodes and starting to create connections that the search infrastructure, ML team, and all product verticals can consume and build around."
    ],
    related: [
      {
        relatedTitle: 'Marketplace Connections',
        relatedLink: '/work/marketplace-connections'
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
        <PortfolioDescription
          description={this.data.description__intro2} />
        <PortfolioLink 
          link={this.data.link__artistSprint} />
        <PortfolioDescription
          description={this.data.description__intro3} />  
        <PortfolioImage 
          imageUrl={this.data.image__sprintOverview} />
        <PortfolioDescription
          description={this.data.description__listIntro} />  
        <PortfolioList 
          list={this.data.list__artistSprint} />
        <h4 className="work-item__main-section work-item__header">J Dilla: Pack Stories, Companion Packs</h4>
        <PortfolioDescription
          description={this.data.description__dillaIntro} />  
        <PortfolioImage 
          imageUrl={this.data.image__dillaPage} />        
        <PortfolioDescription
        description={this.data.description__dilla1} />        
        <PortfolioDescription
        description={this.data.description__dilla2} />        
        <PortfolioImage 
          imageUrl={this.data.image__navigationFlow} />  
        <PortfolioDescription
        description={this.data.description__mainPack} />        
        <PortfolioImage 
          imageUrl={this.data.image__mainPack} />  
        <PortfolioDescription
        description={this.data.description__companionPack} />        
        <PortfolioImage 
          imageUrl={this.data.image__companionPack} />  
        <PortfolioDescription
        description={this.data.description__packsConclusion} />  
        <PortfolioDescription
        description={this.data.description__conclusion} />  

        <PortfolioFooter 
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPage;