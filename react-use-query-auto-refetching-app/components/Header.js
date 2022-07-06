const Header = ({ interval }) => {
  return <h1>Auto Refetch with stale-time set to {interval / 1000 || 1}s</h1>;
};

export default Header;
