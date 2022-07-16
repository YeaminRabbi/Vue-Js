const app = Vue.createApp({
    // data, functions
    
    data(){
        return {
            title: 'The Final Empire',
            author: 'JellyFish',
            age: 27
        }
    },

    methods: {
        changeTitle(title){
            console.log('Title Changed to '+title)
            //this.title = 'Words of Randiance'
            this.title = title
        }
    }   

})


const appConditional = Vue.createApp({
    // data, functions
    
    data(){
        return {
            showBooks : true,
            title: 'The War of 71',
            author: 'JellyFish',
            age: 45
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        }
    }   

})

app.mount('#app')
appConditional.mount('#checkCondition')