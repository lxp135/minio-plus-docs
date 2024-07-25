---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: '/image/creator.jpg',
    name: '竹栏呓语',
    title: 'Creator',
    links: [
      { icon: 'home', link: 'https://liuxp.me' },
      { icon: 'github', link: 'https://github.com/lxp135' },
      { icon: 'mail', link: 'mailto:contact@liuxp.me' }
    ],
  },
  {
    avatar: '/image/developer1.jpg',
    name: 'BaldHead',
    title: 'Backend Developer',
    links: [
      { icon: 'github', link: 'https://github.com/bald-head' },
      { icon: 'mail', link: 'mailto:tianxiang.deng@foxmail.com' }
    ],
  },
  {
    avatar: '/image/developer2.jpg',
    name: 'LJQ',
    title: 'Frontend Developer',
    links: [
    ],
  },
]


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>我们的团队</template>
    <template #lead>
    我们的团队成员来自五湖四海，大家因为共同的理想相聚一堂。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>