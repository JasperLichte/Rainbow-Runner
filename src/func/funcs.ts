export const calcGravity = (m, g): number => (m / 100000) * g;

export const preventDefaultEvents = (): void => {
  const preventDefault = e => e.preventDefault();
  window.addEventListener('keydown', e => e.code === 'Space' && preventDefault(e));
};
