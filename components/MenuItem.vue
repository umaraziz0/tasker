<script setup lang="ts">
import { cn } from '@/lib/utils';

import type { HTMLAttributes } from 'vue';

// --- Props --- //

type Props = {
  title: string;
  titleClass?: HTMLAttributes['class'];
  icon?: string;
  iconClass?: string;
  iconSize?: string;
  hideTitle?: boolean;
};

withDefaults(defineProps<Props>(), {
  titleClass: '',
  icon: undefined,
  iconClass: '',
  iconSize: '2em',
  hideTitle: false,
});
</script>

<template>
  <Button
    as-child
    variant="ghost"
    :class="['w-full items-center gap-3', hideTitle ? 'justify-center' : 'justify-start']"
  >
    <NuxtLink href="/" class="">
      <Icon v-if="icon" :name="icon" :class="cn('shrink-0 text-white', iconClass)" :size="iconSize" />

      <span
        v-show="!hideTitle"
        :class="cn('col-span-4 text-base tracking-wide text-white duration-500 animate-in fade-in', titleClass)"
      >
        Board
      </span>
    </NuxtLink>
  </Button>
</template>
