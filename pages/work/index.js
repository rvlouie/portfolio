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
      validated: false,
      showErrorMessage: false
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
      });
      localStorage.setItem('validated', true);
    } else {
      this.setState({
        showErrorMessage: true
      })
    }
  }

  componentDidMount() {
    if (localStorage.validated) {
      this.setState({
        validated: localStorage.validated
      })    
    }
  }

  render() {
    const validated = this.state.validated || this.isValidated;
    const password = this.state.password;
    const showErrorMessage = this.state.showErrorMessage;
    const errorMessage = 'Hey, something went wrong, try the password again or reach out to Rick.';
    return (
      <main>
        <Header />
        <section>
          <h3>
            Work
          </h3>
        </section>
        <div>
          {!validated ? 
            ( 
              <form className="work__password-form" onSubmit={this.handleSubmit}>
                <label className="work__password-label">Need access? Reach out to rvlouie@gmail.com or @rvlouie on social media. Otherwise, enter the password!</label>
                <input className="work__password-input" type="password" value={this.state.password} onChange={this.handleChange} /> 
                {showErrorMessage && <div className="work__password-error">{errorMessage}</div>}
                <button disabled={(password.length > 0) ? false : true} className={(password.length > 0) ? 'work__password-button' : 'work__password-button work__password-button--disabled'} type="submit" value="Submit">Show me the work</button>
              </form> 
            ) :
            (
              <div>
                <section className="work__item">
                  <Link href="/work/rubber-tracks-v1">
                    <a>Converse Rubber Tracks Sample Library V1</a>
                  </Link>
                </section>
                <section className="work__item">
                  <Link href="/work/rubber-tracks-v2">
                    <a>Converse Rubber Tracks Sample Library V2</a>
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