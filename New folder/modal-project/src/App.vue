<template>
  
  <h1>{{ title }}</h1>
  <input type="text" name="" id="" ref="name">
  <button @click="handleClick">click me </button>
  <p>Welcome</p>
  <div v-if="showModal">
    <CustomModal :header="header" :text="text" theme="sale" @close="toggleModal" />
  </div>

  <button @click="toggleModal">Show Modal</button>
 
</template>
 
<script>
import CustomModal from './components/CustomModal'

export default {
    name: "App",
    components: { 
      CustomModal 
      
      },
    data() {
        return {
            title: "My first Vue project",
            header: "Sihn up for the Giveaway!",
            text: 'Grab your jelly swag for half price!',
            showModal : false
        };
    },
    methods: {
        handleClick() { 
            console.log(this.$refs.name);
            console.log(this.$refs.name.value);
            this.$refs.name.classList.add("active");
            this.$refs.name.focus();
            this.$refs.name.value = "";
        },
        toggleModal(){
            this.showModal = !this.showModal
        }
    },
  
}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1{
  border-bottom: 1px solid #ddd;
  display: inline block;
  padding-bottom: 10px;
}
</style>
