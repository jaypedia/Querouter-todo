import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h3>{error.statusText}</h3>
        {error.data?.message && <p>{error.data.message}</p>}
        {error.status === 404 && <p>This is not the web page you are looking for.</p>}
        <Link to="/">Go to main</Link>
      </div>
    );
  }

  return (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Go to main</Link>
    </>
  );
};
