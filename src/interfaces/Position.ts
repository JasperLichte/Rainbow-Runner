export default interface Position {
  x: number,
  y: number,
  z?: number,
  vel?: {
    x: number,
    y: number,
    z?: number
  }
};
