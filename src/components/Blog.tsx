import { useState } from 'react';

export async function clientLoader() {
  return {
    title: "Blog",
  };
}

export default function Component({ loaderData }: { loaderData: any }) {
  const [index, setIndex] = useState(0);
  function handleClick() {
    setIndex(index + 1);
    console.log("clicked");
  }
  return (
    <>
      <div>
        <h1>{loaderData.title}</h1>
        <p>Welcome to the blog!</p>
        <button onClick={handleClick}>Click me {index}</button>
      </div>
    </>
  );
}




