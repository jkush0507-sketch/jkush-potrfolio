import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container section center">
      <p className="mono label">404 / Signal lost</p>
      <h1 className="h1">This route does not exist.</h1>
      <p className="muted">The page you requested could not be found.</p>
      <Link className="btn" href="/">Return home</Link>
    </main>
  );
}
