import React from "react";

import useFetch from "./hooks/useFetch";
import House from "./components/House";

export default function App() {
  const { data, setData } = useFetch();
  return (
    <main>
      <input
        type="text"
        placeholder="Type your favorite house"
        value={data.slug}
        onChange={(e) => setData({ ...data, slug: e.target.value })}
      />
      <br />
      {data.results.length > 0 ? <House family={data.results[0]} /> : null}
    </main>
  );
}