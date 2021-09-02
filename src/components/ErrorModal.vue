<template>
  <div class="modal" v-show="isActive">
      <div class="container">
          <div class="modal__content">
          <slot/>
          <button class="modal__btn" type="button" @click="closeModal">Fechar</button>
      </div>
      </div>
  </div>
</template>

<script>
export default {
name: 'ErrorModal',
props: ['isActive'],
setup(props, { emit }) {
    const closeModal = () => {
        emit('closeModal')
    }

    return { closeModal }
}
}
</script>

<style lang="scss" scoped>
.modal {
    z-index: 1;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,.7);

    &__content {
        background-color: var(--clr-background);
        max-width: 500px;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        padding: 2rem .5rem;
        text-align: center;
    }

    &__btn {
      min-width: 200px;
      font-size: 1rem;
      padding: .5rem 1rem;
      border: none;
      border-radius: 5px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: var(--box-shadow);
      background-color: var(--clr-accent);
      color: var(--clr-txt-secundary)
    }
}
</style>