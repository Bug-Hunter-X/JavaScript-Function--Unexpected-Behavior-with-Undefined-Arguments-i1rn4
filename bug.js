function myFunc(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; // Perform addition if both are not null
}

console.log(myFunc(null, 5)); // Output: 0
console.log(myFunc(10, null)); // Output: 0
console.log(myFunc(5, 10)); // Output: 15