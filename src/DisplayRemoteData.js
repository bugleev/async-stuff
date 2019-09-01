import * as React from "react";

import { useAsyncTaskFetch } from "./lib/use-async-task-fetch";

const Err = ({ error }) => (
  <div className="error">
    Error: {error.name} {error.message}
  </div>
);

const Loading = ({ abort }) => (
  <div>
    Loading...
    <button type="button" onClick={abort}>
      Abort
    </button>
  </div>
);

const DisplayRemoteData = ({ id }) => {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const asyncTask = useAsyncTaskFetch(url);
  console.log(asyncTask.pending, "pending");
  console.log(asyncTask.started, "started");
  console.log(asyncTask.error, "error");
  return (
    <>
      <button
        type="button"       
        onClick={() => asyncTask.start()}
      >
        start
      </button>
      {asyncTask.error ? <Err error={asyncTask.error} /> : null}
      {asyncTask.started && asyncTask.pending ? <Loading abort={asyncTask.abort} /> : null}
      {asyncTask.result ? (
        <div className="data">RemoteData: {asyncTask.result.title}</div>
      ) : null}
    </>
  );
};

export default DisplayRemoteData;
