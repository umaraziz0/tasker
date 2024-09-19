<script setup lang="ts">
// --- Refs --- //

const isSidebarOpen = ref(true);

// --- Methods --- //

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
  <aside
    :class="['relative h-screen bg-brand-black p-4 transition-all duration-300', isSidebarOpen ? 'w-1/5' : 'w-1/12']"
  >
    <!-- Toggle Expand -->
    <Button
      variant="ghost"
      size="icon"
      class="absolute -right-3 top-[52px] rounded-full p-0 hover:bg-gray-800 max-lg:size-8 lg:-right-5 lg:top-16"
      @click="toggleSidebar"
    >
      <Icon name="ic:round-chevron-right" :class="['text-white', isSidebarOpen && 'rotate-180']" size="1.5em" />
    </Button>

    <!-- Content -->
    <div class="p-2 lg:p-4">
      <Logo :is-small-version="!isSidebarOpen" />
    </div>

    <hr class="w-11/12 border-gray-400" />

    <ul class="py-4">
      <li>
        <MenuItem title="Board" icon="ic:baseline-view-kanban" :hide-title="!isSidebarOpen" />
      </li>
    </ul>
  </aside>
</template>
