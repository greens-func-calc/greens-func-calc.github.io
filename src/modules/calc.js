// algebra
//
// math.js has support for symbolic computation (CAS). It can parse
// expressions in an expression tree and do algebraic operations like
// simplification and derivation on this tree.

// load math.js (using node.js)
// eslint-disable-next-line no-unused-vars
const {simplify, parse, evaluate, derivative} = require("mathjs");

export function GreensFctCalc(y1, y2) {
  const y1_xs = y1;
  const y2_xs = y2;
  const y1_ts = y1.replace(/x/g, "t");
  const y2_ts = y2.replace(/x/g, "t");

  // const y1_x = parse(y1_xs);
  // const y2_x = parse(y2_xs);
  const y1_t = parse(y1_ts);
  const y2_t = parse(y2_ts);

  const Ws = `${y1_t.toString()} * ${derivative(y2_t, "t").toString()} - ${y2_t.toString()} * ${derivative(y1_t, "t").toString()}`;
  const W = simplify(parse(Ws)).toString();
 
  const Gs = `(${y1_ts} * ${y2_xs} - ${y1_xs} * ${y2_ts}) / (${W})`;
  return simplify(parse(Gs)).toString();
}

export function y_p(y1, y2, f, x_o) {
  const Gs = GreensFctCalc(y1, y2);
  const integrand = simplify(parse(`(${Gs}) * ${f}`)).toString();
  const i1 = integrand.replace(/t/g, "x");
  const i2 = integrand.replace(/t/g, x_o);
  const yps = `(${i1}) - (${i2})`;
  return simplify(parse(yps)).toString();
}
