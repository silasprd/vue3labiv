<template>
    <main>
        <h1>Atualizar usuário</h1>
        <form>
            <input type="text" v-model="userName">
            <input type="text" v-model="userPass">
            <input type="submit" @click="updateUser" value="SALVAR">
        </form>
    </main>
</template>

<script setup lang="ts">
import router from '@/router';
import axios from 'axios';
import { onMounted, ref } from 'vue';


const user = ref()
const userName = ref()
const userPass = ref()

function getUserById(){
    axios.get(`https://8080-silasprd-springboot3lab-jify8drhbbp.ws-us106.gitpod.io/usuario/${router.currentRoute.value.params.id}`)
        .then(response => {
            user.value = response.data
            userName.value = response.data.nome
            userPass.value = response.data.senha
            console.log(user.value)
        })
}

function updateUser(){
    const usuario = {
        nome: userName.value,
        senha: userPass.value
    }
    console.log(usuario)
    axios.put(`https://8080-silasprd-springboot3lab-jify8drhbbp.ws-us106.gitpod.io/usuario/${router.currentRoute.value.params.id}`, usuario)
        .then(response => {
            console.log(response)
            window.alert("Usuário atualizado com sucesso!")
        }).catch(error => {
            console.log(error)
            window.alert("Erro ao atualizar usuário!")
        })
}

onMounted(() => {
    getUserById()
})
</script>