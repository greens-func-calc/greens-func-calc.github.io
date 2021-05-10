// eslint-disable-next-line no-unused-vars
import { simplify, parse, derivative } from "mathjs";

function simplifyExpression(...args){
  const simp = simplify(...args);
  const tex = simp.toTex().replace(/~/g, " ");
  simp.toTex = () => tex;
  return simp;
}

function parseExpression(...args){
  const parsed = parse(...args);
  const tex = parsed.toTex().replace(/~/g, " ");
  parsed.toTex = () => tex;
  return parsed;
}

export function GreensFctCalc(y1, y2, mode="tex") {
  const y1_xs = y1;
  const y2_xs = y2;
  const y1_ts = y1.replace(/x/g, "t ");
  const y2_ts = y2.replace(/x/g, "t ");
  const W = Wronskian(y1, y2, "string");
 
  if (W == "0") return "";

  const Gs = `(${y1_ts} * ${y2_xs} - ${y1_xs} * ${y2_ts}) / (${W})`;
  const simp = simplifyExpression(parseExpression(Gs));
  
  var simp2 = simp.toString().replace("Infinity * ", "");
  const simp3 = parseExpression(simp2);

  return mode === "string" ? simp3.toString() : simp3.toTex();
}

export function Wronskian(y1, y2, mode="tex") {
  const y1_ts = y1.replace(/x/g, "t ");
  const y2_ts = y2.replace(/x/g, "t ");

  const y1_t = parseExpression(y1_ts);
  const y2_t = parseExpression(y2_ts);

  const Ws = `(${y1_t.toString()}) * (${derivative(y2_t, "t").toString()}) - (${y2_t.toString()}) * (${derivative(y1_t, "t").toString()})`;
  let W = simplifyExpression(parseExpression(Ws)).toString();
  W = W.replace(/\s/g, "");
  W = parseExpression(W);

  return mode === "string" ? W.toString() : W.toTex();
}
