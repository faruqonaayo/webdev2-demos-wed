import Header from "./heading";

export default function Page() {
  const a = 5;
  const b = 10;
  const c = a + b;
  return (
    <>
      <Header />
      <main>
        <p>A demo of Web Dev 2</p>
        <p>
          The sum of {a} and {b} is {c}
        </p>
      </main>
    </>
  );
}
