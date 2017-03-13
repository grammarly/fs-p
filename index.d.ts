/**
 * fs-extra on Promises.
 * Exports native fs methods as-is.
 * API is promised-based version of fs-extra package:
 * https://github.com/jprichardson/node-fs-extra#methods
 */
import { CopyFilterFunction, CopyOptions, MoveOptions, MkdirOptions, OpenOptions } from 'fs-extra';
export { copySync, createFileSync, mkdirsSync, mkdirpSync, outputFileSync, outputJsonSync, outputJSONSync, readJsonSync, readJSONSync, removeSync, writeJsonSync, writeJSONSync, ensureDirSync, ensureFileSync, ensureLinkSync, ensureSymlinkSync, emptyDirSync, CopyFilter, CopyOptions } from 'fs-extra';
export * from 'fs';
export declare const copy: (src: string, dest: string, filterOrOptions?: RegExp | CopyFilterFunction | CopyOptions | undefined) => Promise<void>;
export declare const move: (src: string, dest: string, options?: MoveOptions | undefined) => Promise<void>;
export declare const createFile: (path: string) => Promise<void>;
export declare const mkdirp: (dir: string, options?: MkdirOptions | undefined) => Promise<void>;
export declare const mkdirs: (dir: string, options?: MkdirOptions | undefined) => Promise<void>;
export declare const outputFile: (file: string, data: any) => Promise<void>;
export declare const outputJson: (file: string, data: any) => Promise<void>;
export declare const outputJSON: (file: string, data: any) => Promise<void>;
export declare const readJson: (file: string, options?: OpenOptions | undefined) => Promise<any>;
export declare const readJSON: (file: string, options?: OpenOptions | undefined) => Promise<any>;
export declare const remove: (dir: string) => Promise<void>;
export declare const writeJson: (file: string, object: any, options?: OpenOptions | undefined) => Promise<void>;
export declare const ensureDir: (path: string) => Promise<void>;
export declare const ensureFile: (path: string) => Promise<void>;
export declare const ensureLink: (path: string) => Promise<void>;
export declare const ensureSymlink: (path: string) => Promise<void>;
export declare const emptyDir: (path: string) => Promise<void>;
