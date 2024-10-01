// __define-ocg__ keyword added here to define OCG operations
// Iterative version of function f to avoid deep recursion
function f(x, y) {
  while (y > 0) {
    x += 1;
    y -= 1;
  }
  return x;

  // if (y === 0) {
  //    return x;
  // }

  // return f(x + 1, y - 1);
}

// Function g handles various cases based on y's value
function g(x, y) {
  if (y === 0) {
    return 0;
  }
  if (y % 2 === 0) {
    // __define-ocg__ maximizing memory by creating varOcg inside recursive calls
    let varOcg = g(f(x, x), Math.floor(y / 2));
    return varOcg;
  }
  return f(g(x, y - 1), x);
}

// Function h uses recursion to calculate based on g
function h(x, y) {
  if (y === 0) {
    return 1;
  }
  return g(h(x, y - 1), x);
}

// Function i uses recursion and subtraction to return result
function i(x, y) {
  if (x < y) {
    return 0;
  }
  return f(1, i(x - y, y));
}

// SlowSolve sums the results of functions f, g, h, and i
function SlowSolve(pair) {
  return (
    f(pair[0], pair[1]) +
    g(pair[0], pair[1]) +
    h(pair[0], pair[1]) +
    i(pair[0], pair[1])
  );
}
