import React from "react";
import useCallApi from "~/hooks/useCallApi/useCallApi";

export default function HomePage() {
  const { loading, result, error, execute } = useCallApi(async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello world");
      }, 1000);
    });
  }, false);

  if (loading === true) {
    return <p>loading...</p>;
  }

  if (error !== null) {
    return (
      <div>
        <p>{error}</p>
        <button onClick={() => execute()}>re run</button>
      </div>
    );
  }

  if (result !== null) {
    return (
      <div>
        <p>{result}</p>
        <button onClick={() => execute()}>re run</button>
      </div>
    );
  }

  return (
    <div>
      <p>no call</p>
      <button onClick={() => execute()}>re run</button>
    </div>
  );
}
