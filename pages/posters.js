import { Component } from "react";
import { Cloudinary } from '@cloudinary/url-gen';
import Header from "../components/Header/header";
import axios from "axios";

class PostersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
    this.cld = new Cloudinary({
      cloud: {
        cloudName: 'dmizjakby'
      }
    });
  }
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }
  componentDidMount() {
    axios.get('https://res.cloudinary.com/dmizjakby/image/list/poster.json')
      .then(res => {
        this.setState({ gallery: res.data.resources })
      })
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
        <section className="posters__section">
          {
            this.state.gallery && this.state.gallery.length > 0 ?
              this.state.gallery.map(data => {
                return (
                  <a key={data.public_id} href={(data.context && data.context.custom && data.context.custom.url == 'null') ? '#' : (data.context && data.context.custom && data.context.custom.url) || '#'}
                    className={(data.context && data.context.custom && data.context.custom.url == 'null') ? 'posters__no-link' : 'posters__link'}>
                    <img
                      src={this.cld.image(data.public_id + '.jpg').toURL()}
                      alt={data.public_id}
                    />
                  </a>
                )
              }) :
              <p>Loading posters...</p>
          }
        </section>
      </main>
    );
  }
}

export default PostersPage;