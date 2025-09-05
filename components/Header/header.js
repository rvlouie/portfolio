import Link from "next/link";

function Header() {
  return (
    <header className="header__wrapper">
      <div className="header__personal-info">
        <h1 className="header__me"><Link href="/">Rick Louie</Link></h1>
      </div>
      <div className="header__links">
        <Link href="/resume">
          Resume
        </Link>
        <Link href="/work">
          Work
        </Link>
        <Link href="/music">
          Music
        </Link>
        <Link href="/posters">
          Posters
        </Link>
      </div>
    </header>
  );
}

export default Header;
