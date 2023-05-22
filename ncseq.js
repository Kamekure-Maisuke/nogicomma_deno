/**
 * 指定した数だけ乃木記号を出力
 */

import { rgb24 } from "https://deno.land/std@0.188.0/fmt/colors.ts";

if (Deno.args.length !== 1) {
  console.error('引数を1つ指定してください。')
  Deno.exit(1)
}

/**
 * 記号出力数
 */
const count = Number(Deno.args[0])
if (isNaN(count) || count <= 0) {
  console.error('引数には1以上の数値を指定してください。')
  Deno.exit(1)
}

/**
 * 出力色
 */
const purple = {
  r: 128,
  g: 0,
  b: 128
}

for (let i = 0; i < count; i++) {
  console.log(rgb24("⊿", purple))
}