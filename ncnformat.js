/**
 * 入力英字テキストをサイン調に変換
 */

import { printf } from "https://deno.land/std@0.188.0/fmt/printf.ts";

if (Deno.args.length !== 1) {
  console.error('引数を1つ指定してください。')
  Deno.exit(1)
}

/**
 * 変換テキスト
 */
const target = Deno.args[0]
if (!/^[A-Z]+$/.test(target)) {
  console.error('引数は大文字英字のみの文字列を指定してください。')
  Deno.exit(1)
}

target.split('').forEach(t => {
  /**
   * サイン調文字コード
   * Unicode MATHEMATICAL BOLD SCRIPT CAPITAL
   */
  const convertCode = `1200${t.codePointAt() - 49}`
  printf(String.fromCodePoint(convertCode))
})
console.log("")