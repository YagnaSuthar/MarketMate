import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import styles from '../../styles/Header.module.css';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      logout();
      navigate('/login');
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        MarketMate
      </div>
      
      <nav className={styles.header__nav}>
        <div className={styles.header__user}>
          <span>Welcome, {user?.name}</span>
          <span className={styles.header__role}>({user?.role})</span>
          <button onClick={handleLogout} className={styles.header__logout}>
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 