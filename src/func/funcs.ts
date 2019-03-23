export const calcGravity = (m: number, g: number): number => (m / 100000) * g;

export const preventDefaultEvents = (): void => {
  const preventDefault = e => e.preventDefault();

  const eventsToPreventDefaultOn = Object.freeze([
    // 'contextmenu',
  ]);

  eventsToPreventDefaultOn.forEach(eType => {
    window.addEventListener(eType, preventDefault);
  });

  const keysToPreventDefaultOn = Object.freeze([
    'Space',
  ]);

  window.addEventListener('keydown', e => {
    if (keysToPreventDefaultOn.includes(e.code)) {
      preventDefault(e);
    }
  });
};

export const parseVar = (value: any, type: string): any => {
  switch (type) {
    case 'str':
    case 'string':
    case 'char':
      return '' + value;
    case 'int':
      return parseInt(value);
    case 'double':
    case 'float':
      return parseFloat(value);
    case 'boolean':
    case 'bool':
      return !!value;
    default:
      return value;
  }
}
