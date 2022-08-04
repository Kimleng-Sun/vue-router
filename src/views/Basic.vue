<script>
import New from './New.vue'
import Greeting from './Greeting.vue'
let id=0;
export default{
    // Data
    components: {
        New,
        Greeting,
    },
    data() {
        return {
            count: 0,
            inputName: "",
            gender: "",
            myName: false,
            newStudentName: "",
            newStudentAge: "",
            students: [
                { name: "Sovann", age: "15", id: id++ },
                { name: "Chanthy", age: "14", id: id++ },
                { name: "visoth", age: "16", id: id++ }
            ],
            hideCompleted: false,
            todos: null,
            todoId: 1,
            msg: 'Hello to the world!'
        };
    },
    //Function
    methods: {
        updateCount() {
            this.count += 5;
        },
        handleToggleMyName() {
            this.myName = !this.myName;
        },
        handleSubmitNewStudent() {
            const newStudent = { name: this.newStudentName, age: this.newStudentAge, id: id++ };
            this.students.push(newStudent);
            this.newStudent = "";
        },
        handleRemoveStudent(student) {
            this.students = this.students.filter((stu) => stu != student);
        },
        async fetchTodos() {
            this.todos = null;
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${this.todoId}`);
            this.todos = await response.json();
        }
    },
    //Computed
    computed: {
        filteredStudents() {
            return this.hideCompleted ?
                this.students.filter((t) => !t.hide) :
                this.students;
        }
    },
    mounted() {
        //this function work at first of rendering the page
        this.fetchTodos();
    },
    watch: {
        todoId(newTodoId, oldTodoId) {
            //if todoID changed this function will run
            if (newTodoId == 5) {
                console.log("id: 5 exist!");
            }
            this.fetchTodos();
        }
    },
    components: { New, Greeting }
}


</script>

<template>
  <div>
  <div class="">Count: {{count}}</div>
  <button @click="updateCount">Click to update</button><br />
  <div class="label-input-name">Name: </div>
  <input type="text" v-model="inputName"/>
  <div class="label-input-gender">Men</div>
  <input type="checkbox" v-model="gender" />
  {{inputName}}
  {{gender}}
  <button @click="handleToggleMyName">Toggle my name</button>
  <div v-if="myName" class="my-name">Sun Kimleng</div>
  <div v-else>............</div><br />

  <form @submit.prevent="handleSubmitNewStudent">
      <input type="text" v-model="newStudentName" />
      <input type="text" v-model="newStudentAge" />
      <button>Add</button>
  </form>
  <ul>
      <li v-for="student in filteredStudents" :key="student.id">
          <input type="checkbox" v-model="student.hide">
          <div >Name: {{student.name}}, Age: {{student.age}} <button @click="handleRemoveStudent(student)">X</button></div>
      </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">{{hideCompleted? 'Show all':'Hide'}}</button><br /><br />

  <button @click="todoId++">Click here to fetch todo in different information by increase the id</button>
  <p v-if="todos != null">{{todos.title}}</p>
  <p v-else>Loading...</p>
  <New :msg="msg" />
  <New>Hello new</New>
  <Greeting />
  <router-view></router-view>
  </div>
</template>