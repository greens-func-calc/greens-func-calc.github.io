// eslint-disable-next-line no-unused-vars
import { simplify, parse, evaluate, derivative } from "mathjs";

export function GreensFctCalc(y1, y2, mode="tex") {
  y1 = y1.replace(/\\cdot/g, "*");
  y2 = y2.replace(/\\cdot/g, "*");
  y1 = y1.replace(/xx/g, "x*x");
  y2 = y2.replace(/xx/g, "x*x");
  const y1_xs = y1;
  const y2_xs = y2;
  const y1_ts = y1.replace(/x/g, "t");
  const y2_ts = y2.replace(/x/g, "t");

  const y1_t = parse(y1_ts);
  const y2_t = parse(y2_ts);

  const Ws = `${y1_t.toString()} * ${derivative(y2_t, "t").toString()} - ${y2_t.toString()} * ${derivative(y1_t, "t").toString()}`;
  const W = simplify(parse(Ws)).toString();
 
  const Gs = `(${y1_ts} * ${y2_xs} - ${y1_xs} * ${y2_ts}) / (${W})`;
  const simp = simplify(parse(Gs));
  
  var simp2 = simp.toString().replace("Infinity * ", "");
  if (simp2.charAt(0) === "(" && simp2.charAt(simp2.length - 1) === ")") {
    simp2 = simp2.substring(1,simp2.length - 1);
  }
  const simp3 = parse(simp2);

  return mode === "string" ? simp3.toString() : simp3.toTex();
}

export function y_p(y1, y2, f, x_o) {
  const Gs = GreensFctCalc(y1, y2, "string");
  const integrand = simplify(parse(`(${Gs}) * ${f}`)).toString();
  const i1 = integrand.replace(/t/g, "x");
  const i2 = integrand.replace(/t/g, x_o);
  const yps = `(${i1}) - (${i2})`;
  return simplify(parse(yps)).toTex();
}
