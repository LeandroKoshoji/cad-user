<template>
  <span class="error-span">
      <slot/>
  </span>
</template>

<script>
export default {
name: 'ErrorSpan'
}
</script>

<style lang="scss" scoped>
.error-span {
  display: flex;
  flex-direction: column;
  align-items: left;
  font-weight: 700;
  font-style: italic;
  font-size: 1rem;
  color: var(--clr-secundary);

}
</style>