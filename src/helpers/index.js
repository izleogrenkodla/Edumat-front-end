export function uuid() {
  const min = 0;
  const max = 1000;
  return Math.random().toString(16).slice(2);
};