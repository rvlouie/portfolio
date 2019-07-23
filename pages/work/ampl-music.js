import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Ampl Music',
    companies: ['Indaba Music'],
    status: ['Private Beta', 'Acquired'],
    role: 'Product designer, domain mapping/ontology, front-end (UI) implementation ',
    problem: `We'd proven that sample libraries hold a lot of value for music creators. However, since this content was royalty-free, the content creators and administrators didn't participate in the revenue stream. Also, in the traditional recorded music business, there was an acute feeling of "getting screwed" by labels, publishing companies and any other music business entity who could grab a piece of the pie. How might we leverage our experience with content creation, musical metadata and the music industry to create a fair platform for musical content creation.`,
    value: `By creating a platform that can deal with the complexity of the music business behind the scenes we can create value by connecting music producers and vocalists with pre-cleared content, helping users to feel secure that they won't be sued if they use it.`
  },
  description__intro: 'This project had several stages over a year and a half period. At a high level there was a process/workflow challenge, a data modeling and domain mapping challenge and 2 interface designs. We were able to parallelize the work by focusing on 2 distinct chunks. First, we focused on the data model, ingestion process and getting the data into the system while we were recording and prepping content. Second, while we iterated on the ingestion process and pipeline, we built out the user facing front end with real data, allowing us to check our assumptions about the data model against UI usability.',
  image__AmplPlatform: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/j3b2k19bqcfqqwk4awjw.png',
  description__ingestion: `We were actively recording and prepping content when we decided to take on this project, a hold over from the then fading Converse Sample Library. Since we had been prepping content in this way, that is, chopping up full length stems into smaller parts, we had a ton of learnings that would inform both the data model and the ingestion process.`,
  image__dawBreakdown: `https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/knrbchq4dl8ecsyfc6hj.png`,
  description__ingestion2: `Since we were prepping the content in house, we could start the ingestion process during the prepping of the content. There were 2 main things we did: First, we made sure to chop the sections in time. This allowed us to use BWF headers to get the "time reference low", which would allow us to do some math to group audio that was at the same place in the timeline (more on this later). Second, we iterated on a naming scheme that would be machine readable and would easily break down the files into stems, phrases and one shots. Utilizing Logic's internal naming scheme plus the batch audio processor Myriad and Apple's automator reduced the manual work that needed to be done.`,
  image__ingestionFlow: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/bd43axax0ibckn8v8yz9.png',
  description__audioTimeline: `In the Admin UI, there is a 1:1 map of the audio timeline, and each piece of audio has its own suite of data. While most of these fields were just strings, we wanted to create space for database fields that we might use in the future; For example, "pitches" and "lyrics".`,
  image__audioTimeline: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203525/portfolio/ampl_music/grm8miewin4syb4un43x.png',
  description__ingestionConclusion: `Since this was to be royalty bearing, we wanted to keep track, as transparently as possible, who did what in each session. One of the ways we did this was with a shared schema between the DB and the front-end. Engineering's choice of tech stack, Datomic and Clojure, made it easy to reason about the ontology.`,
  image__knowledgeGraph: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203525/portfolio/ampl_music/v5elwrwe6d5uesgmf8cx.png',
  description__knowledgeGraph: `The admin is a reflection of this graph. At the top level it, was first organized by sessions (and later by artist as well). Each session contains all of the metadata about the session.`,
  image__adminIa: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/jw9dnsaj0edzbgwfzinl.png',
  description__music: `The meat of the session metadata is in the "music" tab. Here, each song is listed, and there is a Dropbox API integration with a simple file UI for ingestion triggering. The Dropbox file structure is pulled from a folder in the Dropbox where final deliverables were dropped.`,
  image__music: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203525/portfolio/ampl_music/wze5xx4hmki1yzuktsk2.png',
  description__stem: `In each song, there is top level metadata and a list of instruments. In each instrument is a stem, a full-length piece of a song broken out by instrument, the audio timeline, and a user model for the performer of that stem.`,
  image__stem: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/d3yons34mp0kan4pm7qq.png',
  description__personnel: `In "Personnel", we have user models attached to different recording session roles, like Mixing Engineer, Mastering Engineer and Producer. This section is slightly misnamed, it should probably be "Technical Personnel".`,
  image__personnel: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/uomyqphc8jegxnpfygru.png',
  description__ingestionEnd: `We had places for "Legal" and "Media", but to no haven't used them for anything.`,
  description__frontEndIntro: `With the complexity of the system already built out and data already having been uploaded, we had the luxury to iterate on a user facing front-end using real data. Getting the information architecture right was by far the most difficult challenge.`,
  image__frontEndIntro: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203525/portfolio/ampl_music/gtwyw4jwwks9ghpc99ig.png',
  description__frontEndIa: 'We landed on separating the content by type: Phrases, Sections, Songs and Toplines.',
  image__frontEndIa: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/xkfkue8xroqhapwzxlfn.png',
  description__frontEndUi: ``,
  image__frontEndUi: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203525/portfolio/ampl_music/wbxjxfzrgsgb0d3yos0h.png',
  description__frontEndIaDiscussion: `In retrospect, this IA breaks down in a fundamental way. Phrases, Sections and Songs are organizational while "A Cappellas" is a content type. A future version of this would break down the top level IA into "Instrumentals" and "A Cappellas" (Toplines), a more sensical organization of content.`,
  description__contentDiscussion: `Each content section had a filter and a list of content. In the content UIs there was musical metadata about the content and a simple UI to show you the general royalty splits. There was a CTA to go to "Details". Again, in retrospect I think a clearer CTA would have been "Download". Without changing the, we could still have brought the user into the details page, but they would be in a "download" mindset. Also, the final layout and design of this front-end (which this is not) is lost as far as I know, but it did address some of these issues.`,
  image__contentDiscussion: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203526/portfolio/ampl_music/v2wnlywcqzyulutclxy0.png',
  description__frontEndConclusion1: `We also built an upload wizard so that users could close the loop when they were finished with a track, but we never tested this with users.`,
  description__frontEndConclusion2: `This platform was opened up in a private beta, but Indaba Music was acquired by Splice soon after and development stopped.`,


  footerData: {
    learnings: [
      `Communication around the user's mental model vs. how the data model works behind the scenes can be challenging. Occasionally, even with clear design requirements, there is a disconnect between the expected functionality and the implemented functionality. In these cases it's imperative that engineering and design get together and hash out, in very clear terms, the disconnect, the trade-offs and how a solution can be reached. This was a challenge while reasoning about the concept of what constitutes "live" in the admin vs what users saw in the returns from the backend filtering mechanism.`,
      `We could have spent more time naming the file naming system even more automated to reduce the burden on the content team. We were doing a lot and didn't get a chance to circle back on this in a holistic way.`,
      `Dropbox ingestion can be pushed to a higher level, so that the administrator doesn't have to find the exact session, though the tradeoff there would be adding another key-value pair to the file name, or else further iterating on the ingestion rules, perhaps by file structure.`,
      `Boxes in boxes in an admin are hard to parse. I'd want to redo the layout of the models if given a chance. I'd also want to restyle the forms for best practices (labels on top, better validation, etc.).`,
      `There were a lot of moving parts to this application and I think we did a decent job getting it into a place where it was shippable in beta form.`,
      `Finding the right market fit is hard. While we had a pretty clear product vision, there were some informal talks with industry professionals that challenged our assumptions. We probably needed more formal research to suss out where in the market this would fit. But! More to come on that. We were acquired during the private beta and this project was to be reused...`
    ],
    related: [
      {      
        relatedTitle: 'Royalty Bearing Sample Library (WIP)',
        relatedLink: '/work'
      },
      {
        relatedTitle: 'Converse Sample Library V2',
        relatedLink: '/work/rubber-tracks-v2'
      }
    ]
  }
}

class RubberTracksPageV2 extends Component {
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
        <PortfolioImage 
            imageUrl={this.data.image__AmplPlatform} />
        <PortfolioDescription
          description={this.data.description__intro} />
        <h4 className="work-item__main-section work-item__header">Ingestion Pipeline and Admin</h4>
        <PortfolioDescription
          description={this.data.description__ingestion} />
        <PortfolioImage 
            imageUrl={this.data.image__dawBreakdown} />
        <PortfolioDescription
          description={this.data.description__ingestion2} />
        <PortfolioImage 
            imageUrl={this.data.image__ingestionFlow} />
        <PortfolioDescription
          description={this.data.description__audioTimeline} />
        <PortfolioImage 
            imageUrl={this.data.image__audioTimeline} />
        <PortfolioDescription
          description={this.data.description__ingestionConclusion} />
        <PortfolioImage 
            imageUrl={this.data.image__knowledgeGraph} />
        <PortfolioDescription
          description={this.data.description__knowledgeGraph} />
        <PortfolioImage 
            imageUrl={this.data.image__adminIa} />
        <PortfolioDescription
          description={this.data.description__music} />
        <PortfolioImage 
            imageUrl={this.data.image__music} />
        <PortfolioDescription
          description={this.data.description__stem} />
        <PortfolioImage 
            imageUrl={this.data.image__stem} />
        <PortfolioDescription
          description={this.data.description__personnel} />
        <PortfolioImage 
            imageUrl={this.data.image__personnel} />
        <PortfolioDescription
          description={this.data.description__ingestionEnd} />
        <h4 className="work-item__main-section work-item__header">User facing front end</h4>
        <PortfolioDescription
          description={this.data.description__frontEndIntro} />
        <PortfolioImage 
            imageUrl={this.data.image__frontEndIntro} />
        <PortfolioDescription
          description={this.data.description__frontEndIa} />
        <PortfolioImage 
            imageUrl={this.data.image__frontEndIa} />
        <PortfolioDescription
          description={this.data.description__frontEndUi} />
        <PortfolioImage 
            imageUrl={this.data.image__frontEndUi} />
        <PortfolioDescription
          description={this.data.description__frontEndIaDiscussion} />
        <PortfolioDescription
          description={this.data.description__contentDiscussion} />
        <PortfolioImage 
            imageUrl={this.data.image__contentDiscussion} />
        <PortfolioDescription
          description={this.data.description__frontEndConclusion1} />
        <PortfolioDescription
          description={this.data.description__frontEndConclusion2} />
        <PortfolioFooter 
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPageV2;