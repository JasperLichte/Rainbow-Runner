export const calcGravity = (m, g) => (m / 100000) * g;

export const preventDefaultEvents = _ => {
  const preventDefault = e => e.preventDefault();
  window.addEventListener('keydown', e => e.code === 'Space' && preventDefault(e));
};
