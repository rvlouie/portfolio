import { Component } from "react";
import Header from "../components/Header/header";
import '../stylesheets/styles.scss';

class ResumePage extends Component {
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
            Resume
          </h3>
        </section>
      </main>
    );
  }
}

export default ResumePage;