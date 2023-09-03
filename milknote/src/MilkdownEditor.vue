<script setup lang="ts">
import { Milkdown, useEditor } from '@milkdown/vue';

import { defaultValueCtx, Editor, rootCtx } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark'
import { gfm } from '@milkdown/preset-gfm'
import { history } from '@milkdown/plugin-history'
import { clipboard } from '@milkdown/plugin-clipboard'
import { emoji } from '@milkdown/plugin-emoji'
import { cursor } from '@milkdown/plugin-cursor'

import { nord } from '@milkdown/theme-nord'
import { prism } from '@milkdown/plugin-prism'

const markdown =
`# Milkdown Vue Commonmark

> You're scared of a world where you're needed.

This is a demo for using Milkdown with **Vue**.`

useEditor((root) => {
  return Editor.make()
    .config(nord)
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, markdown)
    })
    .use(commonmark)
    .use(gfm)
    .use(history)
    .use(clipboard)
    .use(emoji)
    .use(prism)
    .use(cursor)
})
</script>

<template>
  <Milkdown />
</template>
