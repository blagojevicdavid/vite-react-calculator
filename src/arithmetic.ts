export type Op = '+' | '-' | '*' | '/'

const operations: Record<Op, (a: number, b: number) => number> = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}

export function compute(op: Op, a: number, b: number): number {
  return operations[op](a, b)
}
