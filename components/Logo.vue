<script setup lang="ts">
import { cn } from '@/lib/utils';

import type { HTMLAttributes } from 'vue';

// --- Props --- //

type Props = {
  class?: HTMLAttributes['class'];
  isSmallVersion?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  class: '',
  isSmallVersion: false,
});
</script>

<template>
  <div :class="cn('text-center text-3xl font-semibold text-white', props.class)">
    <span v-show="isSmallVersion" class="duration-500 animate-in fade-in">t.</span>
    <span v-show="!isSmallVersion" class="duration-500 animate-in fade-in">tasker.</span>
  </div>
</template>
