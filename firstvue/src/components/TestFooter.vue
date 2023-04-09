<template>
    <div>
        <div class="todo-footer" v-show="total">
            <label>
                <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
                <input type="checkbox" v-model="isAll" />
            </label>
            <span>
                <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
            </span>
            <button class="btn btn-danger" @click="clrearAll">刪除完成事項</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'TestFooter',
    props: ['todos', 'checkAllTodo', 'clearDoneTodo'],
    computed: {
        total() {
            return this.todos.length
        },
        doneTotal() {
            // let i = 0
            // this.todos.forEach((todo)=>{
            //     if(todo.done) i++
            // })
            // return i
            return this.todos.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
        },
        isAll: {
            get() {
                return this.doneTotal === this.total && this.total > 0
            },
            set(value) {
                this.checkAllTodo(value)
            }
        },
    },
    methods: {
        // checkAll(e) {
        //     this.checkAllTodo(e.target.checked)
        // },
        clrearAll() {
            this.clearDoneTodo()
            setTimeout(() => {
                alert('已刪除完成事項')
            }, 50); 

        }
    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>