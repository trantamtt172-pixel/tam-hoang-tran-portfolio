import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found" id="main">
      <p className="eyebrow">404</p>
      <h1>This route is not part of the portfolio story.</h1>
      <Link className="button button-primary" href="/#projects">
        Return to projects
      </Link>
    </main>
  );
}
