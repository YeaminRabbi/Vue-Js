const books = Vue.createApp({
    // data, functions
    data(){
        return {
            url: 'https://www.youtube.com/watch?v=CYPZBK8zUik&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=3',
            showBooksLists : true,
            books: [
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b1.jpg', isFav:true },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b2.jpg', isFav:true },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b3.jpg', isFav:false },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b1.jpg', isFav:true },
                { title: 'title to be needed', author: 'jellyFish', img: 'assets/b3.jpg', isFav:false },

            ]
        }
    },

    methods: {
        
        toggleFav(item){
            item.isFav = !item.isFav
        }

    },

    computed: {
        filteredBooks(){
            return this.books.filter((book) =>  book.isFav)
        }
    }
})

books.mount('#books')
