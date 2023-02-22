//type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

export type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S : S extends `${infer V}${From}${infer R}` ? `${V}${To}${R}` : S
