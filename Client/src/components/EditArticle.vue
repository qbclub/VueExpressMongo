<script setup>
import { reactive, ref } from 'vue'
import axios from "axios"

let form = reactive({
    title: '',
    text: '',
})
let result = ref(null)

const sendForm = async () => {

    if (
        form.title && form.text
    ) {

        const res = await axios.post('http://localhost:3000/create', { form: form })
            .then(function (res) {
                result.value = res.data
                clearForm()

            })
            .catch(function (error) {
                console.log(error);
            })
    }

}
const clearForm = async () => {
    form.text = ''
    form.title = ''
}

</script>

<template>
    <h3>Создать </h3>

    <div> <label for="title">Название</label> <input type="title" v-model="form.title"></div>
    <div class="text"> <label for="text">Текст</label> <textarea name="text" v-model="form.text"></textarea></div>
    <button @click="sendForm()">Отправить</button>
    <div v-if="result" class="result">
        {{ result }}
    </div>
</template>
<style lang="css" scoped>
.text {
    display: flex;
    align-items: center;
}
.result{
    color: red;
}
</style>