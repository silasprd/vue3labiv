<template>
  <div class="about">
    <h1>Adicionar usuário</h1>
    <form>
      <input type="text" placeholder="Informe o nome" v-model="nameValue">
      <input type="password" placeholder="Informe a senha" v-model="passValue">
      <input type="submit" value="CADASTRAR" @click="createUser">
    </form>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';


const nameValue = ref("")
const passValue = ref("")

function createUser() {

  const user = {
    nome: nameValue.value,
    senha: passValue.value
  }

  axios.post("https://8080-silasprd-springboot3lab-jify8drhbbp.ws-us106.gitpod.io/usuario", user)
    .then(response => {
      console.log(response)
      alert("Usuário criado com sucesso!")
    }).catch(error => {
      console.log(error)
      alert("Erro ao criar usuário!")
    })
  
}
</script>

<style>
</style>
