new Vue({
    el: '#app',
    data: {
        playerVida: 100,
        depreVida: 100,
        gameRodando: false
    },
    methods: {
        startGame: function() {
            this.gameRodando = true;
            this.playerVida = 100;
            this.depreVida = 100;
        },
        terapia: function() {

        },
        vidasaudavel: function() {

        },
        amigos: function() {

        },
        ignorar: function() {
            
        }

    }
});