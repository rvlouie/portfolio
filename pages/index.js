import Header from "../components/Header/header";
import '../stylesheets/styles.scss';

function Index() {
  return (
    <main>
      <Header />
      <section className="home__container">
        <div className="home__content">
          <p className="home__content-item home__content-item--design">Design</p>
          <p className="home__content-item home__content-item--music">Music</p>
          <p className="home__content-item home__content-item--systems">Systems</p>
        </div>
      </section>
    </main>
  );
}

export default Index;
