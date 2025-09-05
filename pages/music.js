import { Component } from "react";
// import PlaylistSoundPlayer from '../components/SouncloudPlayer/SoundcloudPlayer';
import Header from "../components/Header/header";

// const CLIENT_ID = 'j34j8UCuL4LaOnjnyNb8VBOStI1RrtPI';
// const RESOLVE_URL = 'https://soundcloud.com/rvlouie/tracks';

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
          {/* <PlaylistSoundPlayer 
            clientId={CLIENT_ID}
            resolveUrl={RESOLVE_URL}
          /> */}
          <a className="music__link" href="https://soundcloud.com/rvlouie" target="_blank">Soundcloud</a>
          <a href="https://open.spotify.com/artist/6EjBWkQzTgHf3EOYYVeeKw?si=8xYpPSOxS8ymblGjyfZ2Qg" target="_blank">Spotify</a>
        </section>
      </main>
    );
  }
}

export default MusicPage;