import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <header>header</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
