import { Navber } from './Navber/Navber';

export const Layout = ({ children }) => {
  return (
    <div>
      <Navber />
      {children}
    </div>
  );
};
