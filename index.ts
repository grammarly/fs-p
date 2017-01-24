/**
 * fs-extra on Promises.
 * Exports native fs methods as-is.
 * API is promised-based version of fs-extra package:
 * https://github.com/jprichardson/node-fs-extra#methods
 */

import {
  copy as copy_,
  move as move_,
  createFile as createFile_,
  mkdirp as mkdirp_,
  outputFile as outputFile_,
  outputJson as outputJson_,
  readJson as readJson_,
  remove as remove_,
  writeJson as writeJson_,
  ensureDir as ensureDir_,
  ensureFile as ensureFile_,
  ensureLink as ensureLink_,
  ensureSymlink as ensureSymlink_,
  emptyDir as emptyDir_,

  CopyFilter,
  CopyOptions,
  MoveOptions,
  MkdirOptions,
  OpenOptions
} from 'fs-extra'

export {
  copySync,
  createFileSync,
  mkdirsSync,
  mkdirpSync,
  outputFileSync,
  outputJsonSync,
  outputJSONSync,
  readJsonSync,
  readJSONSync,
  removeSync,
  walkSync,
  writeJsonSync,
  writeJSONSync,
  ensureDirSync,
  ensureFileSync,
  ensureLinkSync,
  ensureSymlinkSync,
  emptyDirSync,
  walk,

  CopyFilter,
  CopyOptions
} from 'fs-extra'

export * from 'fs'

type Callback = (err: Error) => void

const promisify1 = <T>(
  fn: (_: T, cb: Callback) => void
) => <U>(arg: T) => new Promise<U>((resolve, reject) => {
  fn(
    arg,
    (err: Error, result?: U) => {
      if (err) reject(err)
      else resolve(result)
    }
  )
})

const promisify2 = <T1, T2>(
  fn: (_1: T1, _2: T2, cb: Callback) => void
) => <U>(arg1: T1, arg2: T2) => new Promise<U>((resolve, reject) => {
  fn(
    arg1,
    arg2,
    (err: Error, result?: U) => {
      if (err) reject(err)
      else resolve(result)
    }
  )
})

const promisify3 = <T1, T2, T3>(
  fn: (_1: T1, _2: T2, _3: T3, cb: Callback) => void
) => <U>(arg1: T1, arg2: T2, arg3: T3) => new Promise<U>((resolve, reject) => {
  fn(
    arg1,
    arg2,
    arg3,
    (err: Error, result?: U) => {
      if (err) reject(err)
      else resolve(result)
    }
  )
})

export const copy = (src: string, dest: string, filterOrOptions?: CopyFilter | CopyOptions) => {
  if (filterOrOptions !== undefined) return promisify3<string, string, CopyFilter | CopyOptions>(
    copy_)<void>(src, dest, filterOrOptions)
  else return promisify2<string, string>(copy_)<void>(src, dest)
}

export const move = (src: string, dest: string, options?: MoveOptions) => {
  if (options !== undefined) return promisify3<string, string, MoveOptions>(
    move_)<void>(src, dest, options)
  else return promisify2<string, string>(move_)<void>(src, dest)
}

export const createFile = (path: string) => promisify1<string>(createFile_)<void>(path)

export const mkdirp = (dir: string, options?: MkdirOptions) => {
  if (options !== undefined) return promisify2<string, MkdirOptions>(mkdirp_)<void>(dir, options)
  else return promisify1<string>(mkdirp_)<void>(dir)
}

export const mkdirs = mkdirp

export const outputFile = (file: string, data: any) =>
  promisify2<string, any>(outputFile_)<void>(file, data)
export const outputJson = (file: string, data: any) =>
  promisify2<string, any>(outputJson_)<void>(file, data)
export const outputJSON = outputJson

export const readJson = (file: string, options?: OpenOptions) => {
  if (options !== undefined) return promisify2<string, OpenOptions>(readJson_)<any>(file, options)
  else return promisify1<string>(readJson_)<any>(file)
}
export const readJSON = readJson

export const remove = (dir: string) => promisify1<string>(remove_)<void>(dir)

export const writeJson = (file: string, object: any, options?: OpenOptions) => {
  if (options !== undefined) return promisify3<string, any, OpenOptions>(
    writeJson_)<void>(file, object, options)
  else return promisify2<string, any>(writeJson_)<void>(file, object)
}

export const ensureDir = (path: string) => promisify1<string>(ensureDir_)<void>(path)
export const ensureFile = (path: string) => promisify1<string>(ensureFile_)<void>(path)
export const ensureLink = (path: string) => promisify1<string>(ensureLink_)<void>(path)
export const ensureSymlink = (path: string) => promisify1<string>(ensureSymlink_)<void>(path)

export const emptyDir = (path: string) => promisify1<string>(emptyDir_)<void>(path)
