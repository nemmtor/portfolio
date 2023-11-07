import type { WithChildren } from '../utils';

export const Landing = ({ children }: WithChildren) => {
  return <div className="p-8">{children}</div>;
};
