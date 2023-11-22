<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import axios from "axios";
import router from '@/router';

let users = ref<Usuario[]>([])
let userName = ref()

async function listUsers(){
  await axios.get("https://8080-silasprd-springboot3lab-jify8drhbbp.ws-us106.gitpod.io/usuario")
    .then(response => {
      users.value = response.data
    }).catch(error => {
      throw new Error(`Erro: ${error}`)
    })
}

async function findUserByName(){
  if(userName.value){
    await axios.get(`https://8080-silasprd-springboot3lab-jify8drhbbp.ws-us106.gitpod.io/usuario/nome/${userName.value}`)
    .then(response => {
      users.value = response.data
    })
  } else {
    listUsers()
  }
}

function redirectUserById(id: Number){
  router.push({path: `/atualizar/${id.toString()}`})
}

onMounted(() => {
  listUsers()
})

watch(userName, findUserByName)

</script>

<template>
  <main>
    <div>
      <input type="text" placeholder="Buscar por nome" v-model="userName">
    </div>
    <div v-if="users.length <= 0">
      <h2>Nenhum usuário encontrado!</h2>
    </div>
    <div v-if="users.length > 0">
      <h1>Usuários</h1>
      <table>
        <thead>
          <td>ID</td>
          <td>Nome</td>
          <td>Senha</td>
        </thead>
        <tbody>
          <tr 
            v-for="user of users" @click="redirectUserById(user.id)"
            style="cursor: pointer; list-style-type: square; font-size: 18px; font-weight: bold;"
          >
            <td>{{ user.id }}</td>
            <td>{{ user.nome }}</td>
            <td>{{ user.senha }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </main>
</template>

<style>

</style>
