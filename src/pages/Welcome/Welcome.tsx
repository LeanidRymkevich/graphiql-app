import { FC, useState } from 'react';

const Welcome: FC = (): JSX.Element => {
  const [hasError, setHasError] = useState(false);

  if (hasError) throw new SyntaxError();

  return (
    <div style={{ height: '140vh' }}>
      {/*140vh for sticky header testing */}
      <p>Welcome Page</p>
      <button onClick={() => setHasError(true)}>Throw Error</button>
    </div>
  );
};

export default Welcome;