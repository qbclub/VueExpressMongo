<script setup>
import { reactive, ref } from 'vue'
import axios from "axios"


let articles = ref(null)


const getArticles = async () => {
    const res = await axios.get('http://localhost:3000/')
        .then(function (res) {
            articles.value = res.data

        })
        .catch(function (error) {
            console.log(error);
        })
}
const deleteArticle = async (id) => {

    const res = await axios.post('http://localhost:3000/delete', { id: id })
        .then(function (res) {
            getArticles()
            console.log(res.data)

        })
        .catch(function (error) {
            console.log(error);
        })
}



</script>
<template>
    <h3>Статьи</h3>
    <div>
        <button @click="getArticles()">Получить</button>
    </div>
    <div v-for="article, index in articles" :key="index" class="article">
        <div >
            <h4>{{ article.title }}</h4>
            <p>{{ article._id }}</p>
            <p>{{ article.text }}</p>
            <div>
                <button @click="deleteArticle(article._id)">Удалить</button>
     
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.article {
    margin: 10px;
    padding: 10px;
    width: 80%;
    border: 1px solid black;
}

</style>