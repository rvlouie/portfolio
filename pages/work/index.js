import Link from "next/link";
import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';

class WorkPage extends Component {
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
            Work
          </h3>
        </section>
        <section className="work__item">
          <Link href="/work/rubber-tracks">
            <a>Converse Rubber Tracks Sample Library</a>
          </Link>
        </section>
      </main>
    );
  }
}

export default WorkPage;