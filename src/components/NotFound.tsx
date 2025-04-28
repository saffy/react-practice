export async function clientLoader() {
  // you can now fetch data here
  return {
    title: "404 - Page Not Found",
  };
}

export default function Component({ loaderData }: { loaderData: any }) {
  return (
    <>
      <div>
        <h1>{loaderData.title}</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </>
  );
}