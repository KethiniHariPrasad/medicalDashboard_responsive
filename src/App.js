import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from './Components/LoginPage/Login';
import MainPage from './Components/Mainpage/MainPage';
import { useEffect, useState } from 'react';
import { API_CALLS, gettokendata } from './Features/apiCalls';
import { message, Spin } from 'antd';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const Token = await gettokendata();
        localStorage.Token = Token;
      } catch (error) {
        console.error('Error getting token:', error);
      }
    };
    fetchData();
  }, []);

  const handleLogin = (state) => {
    setIsLoading(true);
    const payload = {
      username: state.username,
      password: state.password,
      mobile: '7259605995',
    };

    API_CALLS.callCheckUser(payload)
      .then(({ data }) => {
        if (data.uname) {
          localStorage.setItem('username', data.uname);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
          message.error('Invalid Credentials', 3);
        }
      })
      .catch((error) => {
        console.error('Error while checking user:', error);
        setIsLoggedIn(false);
        message.error('An error occurred', 3);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Router>
      {isLoading ? (
        <Spin
          size="large"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      ) : (
        <Routes>
          {/* Route to render LoginPage component */}
          <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
          {/* Route to render MainPage component only when isLoggedIn is true */}
          {isLoggedIn && <Route path="/home" element={<MainPage />} />}
          {/* Fallback route - redirect to LoginPage if no match */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
