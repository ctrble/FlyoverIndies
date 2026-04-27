import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  return (
    <main className="">
      <section className="">this is the index</section>
    </main>
  );
}
