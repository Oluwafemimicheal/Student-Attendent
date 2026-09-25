import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const ProtectedRoute = () => {
  const { data: user, isLoading, isFetching, isError } = useAuth();

  if (isLoading || isFetching) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <p>Verifying session, please wait...</p>
      </div>
    );
  }

  const isAuthenticated = user && (user.id || user._id);

  if (isError || !isAuthenticated) {
    console.log("ProtectedRoute - Redirecting to login because:", { isError, isAuthenticated });
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

