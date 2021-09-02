<template>
  <span class="error-message">
      <slot> </slot>
  </span>
</template>

<script>
export default {
name: 'ErrorSpan'
}
</script>

<style>
.error-message {
    font-weight: 700;
    font-style: italic;
    font-size: 1rem;
    color: var(--clr-secundary);
}
</style>