import Link from "next/link";
import { Component } from "react";
import Header from "../../components/Header/header";
import '../../stylesheets/styles.scss';

class WorkPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  constructor(props) {
    super(props);

    this.state = {
      password: '',
      validated: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.password == 'ricklouie') {
      this.setState({
        validated: true
      })
    }
  }

  render() {
    const validated = this.state.validated;
    return (

    
        <main>
          <Header />
          <div>
            {!validated ? 
              ( 
                <form onSubmit={this.handleSubmit}>
                  <input type="password" value={this.state.password} onChange={this.handleChange} /> 
                  <button type="submit" value="Submit">Let me in!</button>
                </form> 
              ) :
              (
                <div>
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
                </div>
              )
            }
          </div>
        </main>

    );
  }
}

export default WorkPage;