import { Navigate, Outlet } from 'react-router-dom';

const PrivateLayout = () => {
  const isLogin = !!localStorage.getItem('accessToken');

  return (
    <>
      {isLogin ? (
        <main className="hide-scroll h-[calc(100%-48px)] overflow-scroll">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/intro" />
      )}
    </>
  );
};

export default PrivateLayout;
