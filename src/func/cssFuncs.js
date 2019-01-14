export function setCSSVar(name, value) {
  const html = document.getElementsByTagName('html')[0];
  html.style.setProperty(name, value);
}
