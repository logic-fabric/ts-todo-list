export function HomePage(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;

  return <h1>{sum(11, 31)} is the meaning of life.</h1>;
}
