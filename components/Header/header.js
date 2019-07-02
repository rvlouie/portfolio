import Link from "next/link";

function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__personal-info">
        <h1 className="header__me"><Link href="/"><a>Rick Louie</a></Link></h1>
      </div>
      <div className="header__links">
        <Link href="/resume">
          <a>Resume</a>
        </Link>
        <Link href="/work">
          <a>Work</a>
        </Link>
        <Link href="/music">
          <a>Music</a>
        </Link>
        <Link href="/posters">
          <a>Posters</a>
        </Link>
      </div>
    </header>
  );
}

export default Header;
