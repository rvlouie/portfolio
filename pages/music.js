import { Component } from "react";
import Header from "../components/Header/header";
import '../stylesheets/styles.scss';

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
      </main>
    );
  }
}

export default MusicPage;