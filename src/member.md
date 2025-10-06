---
title: 成员与贡献
description: MirageMC的成员与他们的贡献
layout: page
sidebar: false
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/fhowotop.png',
    name: '风绘',
    title: '服主',
    links: [
      { icon: 'github', link: 'https://github.com/fhowotop' },
    ]
  },
  {
    avatar: 'https://github.com/NorthZeroD.png',
    name: 'NorthZero',
    title: '文档制作',
    links: [
      { icon: 'github', link: 'https://github.com/NorthZeroD' },
    ]
  },
  {
    avatar: 'https://github.com/ShiNiYuWings.png',
    name: 'ShiNiYuWings',
    title: '服务器活跃成员',
    links: [
      { icon: 'github', link: 'https://github.com/ShiNiYuWings' },
    ]
  },
  {
    avatar: '/assets/member/LUOZIJIN.jpg',
    name: 'LUOZIJIN',
    title: '服务器活跃成员',
    links: [
      // { icon: 'github', link: 'https://github.com/ShiNiYuWings' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      MirageMC
    </template>
    <template #lead>
      成员与贡献
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
