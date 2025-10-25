import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Dashboard (protegido)</h1>
      <p>¡Bienvenido! Solo los usuarios autenticados ven esto.</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Dashboard;