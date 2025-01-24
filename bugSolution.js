function myFunc(a, b) {
  // Check for both null and undefined using loose equality
  if (a == null || b == null) {
    return 0; // Handle null or undefined values
  }
  return a + b; // Perform addition if both are not null or undefined
}

console.log(myFunc(null, 5)); // Output: 0
console.log(myFunc(10, null)); // Output: 0
console.log(myFunc(5, 10)); // Output: 15
console.log(myFunc(undefined, 5)); // Output: 0
console.log(myFunc(10, undefined)); // Output: 0