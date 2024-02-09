const fibonacci = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

const result = fibonacci(3);
const result2 = fibonacci(50);
console.log("Result", result2);
