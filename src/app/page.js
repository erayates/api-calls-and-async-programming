import Link from "next/link";

export default function Home() {
  return (
    <div className="main-container">
      <h1>Presentation Routing</h1>
      <hr className="divider" />

      <p>Sync - Async Programming</p>
      <Link href="/sync" className="btn-link">
        Synchronous Programming
      </Link>
      <Link href="/sync-fault" className="btn-link">
        Synchronous Programming Fault
      </Link>
      <Link href="/async" className="btn-link">
        Async Programming
      </Link>

      <p>Creating Async Structures</p>

      <Link href="/callbacks" className="btn-link">
        Callbacks
      </Link>
      <Link href="/" className="btn-link">
        Promises -- Diğer klasörden gösterilecek.
      </Link>
      <Link href="/async-await" className="btn-link">
        Async / Await
      </Link>

      <p>API Calls</p>

      <Link href="/fetch" className="btn-link">
        Fetch API
      </Link>
      <Link href="/axios" className="btn-link">
        Axios
      </Link>
      <Link href="/swr" className="btn-link">
        Next.js SWR
      </Link>
    </div>
  );
}
