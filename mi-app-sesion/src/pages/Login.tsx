import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('token', 'fake-jwt-token');
      navigate('/dashboard', { replace: true });
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Tu nombre"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin} style={{ marginLeft: '1rem' }}>
        Iniciar Sesión
      </button>
    </div>
  );
};

export default Login;