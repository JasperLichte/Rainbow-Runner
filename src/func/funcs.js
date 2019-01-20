export const calcGravity = (m, g) => (m / 100000) * g;

export const preventDefaultEvents = _ => {
  const preventDefault = event => event.preventDefault();
  window.addEventListener('keydown', preventDefault);
};
