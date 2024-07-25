import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import mdContainer from 'markdown-it-container'
import { getHighlighter } from 'shiki'

import type MarkdownIt from 'markdown-it'

const highlighter = await getHighlighter({
  theme: 'material-theme-lighter',
})

export function mdPlugin(md: MarkdownIt) {
  md.use(mdContainer, 'component', {

    validate(params) {
      return !!params.trim().match(/^component\s*(.*)$/) || !!params.trim().match(/^example\s*(.*)$/)
    },

    render(tokens, idx) {
      const pluginName = tokens[0].info
      if (pluginName.includes('example')) {
        if (tokens[idx].nesting !== 1) {
          return `</Example>`
        }
      }
      else {
        if (tokens[idx].nesting !== 1) {
          return `</Component>`
        }
      }

      const nameToken = tokens[idx + 2]
      if (nameToken?.type !== 'inline') {
        throw new Error(`Incorrect file token type: ${nameToken.type}`)
      }

      const name = nameToken?.children?.[0]?.content ?? ''
      const filePath = resolve('component', `${name}.vue`)
      if (!existsSync(filePath)) {
        throw new Error(`Incorrect file path: ${filePath}`)
      }

      const code = readFileSync(filePath, 'utf8')
      const html = highlighter.codeToHtml(code, { lang: 'vue' })

      const encodedCode = encodeURIComponent(code)
      const encodedHtml = encodeURIComponent(html)
      if (pluginName.includes('example')) {
        return `<Example name="${name}">`
      }

      return `<Component name="${name}" code="${encodedCode}" html="${encodedHtml}">`
    },
  })
}
