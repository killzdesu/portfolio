<template>
<p text="3xl primary-focus dark:primary" class="mt-4 font-bold">
  <i-mdi-face-man />
  Profile
</p>
<div clvass="divider"></div>
<ProfileEducation :profile-class="profileClass" />
<br>
## Language:
- Thai: Native speaker
- English: Fluent
- Japanese: JLPT N2 certified

## Programming:
 Competitive Programming
- Thailand Olympiad in Informatics 2015: 1 of 8 finalists
- Codeforces: Highest rating of 1916
Web Development
- Javascript
- Node.js
- Vue

## Attended Program
- Cultural Exchange Program at Ritsumeikan Senior Highschool
- Research Exchange Program at Department of Microbiology, Faculty of Medicine, Chengkung University, Taiwan
</template>

<script setup lang="ts">
const { t } = useI18n()

const profileClass = {
  title: "text-xl text-secondary-focus dark:text-secondary"
}

</script>

<style>
</style>
