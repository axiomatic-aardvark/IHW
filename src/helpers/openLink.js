export default url => event => {
  event.preventDefault();
  const win = window.open(url, "_blank");
  win.focus();
};
