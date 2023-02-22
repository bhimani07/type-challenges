type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
type replaced2 = ReplaceAll<'foobarfoobar', 'ob', 'b'> // fobarfobar

export type ReplaceAll<
    S extends string,
    From extends string,
    To extends string,
> = From extends '' ? S : S extends `${infer V}${From}${infer R}` ? `${V}${To}${ReplaceAll<`${R}`, From, To>}` : S
