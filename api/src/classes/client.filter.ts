export enum ClientFilterLogic {
  match,
  fullMatch,
  or,
  and,
}

export class ClientFilter<A> {
  constructor(private data: Partial<{[K in keyof A]: ClientFilterLogic}>) {}
}
