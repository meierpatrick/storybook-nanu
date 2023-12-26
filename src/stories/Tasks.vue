<template>
    <header>
      <div class="storybook-header">
        <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">Aufgaben</h5>
    
    <p class="card-text">Bitte erledigen Sie diese Aufgaben.</p>
</div>
</div>
      </div>
    </header>
  </template>
  
  <script lang="ts" setup>
import './header.css';
  defineProps<{ user: { name: string } | null }>();
  
  defineEmits<{
    (event: 'createAccount'): void;
    (event: 'login'): void;
    (event: 'logout'): void;
  }>();
  
  </script>
  
  