import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';
import { PortfolioDescription, PortfolioHeader, PortfolioImage, PortfolioFooter } from "../../components/PortfolioItems/portfolio-items";

const converseV1Data = {
  headerData: {
    title: 'Converse Rubber Tracks Sample Library V2',
    companies: ['Indaba Music', 'Converse', 'Cornerstone'],
    status: 'Shipped',
    link: 'https://www.conversesamplelibrary.com/tools',
    video: 'https://player.vimeo.com/video/143914865',
    role: 'Product design, platform strategy, front-end (UI) development',
    problem: 'Use the learnings from the V1 launch of the library to create more user value and expand our surface area.',
    value: "By expanding the project surface area, we'd help users integrate the sample content into their day to day creative flow. By providing organizational tools that hooked into this creative flow, we'd address the user feedback about batch downloading in a technically scalable way while also adding value to a platform strategy."
  },
  description__intro: 'On the heels of the success of the V1 launch of the library, we wanted to expand the site into a platform while trying to address the user feedback. Search was still a non-starter because of development resources. So, we wanted to focus on the "batch" experience, which became "Kits" and the "collection" experience which expanded the concept of "Favorites".',
  image__converseV2Platform: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203554/portfolio/converse_v2/igfuqle1ranrudzsxqv6.png',
  image__kits: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203555/portfolio/converse_v2/ohfmfamkzjeo8rfnrccj.png',
  description__kits: 'Kits are a metaphor for the "MPC", a commonly used drum machine in sample based music production. You can drag samples from anywhere on the site onto a Kit where they are playable via the keyboard. Kits are also shareable and are shown a community "Kits" page.',
  image__favorites: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203555/portfolio/converse_v2/uzzwxkbqlcptjjl3n3d4.png',
  description__favorites: "Favorites are what they sound like: a list of samples that you've liked. These two models are the lynchpin UIs for the Converse V2 platform.",
  image__mobile: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203555/portfolio/converse_v2/klxipuyqtwndarizgbz3.png',
  description__mobile: `The mobile app, as shown in the video above, is Tinder for samples (more or less—the samples can't like you back). You could either be served with random samples from the whole set of samples, or filter down by instrument. There was also a pack listing, where you could listen through samples by pack. The app adds value to the "collection" action of the platform.`,
  image__daw: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203555/portfolio/converse_v2/iwb0zgiunplhjwa5aiuh.png',
  description__daw: `The cloud connected DAW is meant to tie the whole experience together. It fetches both your Favorites and Kits from the API and renders them in the plugin. You can create new Kits or edit existing Kits. As a bonus, you can upload your edited samples back into the platform and relate them as a "derivative sample" (not the best name) against the original sample.`,
  image__mixes: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203555/portfolio/converse_v2/ieslp59azd8wh1bmkqxj.png',
  description__mixes: `Mixes tied into the platform by showing which samples were used to make tracks. When a track was uploaded to the platform, it could be tagged with samples that your user had downloaded. These samples would then show in the "Mixes" tab. When the "DNA" icon was clicked, the used samples would show and you could navigate to the sample page.`,
  image__derivativeSamples: 'https://res.cloudinary.com/dmizjakby/image/upload/v1563203555/portfolio/converse_v2/rze44ecuj7vtl8wnshu9.png',
  description__derivativeSamples: `Derivative samples were a bonus. In an attempt to close the platform loop and create a network effect, the DAW, as noted above, would upload effected samples back into the platform and list them under the original sample on the individual sample page. These UGC samples can be added to Kits and are again able to be edited in the DAW.`,
  description__conclusion: `We learned a lot from this ambitious expansion of surface area and attempt at a platform strategy. Unfortunately, soon after the launch the funding for the project fell out as a byproduct of Nike's acquisition of Converse.`,
  footerData: {
    learnings: [
      "We had the chance to host a 2 day Jamathon/Hackathon at Converse HQ where we invited musicians and engineers to record, play with the new tools, and hack on our API. Attendees were everyone from hyper talented 16 year old producers to MIT Media Lab students. One specific insight I gained from this experience was regarding the cloud connected sampler. Users saw a ton of value in grabbing the samples from the cloud and loading them into the DAW, bringing the samples closer to the production process. However, the complexity of the plugin, with all the bells and whistles, was probably unnecessary. The main utility for a tool like this was to get the samples into the DAW, in the ecosystem, and from there, allow the user to morph the sounds with their own plugins and gear. Doing more formal research to coax information about the product would have been worth the investment.",
      "The limitations of Max for Live and the Javascript bridge that had its maxurl HTTP protocol caused experience issues. There was an arbitrary hardcoded memory allocation value that caused a host of problems and we actually had to get on the phone with Cycling '74 to troubleshoot and patch. The plugin works, but there is a very specific set of system requirements, including needing the correct Java runtime which added a lot of complexity on install. This led it to feel much more like a prototype than a polished product.",
      "The mobile app was fun to play with, but we never asked users in a robust way about how it might help the creative process, if at all.",
      "Funding dropped out with the Nike acquisition of Converse and the project went stale.",
      "We connected pieces in the platform and had a good amount of connection in the application.  However, we could have done a better job with connecting the metadata by approaching it as a knowledge graph.",
      "Tracks were made, artists recording the samples didn't make any money (we took care of the user side, but not so much the provider side except for the buyouts)."
    ],
    related: [
      {      
        relatedTitle: 'Ampl Music',
        relatedLink: '/work/ampl-music'
      },
      {
        relatedTitle: 'Converse Sample Library V1',
        relatedLink: '/work/rubber-tracks-v1'
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
        <PortfolioDescription
          description={this.data.description__intro} />
        <div className="work-item__small-image">
          <PortfolioImage 
            imageUrl={this.data.image__converseV2Platform} />
        </div>
        <h4 className="work-item__main-section work-item__header work-item__header--sub-header">Kits and Favorites</h4>
        <div className="work-item__image-section">
          <PortfolioImage 
            imageUrl={this.data.image__kits} />
          <div className="work-item__image-description">
            <PortfolioDescription
              description={this.data.description__kits} />
          </div>
        </div>
        <div className="work-item__image-section">
          <div className="work-item__image-description">
            <PortfolioDescription
              description={this.data.description__favorites} />
          </div>
          <PortfolioImage 
            imageUrl={this.data.image__favorites} />
        </div>
        <h4 className="work-item__main-section work-item__header work-item__header--sub-header">Mobile</h4>
        <PortfolioImage 
            imageUrl={this.data.image__mobile} />
        <PortfolioDescription
          description={this.data.description__mobile} />
        <h4 className="work-item__main-section work-item__header work-item__header--sub-header">DAW</h4>
        <PortfolioImage 
            imageUrl={this.data.image__daw} />
        <PortfolioDescription
          description={this.data.description__daw} />
        <h4 className="work-item__main-section work-item__header work-item__header--sub-header">Mixes</h4>
        <PortfolioImage 
            imageUrl={this.data.image__mixes} />
        <PortfolioDescription
          description={this.data.description__mixes} />
        <h4 className="work-item__main-section work-item__header work-item__header--sub-header">Derivative Samples</h4>
        <PortfolioImage 
            imageUrl={this.data.image__derivativeSamples} />
        <PortfolioDescription
          description={this.data.description__derivativeSamples} />
        <PortfolioDescription
          description={this.data.description__conclusion} />
        <PortfolioFooter 
          footerData={this.data.footerData} />
      </main>
    );
  }
}

export default RubberTracksPageV2;