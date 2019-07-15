import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioLink, PortfolioFigma, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Marketplace Connections',
    companies: ['Splice'],
    status: ['In progress'],
    role: 'Product design, knowledge graph/ontology development ',
    problem: 'Splice Sounds had no metadata interconnectedness. It was the Converse Rubber Tracks metadata issue all over again x 100. Further, tech debt around this had brought certain queries to a crawl. The only mitigation was through search infrastructure.',
    value: 'Besides tech debt, construction an ontology/knowledge graph would bring tons of user value, allowing the company to reason about the world of recorded music and its relation to the product offering. It would also provide tools that would allow designers and PMs to create n products from the graph, and to fold in machine learning.'
  },
  description__intro: `Problem solving for this started on my first day at Splice. It was an acute issue that we were dealing with, a certain admin function, the "Global Tag Editor", would bring production down if it were accidentally loaded. Suffice to say that there were repeat values of comma separated strings on millions of records that were being queried. So, the first goal was to remove that nav item. Having mitigated the issue on the front end, I dug into the root cause.`,
  image__marchDomain: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203579/portfolio/marketplace_connections/aadoc0rltkwcuiw4dghq.png',
  description__commaSeparated: `It was clear to me that comma separated strings weren't going to cut it as a knowledge base. I started a hypothetical domain mapping exercise in March, mostly from my own curiosity. Out of this exercise, I started some wireframes for what a more interconnected "tag" experience could be in an admin UI.`,
  link__soundsModel: {
    name: 'Sounds Data in Context.pdf',
    url: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f88feefa-d80d-48d2-a778-b8cbbabe817e/Sounds_Data_in_Context.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAT73L2G45M34FERIB%2F20190715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20190715T214856Z&X-Amz-Expires=86400&X-Amz-Security-Token=AgoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCcsk84dfepLe7IiJ4mvr5G4RjHtVnUtvoflD8PxZV6AiBqaV9LF2tTWWnW2SVwixVcfEMKrFz%2Fnu6nez%2BQl3mOjSraAwgcEAAaDDI3NDU2NzE0OTM3MCIMKmKsjN3TiiIPOuuEKrcD%2Bp3LRUvVGLR%2Fj6geINhoyPAzzjgmN8jJnq1h9tmr2Cvxzr6cipGAo18BCyqNPo3boC5rtyfYI69IO8Sp%2FcRaTXz4smJOkaeCOOwDmKOin5f%2BBi1Wc4w7vwE6FNMKrHV88f945nwjcGIv7XB8qLnZdESFu%2B9lKmPHZ6GDKBcxQpp0FuDsfThcj0xv47WAVMOhJ8AEmjq1E2NndC%2FSCnuo5DEJS7J521ilQrTBpFS3TzeF43Ye2rs2bPrugrBFc9ZO2uog8Pvn1%2FLio0PniA4ouZmLX26QVgqxemw3HJpkifA2LfxJnHOWZjxSFU6YeLuK%2Bwi4aONREofTLW6xyBt2d9GfduC1u29ZAKBkiprfCFPB%2FxpmwAy9AFBqG7Pl2iBmOqdcwDA9JcNtlSMQuyHJ1m4Wp%2FFV%2FmR8oiv0RKJ1v928Tmvddcm5BHQFBcxGbA06cTdoGQNTrqK5JFKldSRnzSysz9baimw0GpQgi%2BJFppGKvAbDnaqx2vhmverEy%2Ba%2Fi0ZjxsJ6GhhN7YG41CAKBdVdfYnU2r3OViTKTCK7EimDNOnx8jPGxDH60GZLx53vfkG%2ByE8xRTDVmrPpBTq1ARMW10sS3aQxEUVN42FHofftpC92qqsTpjBx%2FjuNwzHRVFGdw%2Fg9WqhA9o8hIkObCTEYxMK2X9Z3%2F4TYF01FA%2F37uWEmfSWKoO938ZjU6NCBE8eWw%2BtUkt15s5fmG%2BE%2FQNcfSKgWPCb3%2Bn4qWgn%2F%2FNE6gIVPd1dyjtddNKclOy9rRl0SyKdTz%2F8v7dR0P40NLKf7qJYGtANAChZibtmsGAiIwf12ER%2Fa7O%2F8578BWSV21YYWhvY%3D&X-Amz-Signature=adbc9657655fb56c0d75a9254459ec6d8265898214e1117f4f0169da237832de&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Sounds%2520Data%2520in%2520Context.pdf%22'
  },
  description__communication: `Communicating with engineering was a challenge. My PM partner and I spent a bunch of time working out the right product rationale and first user stories. At first we were using the word "tags", since the original problem stemmed from the way tags were structured in the database. Of course, we weren't really talking about tags, but models. A breakthrough in communication came when we started talking about the project as a knowledge graph or ontology. As it turns out, the word "tag" as a noun is pretty loaded, but if you frame it as a verb and relate the act of "tagging" to creating an edge in a graph, the mental model shifts. Once we were on the same page and were using the same terminology I gave the ontology definition another shot.`,
  image__ontologyV2: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203580/portfolio/marketplace_connections/ycqcvyk9xtaztiygcoe6.png',
  description__proofOfConcept: 'I chose some of these nodes to relate in a proof of concept prototype and some forward thinking wireframes/lo-def mockups, so that I could concretize how the data model interacted with the knowledge graph. With this project I learned first hand how concretizing something abstract like a knowledge graph into user interaction, even at low fidelity, is an important step in communicating.',
  figma__proofOfConcept: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FdjXEtdpfPseotrooRpSixQat%2FMarketplace-Connections-User-Flow-POC%3Fnode-id%3D0%253A2%26viewport%3D141%252C1747%252C0.1884583830833435%26scaling%3Dmin-zoom',
  description__alignment: `It took several alignments to get all the stakeholders on the same page, but reasoning about these wireframes helped the backend team start to think about implementation strategies for the graph. At the same time, my PM partner and I decided on the first nodes in the graph to flesh out. We chose "genres" and "instruments" and put together an instance definition team made up of ourselves and members of the content team.`,
  image__graph: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203579/portfolio/marketplace_connections/kgzuk3xn8z3hcxog1u1j.png',
  image__instance: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203579/portfolio/marketplace_connections/rezwjoe3hmhnsjt4nqmh.png',
  description__prototype: `Another challenge around communication is that the Splice engineering team is mostly remote. Because of the projects complexity, we decided that it would be beneficial to get all of the team members into one location to put together a working prototype.`,
  image__prototype: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203580/portfolio/marketplace_connections/uc7qhy4dlzr9vpjmh54w.png',
  description__prototypeResults: `The prototype we built featured 2 experiences. First, a wikipedia style, simple link presentation to show the connections in a text-based way. Second, an implementation of a low fidelity header with the same connections in a navigation UI. The outcome of this work was a real way forward to true implementation. We decided as a group to focus our efforts on one node of the graph as an MVP so that we could get the graph into production. We chose genres.`,
  image__genrePage: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203579/portfolio/marketplace_connections/onpooogbcixkw0vdikmg.png',
  description__genrePage: `Genres were chosen because there was a lot of opportunity to improve these pages and we could piecemeal implement some of the work myself and the entire design team sprinted around. Here's where we wound up.`,
  image__finalDeliverable: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203579/portfolio/marketplace_connections/xmenjnsgz3tcfwa9n6ub.png',
  description__finalDescription: `Quick links take you to different connections with sample content high up and above the fold. As you scroll down, you'll see sample packs and then a carousel of gear cross-sell. If you made it all the way to the bottom of the page, you'll see the details about the genre with the "Influenced" edges exposed.`,
  description__conclusion: `Currently this is out to 50% of users, but will roll out broadly soon (probably by the time you've read this!) `,
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
        <h4 className="work-item__main-section work-item__header">Project Description</h4>
        <PortfolioDescription
          description={this.data.description__intro} />
        <PortfolioImage 
          imageUrl={this.data.image__marchDomain} />
        <PortfolioDescription
          description={this.data.description__commaSeparated} />
        <PortfolioLink 
          link={this.data.link__soundsModel}
        />
        <PortfolioDescription
          description={this.data.description__communication} />
        <PortfolioImage 
          imageUrl={this.data.image__ontologyV2} />
        <PortfolioDescription
          description={this.data.description__proofOfConcept} />
        <PortfolioFigma 
          url={this.data.figma__proofOfConcept} />
        <PortfolioDescription
          description={this.data.description__alignment} />        
        <PortfolioImage 
          imageUrl={this.data.image__graph} />
        <PortfolioImage 
          imageUrl={this.data.image__instance} />          
        <PortfolioDescription
          description={this.data.description__prototype} />
        <PortfolioImage 
          imageUrl={this.data.image__prototype} />
        <PortfolioDescription
          description={this.data.description__prototypeResults} />
        <PortfolioImage 
          imageUrl={this.data.image__genrePage} />
        <PortfolioDescription
          description={this.data.description__genrePage} />
        <PortfolioImage 
          imageUrl={this.data.image__finalDeliverable} />
        <PortfolioDescription
          description={this.data.description__finalDescription} />
        <PortfolioDescription
          description={this.data.description__conclusion} />

        <PortfolioFooter 
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPage;