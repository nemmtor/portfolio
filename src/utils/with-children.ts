import type { ComponentChildren } from 'preact';

export type WithChildren<T = object> = {
  children: ComponentChildren;
} & T;
