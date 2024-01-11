'use client';
import React from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  return (
    <div>
      <p>An unexpected error has occurred!</p>
      <p>{error.message}</p>
      <button className='btn btn-warning' onClick={() => reset()}>
        Retry
      </button>
      {/* because of this onClick event here, this page needs to be marked as 'use client' */}
      {/* also, the reset button is not always necessary since the users might overuse it and our server gets into trouble */}
    </div>
  );
}

// show this message if any error occurred in our app
// this error page can not capture errors related to the 'layout page', for that we can create another custom page called 'global-error.tsx'

// in live-apps instead of logging the errors only visible to the user, we can log them somewhere permanent so we can later on fix that. For that we can use services like 'sentry.io'
