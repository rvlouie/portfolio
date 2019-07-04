import { Component } from "react";
import {Image, Transformation, CloudinaryContext} from 'cloudinary-react';
import Header from "../components/Header/header";
import '../stylesheets/styles.scss';
import axios from "axios";

class PostersPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: []
    }
  }
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }
  componentDidMount() {
    axios.get('https://res.cloudinary.com/dmizjakby/image/list/poster.json')
      .then(res => {
        console.log(res.data.resources);
        this.setState({gallery: res.data.resources})
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
          <CloudinaryContext cloudName="dmizjakby">
            {
              this.state.gallery.map(data => {
                return(
                  <a href={(data.context.custom.url == 'null') ? '#' : data.context.custom.url} 
                     className={(data.context.custom.url == 'null') ? 'posters__no-link' : 'posters__link'}>
                    <Image key={data.public_id} publicId={data.public_id + '.jpg'}>
                    </Image>
                  </a>
                )
              })
            }
          </CloudinaryContext>
        </section>
      </main>
    );
  }
}

export default PostersPage;