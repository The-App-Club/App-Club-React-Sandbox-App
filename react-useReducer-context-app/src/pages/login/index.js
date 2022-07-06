import {useContext, useState} from 'react';
import {login} from '../../plugins/login';
import {AuthContext} from '../../context/auth';

import {LoginContainer} from '../../components/login/LoginContainer';
import {LoginCard} from '../../components/login/LoginCard';
import {LoginContent} from '../../components/login/LoginContent';
import {LoginForm} from '../../components/login/LoginForm';
import {LoginFormHeader} from '../../components/login/LoginFormHeader';
import {LoginEmail} from '../../components/login/LoginEmail';
import {LoginPassword} from '../../components/login/LoginPassword';
import {LoginFormButton} from '../../components/login/LoginFormButton';
import {LoginErrorMessage} from '../../components/login/LoginErrorMessage';

export const Login = () => {
  const {dispatch} = useContext(AuthContext);

  const [data, setData] = useState({
    email: '',
    password: '',
    isSubmitting: false,
    errorMessage: null,
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    setData({
      ...data,
      isSubmitting: true,
      errorMessage: null,
    });

    try {
      const resultLoginInfo = await login({
        email: data.email,
        password: data.password,
      });
      if (resultLoginInfo.success) {
        dispatch({
          type: 'LOGIN',
          payload: resultLoginInfo,
        });
      } else {
        setData({
          ...data,
          isSubmitting: false,
          errorMessage: resultLoginInfo.message || error.statusText,
        });
      }
    } catch (error) {
      setData({
        ...data,
        isSubmitting: false,
        errorMessage: error.message || error.statusText,
      });
    }
  };

  const renderErrorMessage = ({errorMessage}) => {
    if (errorMessage) {
      return <LoginErrorMessage>{errorMessage}</LoginErrorMessage>;
    }
    return null;
  };

  return (
    <LoginContainer>
      <LoginCard>
        <LoginContent>
          <LoginForm handleSubmit={handleFormSubmit}>
            <LoginFormHeader>Login</LoginFormHeader>

            <LoginEmail
              email={data.email}
              handleChange={handleInputChange}
            ></LoginEmail>

            <LoginPassword
              password={data.password}
              handleChange={handleInputChange}
            ></LoginPassword>

            {renderErrorMessage({errorMessage: data.errorMessage})}

            <LoginFormButton isSubmitting={data.isSubmitting}></LoginFormButton>
          </LoginForm>
        </LoginContent>
      </LoginCard>
    </LoginContainer>
  );
};

export default Login;
