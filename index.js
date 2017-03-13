/**
 * fs-extra on Promises.
 * Exports native fs methods as-is.
 * API is promised-based version of fs-extra package:
 * https://github.com/jprichardson/node-fs-extra#methods
 */
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var fs_extra_2 = require("fs-extra");
exports.copySync = fs_extra_2.copySync;
exports.createFileSync = fs_extra_2.createFileSync;
exports.mkdirsSync = fs_extra_2.mkdirsSync;
exports.mkdirpSync = fs_extra_2.mkdirpSync;
exports.outputFileSync = fs_extra_2.outputFileSync;
exports.outputJsonSync = fs_extra_2.outputJsonSync;
exports.outputJSONSync = fs_extra_2.outputJSONSync;
exports.readJsonSync = fs_extra_2.readJsonSync;
exports.readJSONSync = fs_extra_2.readJSONSync;
exports.removeSync = fs_extra_2.removeSync;
exports.writeJsonSync = fs_extra_2.writeJsonSync;
exports.writeJSONSync = fs_extra_2.writeJSONSync;
exports.ensureDirSync = fs_extra_2.ensureDirSync;
exports.ensureFileSync = fs_extra_2.ensureFileSync;
exports.ensureLinkSync = fs_extra_2.ensureLinkSync;
exports.ensureSymlinkSync = fs_extra_2.ensureSymlinkSync;
exports.emptyDirSync = fs_extra_2.emptyDirSync;
__export(require("fs"));
var promisify1 = function (fn) { return function (arg) { return new Promise(function (resolve, reject) {
    fn(arg, function (err, result) {
        if (err)
            reject(err);
        else
            resolve(result);
    });
}); }; };
var promisify2 = function (fn) { return function (arg1, arg2) { return new Promise(function (resolve, reject) {
    fn(arg1, arg2, function (err, result) {
        if (err)
            reject(err);
        else
            resolve(result);
    });
}); }; };
var promisify3 = function (fn) { return function (arg1, arg2, arg3) { return new Promise(function (resolve, reject) {
    fn(arg1, arg2, arg3, function (err, result) {
        if (err)
            reject(err);
        else
            resolve(result);
    });
}); }; };
exports.copy = function (src, dest, filterOrOptions) {
    if (filterOrOptions !== undefined)
        return promisify3(fs_extra_1.copy)(src, dest, filterOrOptions);
    else
        return promisify2(fs_extra_1.copy)(src, dest);
};
exports.move = function (src, dest, options) {
    if (options !== undefined)
        return promisify3(fs_extra_1.move)(src, dest, options);
    else
        return promisify2(fs_extra_1.move)(src, dest);
};
exports.createFile = function (path) { return promisify1(fs_extra_1.createFile)(path); };
exports.mkdirp = function (dir, options) {
    if (options !== undefined)
        return promisify2(fs_extra_1.mkdirp)(dir, options);
    else
        return promisify1(fs_extra_1.mkdirp)(dir);
};
exports.mkdirs = exports.mkdirp;
exports.outputFile = function (file, data) {
    return promisify2(fs_extra_1.outputFile)(file, data);
};
exports.outputJson = function (file, data) {
    return promisify2(fs_extra_1.outputJson)(file, data);
};
exports.outputJSON = exports.outputJson;
exports.readJson = function (file, options) {
    if (options !== undefined)
        return promisify2(fs_extra_1.readJson)(file, options);
    else
        return promisify1(fs_extra_1.readJson)(file);
};
exports.readJSON = exports.readJson;
exports.remove = function (dir) { return promisify1(fs_extra_1.remove)(dir); };
exports.writeJson = function (file, object, options) {
    if (options !== undefined)
        return promisify3(fs_extra_1.writeJson)(file, object, options);
    else
        return promisify2(fs_extra_1.writeJson)(file, object);
};
exports.ensureDir = function (path) { return promisify1(fs_extra_1.ensureDir)(path); };
exports.ensureFile = function (path) { return promisify1(fs_extra_1.ensureFile)(path); };
exports.ensureLink = function (path) { return promisify1(fs_extra_1.ensureLink)(path); };
exports.ensureSymlink = function (path) { return promisify1(fs_extra_1.ensureSymlink)(path); };
exports.emptyDir = function (path) { return promisify1(fs_extra_1.emptyDir)(path); };
