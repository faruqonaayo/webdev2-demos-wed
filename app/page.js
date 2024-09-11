import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Demo Home</h1>
      <p>A demo of Web Dev 2</p>
      <ul>
        <li>
          <Link href="/week-2">Week 2 Page</Link>
        </li>
      </ul>
    </div>
  );
}
