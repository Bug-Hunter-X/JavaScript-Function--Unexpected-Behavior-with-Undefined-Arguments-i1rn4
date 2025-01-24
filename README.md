# JavaScript Function: Handling Null and Undefined Arguments

This repository demonstrates a common JavaScript error involving unexpected behavior when dealing with null and undefined function arguments. The initial code handles null values correctly but fails to handle undefined values, leading to potential runtime errors or unexpected results.

## Bug Description
The `myFunc` function is designed to add two numbers. It correctly handles null arguments by returning 0. However, it does not explicitly handle undefined arguments, resulting in `NaN` (Not a Number) if either `a` or `b` is undefined.

## Solution
The improved version handles both null and undefined values, providing more robust error handling and predictable behavior.