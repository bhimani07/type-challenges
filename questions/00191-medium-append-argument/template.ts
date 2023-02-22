// type Fn = (a: number, b: string) => number

// type Result = AppendArgument<Fn, boolean> 
// expected be (a: number, b: string, x: boolean) => number

export type AppendArgument<Fn extends Function, A> =
    Fn extends ((...args: infer T) => infer R) ? (...args: [...T, A]) => R : never

