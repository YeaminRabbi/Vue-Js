const app = Vue.createApp({
    // data, functions
    data(){
        return {
            showBooks : true,
            title: 'The War of 71',
            author: 'JellyFish',
            age: 45,
            x:0,
            y:0
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks;
        },
        
        handleEvent(e, data){
            console.log(e ,e.type)
            if(data)
            {
                console.log(data)
            }
        },

        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }

    }   
})


const books = Vue.createApp({
    // data, functions
    data(){
        return {
            url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3',
            showBooksLists : true,
            books: [
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b1.jpg' },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b2.jpg' },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b3.jpg' },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b1.jpg' },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b3.jpg' },

            ]
        }
    },

    methods: {
        toggleShowBooks(){
            this.showBooksLists = !this.showBooksLists;
        },
        
        handleEvent(e, data){
            console.log(e ,e.type)
            if(data)
            {
                console.log(data)
            }
        },

        handleMousemove(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }

    }   
})


app.mount('#app')
books.mount('#books')
