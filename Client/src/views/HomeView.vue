<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
let router = useRouter()
</script>

<template>
  <div class="container">
    <div class="buttons">
      <h2>Статья</h2>
      <button @click="router.push('/create')">Новая</button>
      <button @click="router.push('/')"> Все</button>
      <button @click="router.push('/find')">Найти</button>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>
<style lang="css" scoped>
.container {
  height: 100vh;
  display: flex;


}

.container>div {
  width: 100%;


}
h2{
  text-align: center;
}

button{
  min-width: 300px;
  margin: 10px;
  padding: 10px;
}
.buttons{
background: rgb(236, 235, 235);
display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.content{
  overflow: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
 
}
</style>
