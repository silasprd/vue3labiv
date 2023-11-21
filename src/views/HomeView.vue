<script setup lang="ts">
import { onMounted, ref } from 'vue';
import axios from "axios";
import router from '@/router';

let users = ref()

async function listUsers(){
  await axios.get("https://8080-silasprd-springboot3lab-jify8drhbbp.ws-us106.gitpod.io/usuario")
    .then(response => {
      users.value = response.data
      console.log(users)
    })
}

function redirectUserById(id: Number){
  router.push({path: `/atualizar/${id.toString()}`})
}

onMounted(() => {
  listUsers()
})
</script>

<template>
  <main>
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

  </main>
</template>

<style>

</style>
