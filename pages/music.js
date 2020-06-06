import { Component } from "react";
import PlaylistSoundPlayer from '../components/SouncloudPlayer/SoundcloudPlayer';
import Header from "../components/Header/header";
import '../stylesheets/styles.scss';

const CLIENT_ID = 'j34j8UCuL4LaOnjnyNb8VBOStI1RrtPI';
const RESOLVE_URL = 'https://soundcloud.com/rvlouie/tracks';

class MusicPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          <h3>
            Music
          </h3>
        </section>
        <section className="music__container">
          <PlaylistSoundPlayer 
            clientId={CLIENT_ID}
            resolveUrl={RESOLVE_URL}
          />
        </section>
      </main>
    );
  }
}

export default MusicPage;