/**
 * tod画像出力
 */
import asciify from 'npm:asciify-image'
import { rgb24 } from "https://deno.land/std@0.188.0/fmt/colors.ts";

const options = {
  fit: 'box',
  width: 80,
  height: 40
}

asciify('./images/angel-penguin.png', options, (err, asciified) => {
  if (err) {
    console.error('画像が変換できませんでした。')
    Deno.exit(1)
  }
  console.log(asciified)
})
