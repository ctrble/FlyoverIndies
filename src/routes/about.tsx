import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <main className="">
      <section className="">all about flyover indies</section>
    </main>
  );
}
