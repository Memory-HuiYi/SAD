<template>
    <div>
        <div class="todo-header">
            <input type="text" placeholder="請輸入待辦事項(Enter)" v-model="title" @keyup.enter="add" />
        </div>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name: 'TestHeader',
    props: ['addTodo'],
    data() {
        return {
            title: ''
        }
    },
    methods: {
        add() {
            //如果沒輸入，不會執行
            if (!this.title.trim()) return alert('請輸入待辦事項')
            //包裝用戶輸入為todo
            // const todoObj = { id: nanoid(), title: e.target.value, done: false }
            const todoObj = { id: nanoid(), title: this.title, done: false }
            //叫App組件+一個todo
            this.addTodo(todoObj)
            //輸入完成後，清空輸入框
            // e.target.value = ''
            this.title = ''
            // console.log(todoObj)
        }
    }
}
</script>

<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>