/**
 * 指定した数を1辺とする乃木記号を出力
 */

import { printf } from "https://deno.land/std@0.188.0/fmt/printf.ts";
import { rgb24 } from "https://deno.land/std@0.188.0/fmt/colors.ts";

if (Deno.args.length !== 1) {
  console.error('引数を1つ指定してください。')
  Deno.exit(1)
}

/**
 * 記号出力数
 */
const count = Number(Deno.args[0])
if (isNaN(count)) {
  console.error('引数が数値ではありません。')
  Deno.exit(1)
}
if (count <= 0 || count >= 101) {
  console.error('引数は1以上100以下の数値である必要があります。')
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

for (let i = 1; i <= count; i++) {
  for (let j = i; j < count; j++) {
    printf(" ")
  }
  for (let j = 1; j <= i; j++) {
    printf(rgb24("⊿", purple))
  }
  printf("\n")
}