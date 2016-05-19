/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var sessionStorage = require('../src/index.js');

var storageKey1 = 'storageKey1';
var storageKey2 = 'storageKey2';
var storageVal1 = 'storageVal';
var storageVal2 = {a: 1, b: 2};

describe('测试文件', function () {
    it('.set/.get', function () {
        expect(sessionStorage.set(storageKey1, storageVal1)).toEqual(true);
        expect(sessionStorage.get(storageKey1)).toEqual(storageVal1);
    });

    it('.setJSON/.getJSON', function () {
        expect(sessionStorage.setJSON(storageKey2, storageVal2)).toEqual(true);
        expect(sessionStorage.getJSON(storageKey2)).toEqual(storageVal2);
    });

    it('.remove/.size', function () {
        expect(sessionStorage.size()).toEqual(2);
        expect(sessionStorage.remove(storageKey1)).toEqual(true);
        expect(sessionStorage.size()).toEqual(1);
    });

    it('.clear/.size', function () {
        expect(sessionStorage.clear()).toEqual(true);
        expect(sessionStorage.size()).toEqual(0);
    });
});
