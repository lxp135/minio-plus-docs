import DefaultTheme from 'vitepress/theme'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

import vitepressNprogress from 'vitepress-plugin-nprogress'
import 'vitepress-plugin-nprogress/lib/css/index.css'

import './style.css'
import Component from './component/Component.vue'
import Example from './component/Example.vue'

const modules: Record<string, any> = import.meta.glob('../../component/**/*.vue', {
  eager: true,
})

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    vitepressNprogress(ctx)
    ctx.app.use(ElementPlus)
    ctx.app.component('Component', Component)
    ctx.app.component('Example', Example)
    Object.keys(modules).forEach((key) => {
      const name = key.replace('../../component/', '').replace('.vue', '')
      ctx.app.component(name, modules[key].default)
    })
  },
}
