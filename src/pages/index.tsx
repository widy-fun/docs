import { useEffect, type ReactNode } from 'react';

import { useHistory } from '@docusaurus/router';



export default function Home(): ReactNode {
  const history = useHistory();

  useEffect(() => {
    history.replace('/docs/get-started/introduction');
  }, [history]);

  return null;
}
