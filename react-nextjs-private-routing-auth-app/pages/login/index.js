import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const Login = () => {
  const router = useRouter();

  //ログイン処理（CookieにsignedIn=trueとする）
  const login = (e) => {
    Cookies.set('signedIn', 'true');
    router.push('/private');
  };

  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={(e) => {
          login(e);
        }}
      >
        ログイン
      </button>
      <div>
        <Link href="/">
          <a>Homeへ</a>
        </Link>
      </div>
    </div>
  );
};

export default Login;
