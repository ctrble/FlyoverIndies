import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/tanstack-query")({
  component: TanStackQueryDemo,
});

function TanStackQueryDemo() {
  const { data } = useQuery({
    queryKey: ["todos"],
    queryFn: () =>
      Promise.resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
        { id: 3, name: "Charlie" },
      ]),
    initialData: [],
  });

  return (
    <ul className="">
      {data.map((todo) => (
        <li key={todo.id} className="">
          {todo.name}
        </li>
      ))}
    </ul>
  );
}
