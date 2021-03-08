//*** instance of the app ***//
new Vue({
    el: '#app', // is string and which element in the page this is gonna to controle this view
    data: {
        name: "Amna MAMMER",
        githublink: 'https://github.com/Anna-12-Mer', 
    },
    methods: {
        greet: function (time) {
            return 'Good ' + time + " " + this.name
        }
    },
}); 