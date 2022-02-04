// Test Suite - Mathematical Operations

// Test Cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division


var assert = require('assert');

describe('Math Operations - Test Suite', function(){

    it('Addition test', function(){

        var a = 10;
        var b = 10;

        var c = a+b;

        assert.equal(c,20);

    });

    it('Subtraction test', function(){

        var a = 10;
        var b = 10;

        var c = a - b;

        assert.equal(c,0);
    });

    it('Multiplication test', function(){

        var a = 10;
        var b = 10;

        var c = a * b;

        assert.equal(c,100);
    });

    it('Division test', function(){

        var a = 10;
        var b = 10;

        var c = a/b;

        assert.equal(c,1);
    });

});