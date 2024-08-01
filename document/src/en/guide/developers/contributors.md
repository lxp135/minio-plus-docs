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
      { icon: 'mail', link: 'mailto:jinqi1102@gamil.com' }
    ],
  },
  {
    avatar: '/image/developer3.jpg',
    name: '王宏亮',
    title: 'Backend Developer',
    links: [
      { icon: 'mail', link: 'mailto:whl@whl.net.cn' }
    ],
  },
]


</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead>
    Our team members come from all corners of the world, united by a common vision.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
</VPTeamPage>