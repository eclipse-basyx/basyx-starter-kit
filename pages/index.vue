<template>
  <StudioAnnouncement v-if="showAnnouncement" @continue="showAnnouncement = false" />
  <StartPage v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import StudioAnnouncement from '@/components/StudioAnnouncement.vue';

const showAnnouncement = ref(true);
</script>
