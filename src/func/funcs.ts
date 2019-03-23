export const calcGravity = (m: number, g: number): number => (m / 100000) * g;

export const preventDefaultEvents = (): void => {
  const preventDefault = e => e.preventDefault();

  const keysToPreventDefaultOn = Object.freeze([
    'Space',
  ]);

  window.addEventListener('keydown', e => {
    if (keysToPreventDefaultOn.includes(e.code)) {
      preventDefault(e);
    }
  });
};
