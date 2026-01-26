import { options } from './flags';

type RawFlag = (typeof options)[number]['flags'];

type SplitFlags<T extends string> = T extends `${infer A},${infer B}` ? Trim<A> | Trim<B> : Trim<T>;

type Trim<T extends string> = T extends ` ${infer R}` | `${infer R} ` ? Trim<R> : T;

export type Flag = SplitFlags<RawFlag>;
