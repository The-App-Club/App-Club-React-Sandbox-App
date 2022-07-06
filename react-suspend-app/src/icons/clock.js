function Clock({fillColor = "#eeeeee"}) {
  return (
    <svg width="20" height="20" fill="none" transform="scale(1.45)" xmlns="http://www.w3.org/2000/svg">
      <path d="M.452 10c0 8 2.016 9.984 10.048 9.984S20.548 18 20.548 10 18.532.016 10.5.016.452 2 .452 10z" fill={fillColor} />
      <path fill="#101010" d="M9.452 3.016h2v8h-2zm6 6v2h-4v-2z" />
    </svg>
  );
}

export { Clock };
