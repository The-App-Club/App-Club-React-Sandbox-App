const IconHamburger = ({ isOpen }) => {
  // https://css-tricks.com/snippets/svg/svg-hamburger-menu/
  // https://stackoverflow.com/questions/39672002/close-icon-using-svg-is-not-displaying
  if (isOpen) {
    return (
      <svg viewBox="0 0 43.7 43.7" width="50" transform="translate(0, 20)">
        <path
          d="M35.6 34.4L28 26.8l7.6-7.6c.2-.2.2-.5 0-.7l-.5-.5c-.2-.2-.5-.2-.7 0l-7.6 7.6-7.5-7.6c-.2-.2-.5-.2-.7 0l-.6.6c-.2.2-.2.5 0 .7l7.6 7.6-7.6 7.5c-.2.2-.2.5 0 .7l.5.5c.2.2.5.2.7 0l7.6-7.6 7.6 7.6c.2.2.5.2.7 0l.5-.5c.2-.2.2-.5 0-.7z"
          stroke="#000"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 10 8" width="40" transform="translate(0, 15)">
        <path
          d="M1 1h8M1 4h 8M1 7h8"
          stroke="#000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
};

export { IconHamburger };
