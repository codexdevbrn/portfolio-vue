<script setup lang="ts">
import { useUser } from "@/plugins/axiosFetch";
import { onMounted } from "vue";

const { users, fetchUsers } = useUser();

onMounted(() => {
  fetchUsers();
});
</script>
<template>
  <div class="greetings">
    <h1 class="green">{{ users?.name }}</h1>
    <h3>
      {{ users?.bio }}
    </h3>
  </div>
</template>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 3.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.6rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

</style>
