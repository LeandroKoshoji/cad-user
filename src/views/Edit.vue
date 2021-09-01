<template>
  <div class="edit">
      <div class="container">
          <form class="form">
            <span class="form__tag">Editar</span>
            <div class="form__section flex">
              <h3 class="form__section__title">Dados de Acesso:</h3>
                <div class="form__item">
                    <label for="email">Email:</label>
                    <input type="email" id="email" placeholder="exemplo@ex.com.br" required >
                </div>
                <div class="form__item">
                    <label for="password">Senha:</label>
                    <input type="password" id="password" required >
                </div>
            </div>

            <div class="form__section flex">
              <h3 class="form__section__title">Dados Cadastrais:</h3>
                <div class="form__item">
                    <label for="name">Nome:</label>
                    <input type="text" id="name" placeholder="nome" required >
                </div>
                <div class="form__item">
                    <label for="cpf">CPF:</label>
                    <input type="number" id="cpf" placeholder="11 digitos - apenas numeros" required >
                </div>
                <div class="form__item">
                    <label for="pis">PIS:</label>
                    <input type="number" id="pis" required >
                </div>
            </div>

            <div class="form__section grid">
              <h3 class="form__section__title">Endereço:</h3>
              <div class="form__item">
                  <label for="cep">CEP:</label>
                  <input type="text" id="cep" placeholder="8 digitos - apenas numeros" required >
              </div>
              <div class="form__item">
                  <label for="adress">Rua:</label>
                  <input type="text" id="adress" required placeholder="Rua ficticia">
              </div>
              <div class="form__item">
                  <label for="adressNumber">Nº:</label>
                  <input type="number" id="adressNumber" required placeholder="123">
              </div>
              <div class="form__item">
                  <label for="adressComplement">Complemento:</label>
                  <input type="text" id="adressComplement" required placeholder="Apt 321">
              </div>
              <div class="form__item">
                  <label for="district">Bairro:</label>
                  <input type="text" id="district" required placeholder="Centro">
              </div>
              <div class="form__item">
                  <label for="city">Município:</label>
                  <input type="text" id="city" required placeholder="São Paulo">
              </div>
              <div class="form__item">
                  <label for="region">Estado:</label>
                  <input type="text" id="region" required placeholder="SP">
              </div>
              <div class="form__item">
                  <label for="pais">País:</label>
                  <input type="text" id="pais" required placeholder="Brasil">
              </div>
            </div>

            <button type="submit" class="form__btn neutral">Editar</button>
            <button type="button" class="form__btn accent">Excluir Usuário</button>
            <router-link to="/">Voltar para página principal</router-link>
          </form>
      </div>
  </div>
</template>

<script>
export default {
name: 'Edit',
}
</script>

<style lang="scss" scoped>
.edit {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .form {
    border: 3px solid var(--clr-primary);
    border-radius: 5px;
    margin: 2rem auto 0;
    padding: 2rem 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    box-shadow: var(--box-shadow);

    & > * { margin-bottom: 1rem;}

    &__tag {
      font-weight: bold;
      padding: 0 .5rem;
      position: absolute;
      top: -12px;
      left: 15px;
      background-color: var(--clr-background);
    }

    &__section {
      
      width: 100%;
      padding-top: 2rem;
      overflow: hidden;
      position: relative;

      &.flex {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 767px) {
        flex-direction: column;
        }
      }

      &.grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        @media (max-width: 767px) {
          grid-template-columns: auto;
        }
      }

      &__title {
        position: absolute;
        left: 1rem;
        top: .5rem;
      }

    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: left;
      width: 100%;
      padding: .5rem 1rem;

      & label {
        font-weight: bold;
        font-size: 1rem;
      }

      & input {
        flex: 1;
        border: 1px solid var(--clr-primary);
        border-radius: 5px;
        background-color: transparent;
        outline: none;
        font-size: 1rem;
        padding: .25rem .5rem;

        &::placeholder {
          font-style: italic;
        }
      }
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

      &.accent {
          background-color: var(--clr-accent);
          color: var(--clr-txt-secundary);
      }

      &.neutral {
        background-color: var(--clr-secundary);
        color: var(--clr-txt-secundary);
      }
    }

    &__call {
        text-align: center;
    }
  }
}
</style>