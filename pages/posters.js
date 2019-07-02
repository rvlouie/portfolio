import { Component } from "react";
import Header from "../components/Header/header";
import '../stylesheets/styles.scss';

class PostersPage extends Component {
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
            Posters
          </h3>
        </section>
      </main>
    );
  }
}

export default PostersPage;