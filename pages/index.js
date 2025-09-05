import Header from "../components/Header/header";
import Link from "next/link";

function Index() {
  return (
    <main>
      <Header />
      <section className="home__container">
        <div className="home__content">
          Hello to you! Check out my <Link href="/work" className="home__link home__work-link">work</Link>, <a className="home__link home__email-link" href="mailto:rvlouie@gmail.com">get in touch</a>, and follow <a className="home__link home__social-link" href="https://twitter.com/RVLouie">@rvlouie</a> on all social media.
        </div>
      </section>
    </main>
  );
}

export default Index;
