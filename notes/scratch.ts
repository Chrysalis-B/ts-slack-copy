
// example optional chaining

const x: {
  user: {
    name: string,
    address?: {
      street: string,
      city: string
    }
  }
} = {} as any;

console.log(x.user.address?.city)


// example nullish coalescin

class Foo {
  #name: string;
  constructor(rawName?: string) {
    this.#name = rawName ?? '(no name)'
  }
  log() {
    console.log(this.#name)
  }
}


// example namespaced exports

export * as foo from '../src/data/channels'


// example ariatic tuple types

type Fooy<T extends any[]> = [boolean, ...T, boolean]


// example labeled tuple types

type Address = [streetNumber: number, city: string, state: string, zip: number]

function printAddress(address: Address) { }

printAddress([122, 'San Francisco', 'CA', 1231]);


// example recursive types aliases

type Primitive = number | string | null | boolean;

type JSONValue = Primitive | JSONValue[] | { [key: string]: JSONValue };


// example template type literals

type Corner = `${'top' | 'bottom'}-${'left' | 'right'}`


// example with ts expect error

// @ts-expect-error
const num1: number = 'hello';
// @ts-ignore
const num2: number = 'hello';


// example error handling with unknown type

function somethingRisky() { };

//  1
function isError(err: any): err is Error {
  return err instanceof Error;
}

try {
  somethingRisky();
}
catch (err: unknown) {
  if (isError(err)) {
    console.error(err.stack);
  }
  else {
    console.error(err);
  }
}

// 2 (useful for tests)
function assertIsError(err: any): asserts err is Error {
  if (!(err instanceof Error)) throw new Error(`Not an instance of error: ${err}`);
}

try {
  somethingRisky();
}
catch (err: unknown) {
  assertIsError(err)
  console.error(err.stack);
}


// type only imports (keeps code bundles smaller)

import type { useAsyncDataEffect } from '../src/utils/api'