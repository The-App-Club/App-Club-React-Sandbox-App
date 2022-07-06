import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

//認証コンポーネント読み込み
import Auth from '../../components/auth';

const Private = () => {
  const router = useRouter();

  //ログアウト処理
  const logout = () => {
    Cookies.remove('signedIn');
    router.replace('/login');
  };

  return (
    <Auth>
      <h1>Private</h1>
      <button onClick={logout}>ログアウト</button>
      <div>
        <Link href="/">
          <a>Homeへ</a>
        </Link>
      </div>
    </Auth>
  );
};

export default Private;
