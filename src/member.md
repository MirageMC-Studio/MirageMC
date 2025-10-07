---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection,
} from 'vitepress/theme'

const coreMembers = [
  {
    avatar: 'https://www.github.com/fhowotop.png',
    name: 'FHOWO',
    title: '开发者',
    links: [
      { icon: 'github', link: 'https://github.com/fhowotop' }
    ],
  },
  {
    avatar: 'https://www.github.com/NorthZeroD.png',
    name: 'CNZD',
    title: '文档制作',
    links: [
      { icon: 'github', link: 'https://github.com/NorthZeroD' },
    ],
  },
    {
    avatar: 'https://www.github.com/ShiNiYuWings.png',
    name: 'ShiNiYuWings',
    title: '宣传摄影',
    links: [
      { icon: 'github', link: 'https://github.com/ShiNiYuWings' },
    ],
  },
      {
    avatar: '/assets/member/LUOZIJIN.webp',
    name: 'LUOZIJIN',
    title: '核心成员',
    links: [
      //{ icon: 'github', link: 'https://github.com/LUOZIJIN' },
    ],
  },
]

const partners = [
  {
    avatar: 'https://www.github.com/fhowotop.png',
    name: '贡献者',
    title: '无题',
    links: [
      { icon: 'github', link: 'https://github.com/fhowotop' },
    ],
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>团队</template>
    <template #lead>
    MirageMC的开发运营离不开每位团队成员夜以继日的辛勤付出
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="small" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>贡献者</template>
    <template #lead>
    贡献者是那些做出贡献但不在核心团队中的成员，感谢您做出的贡献！
    </template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>