# fs-p

`fs-p` is a TypeScript-friendly promise-based wrapper on top of [fs-extra](https://github.com/jprichardson/node-fs-extra) package.

## Why?

Previously, there was no TypeScript-friendly promise-based `fs-extra` implementation. Now there is.

## Installation

`npm install --save fs-p` or `yarn add fs-p`

## Usage

`fs-p` api is no different from `fs-extra`, except, async methods are wrapped in Promises.
Check out the original `fs-extra` [documentation](https://github.com/jprichardson/node-fs-extra/blob/1.x/README.md#methods).

## Promise-based async

Most methods are async and return Promises, unlike the original `fs-extra` callback-based implementaion.

Sync methods, on the other hand, will throw if an error occurs.

### `fs-p` vs `fs-extra`

Methods with no return value example:

```typescript
import * as fs from 'fs-extra'
import * as fsp from 'fs-p'

// fs-extra callback style
fs.copy('/tmp/myfile', '/tmp/mynewfile', (err: Error) => {
  if (err) return console.error(err)
  console.log("success!")
}) // copies file

// fs-p promise-based
fsp.copy('/tmp/mydir', '/tmp/mynewdir').then(
  () => console.log('success!')
).catch((err) => console.error(err))

// fs-p async/await
try {
  await fsp.copy('/tmp/mydir', '/tmp/mynewdir')
  console.log('success!')
} catch (err) { console.error(err) }
```

Methods with a return value:

```typescript
import * as fs from 'fs-extra'
import * as fsp from 'fs-p'

// fs-extra callback style
fs.readJson('./package.json', (err: Error, packageObj: any) => {
  console.log(packageObj.version) // => 0.1.3
})

// fs-p promise-based
fsp.readJson('./package.json').then(
  (packageObj: any) => console.log(packageObj.version) // => 0.1.3
).catch((err) => console.error(err))

// fs-p async/await
try {
  const packageObj: any = await fsp.readJson('./package.json')
  console.log(packageObj.version) // => 0.1.3
} catch (err) { console.error(err) }
```


# Credits

`fs-p` is just a small wrapper over a remarkable `fs-extra` package. Thus, all the credit goes to [`fs-extra` authors](https://github.com/jprichardson/node-fs-extra/#credit)

# License

Copyright 2017 Grammarly, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
