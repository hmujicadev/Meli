import { FC, ReactElement } from 'react';

interface IProps {
  clearState: () => void
}

const Error: FC<IProps> = (): ReactElement => (<div>Error</div>);

export { Error };
