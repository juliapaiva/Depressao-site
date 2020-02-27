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
            max = 12;
            min = 5;
            dano = Math.max(Math.floor(Math.random() * max) + 1 , min)
            this.depreVida -= dano;

            if (this.depreVida <= 0) {
                alert('Você está no caminho certo! Espero ter te ajudado!')
                this.gameRodando = false;
                return;                
            }

        },
        vidasaudavel: function() {

        },
        amigos: function() {

        },
        ignorar: function() {
            max = 59;
            min = 5;
            dano = Math.max(Math.floor(Math.random() * max) + 1 , min)
            this.playerVida -= dano;

            if (this.playerVida <= 0) {
                alert('Você não está sozinho(a)! Tudo vai melhorar! Busque ajuda!')
                this.gameRodando = false;
                return;                
            }

        
        }

    }
});