import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Converse Rubber Tracks Sample Library V1',
    companies: ['Indaba Music', 'Converse', 'Cornerstone'],
    status: 'Shipped',
    link: 'https://www.conversesamplelibrary.com',
    video: 'https://www.youtube.com/embed/6HcHcUAN_bY',
    role: 'Content production, product design, some front-end development',
    problem: 'How might we make the local experience of recording at the Converse Rubber Tracks studio available to creators around the world?',
    value: 'Providing a high-quality, royalty-free sample library would help to democratize music creation and provide brand value to Converse in an authentic way. Musicians, bands and artists would feel like they were "giving back" to bedroom producers and those producers would get value from the providers.'
  },
  description__intro: "When the project was green-lit, there really wasn't anything like it in the music space. There were some comps to learn from, like stock image sites and Beatport, but each of those came with a caveat—for example, with stock image sites there was lack of personalization; and with Beatport, while it had robust organizing principles, for musical content categorization it was based in full tracks and musical genres instead of musical component sounds.",
  image__converseOverview: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203541/portfolio/converse_v1/ee3lh7a1mrsywq7tfgl5.png',
  description__wireframes: "The early wireframes are lost to the sands of time (recreations below), but a few ideas were proposed. First, groupings by instrument. I thought, in absence of search architecture, that instruments as an entry point might be the most useful for musicians.",
  image__fakeWireframes: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203541/portfolio/converse_v1/a6sgeucfwgqcutajrbci.png',
  image__packDetails: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203541/portfolio/converse_v1/eeqepoywkfnrqhygp8iw.png',
  description__packDetails1: "Below the fold, a pack gallery with metadata. On scan there are only pack names. hovering exposes more data.",
  description__packDetails2: "The right column has the pack preview, some quick content iterations, and CTAs that lead you to the full browse experience. Clicking “All One Shots” will get you into a filtered browse experience, filtered by content type == oneshots.",
  image__packGallery: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203541/portfolio/converse_v1/j1swfkjb3dhuf02w0yhr.png',
  description__packGallery1: "At the top, a hero banner with new and featured content. There’s a session preview and some limited metadata.",
  description__packGallery2: "Below the fold, a pack gallery with metadata. On scan there are only pack names. hovering exposes more data.",
  description__browse: "For the browse experience we focused on a list of samples scoped to the pack, filterable by metadata, in a table. Pressing play exposes the waveform UI. Once you are logged in, you are free to browse and download samples (albeit one by one).",
  image__packRows: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203541/portfolio/converse_v1/z5ohccmhavmdiusf2rzr.png',
  description__conclusion: 'Launching the library was smooth. We had some press events and even won the 2015 Midem Marketing Competition Gold Award.',
  footerData: {
    learnings: [
      "It worked! From hard download numbers the project was a success. The project has clocked millions of downloads.",
      "A drawback to presenting stems, loops and one-shots in the same UI is that the different types aren't easily scannable. The same type of waveform UI for a stem might not work for a one-shot.",
      "Users requested 2 features: Search and bulk download. This was not unanticipated. Search was unfortunately ruled out because of development constraints. We mitigated this a bit through per pack filtering. Bulk download was another technical challenge. While ad hoc downloading was out of the question because of the high technical barrier, we wanted to find ways to address this issue while also expanding the scope and ambition of the project..."
    ],
    related: {
      relatedTitle: 'Converse Rubber Tracks Sample Library V2',
      relatedLink: '/work/rubber-tracks-v2'
    }
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
        <div className="work-item__small-image">
          <PortfolioImage 
            imageUrl={this.data.image__packRows} />
        </div>
        <PortfolioDescription
          description={this.data.description__conclusion} />
        <PortfolioFooter 
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPage;