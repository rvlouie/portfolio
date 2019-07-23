import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioLink, PortfolioList, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Stories and Companion Packs',
    companies: ['Splice'],
    status: ['Shipped'],
    link: 'https://splice.com/sounds/splice/the-fantastic-sounds-of-jay-dee-aka-j-dilla/story',
    role: 'Product design, sprint facilitation, user research',
    problem: 'Sample pack narratives were limited to pack descriptions and did not allow for the insertion of media or associations with other packs.',
    value: 'Adding narrative and connectedness to sample packs would increase content immersion making.'
  },
  description__intro: `In August of 2018 we decided to run a Google Venture design sprint around "Artist Identity." Besides learning that it is a bad idea to both be the facilitator, do the recruit, implement the prototype and run the user interviews, myself and the team learned a lot.`,
  description__intro2: `Our stated long term goal was: "Represent content so that providers feel empowered and consumers feel inspired." We wanted to add an authentic value to both sides of the 2 sided marketplace. Here's a summary:`,
  link__artistSprint: {
    url: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563912938/portfolio/decks/e4jtukpa3iz9ydoud2b7.pdf',
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
      `Companion packs and stories are now regularly used by the content and marketing teams to tell narratives around content.`,
      `GV sprints are 100% worth the week of time if you can afford to block out half an iteration with your team.`,
      `I think that companion packs should also link back to the main story. There was a missed opportunity to further fortify the relationship between the story and the companion packs.`,
      `Due to some tech debt, this feature is logged in only. A next iteration should be available logged out so that we can drive user sign ups through a CTA and drive more SEO value for the entire platform. This problem is compounded because it's not the greatest experience to have to go one click in from a pack to get to its story, ideally we should drive people directly to the story.`,
      `Stories should be expanded beyond packs and be attachable to any piece of content across the Splice platform (and in turn have any piece of Splice content attachable to a story), and added to the ontology. Long tail, stories can replace the external blog and bring editorial in-house.`,
      `Companion packs were built bespoke for one purpose where in the data model companion packs must have a parent pack. This should be abstracted out so that arbitrary packs can be grouped agnostic to hierarchy (for example, multiple volumes in a pack series).`,
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