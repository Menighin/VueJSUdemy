new Vue({
    el: '#app',
    data: {
        gameStarted: false,
        playerHealth: 100,
        monsterHealth: 100,
        gameFinished: false,
        log: []
    },
    methods: {
        startGame: function() {
            this.gameStarted = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        },
        attack: function(special) {
            var playerAttack = Math.floor(Math.random() * 20 + 1);
            if (special) {
                playerAttack = Math.floor(Math.random() * 40 + 5);
                this.log.push({msg: "Player deals " + playerAttack + " damage with special attack", class: 'player-turn'});
            } else {
                this.log.push({msg: "Player deals " + playerAttack + " damage with normal attack", class: 'player-turn'});
            }
            this.monsterHealth -= playerAttack;
            if (this.monsterHealth < 0) this.monsterHealth = 0;

            this.monsterAttack();
        },
        monsterAttack: function() {
            var monsterAttack = Math.floor(Math.random() * 25 + 1);
            this.playerHealth -= monsterAttack;
            if (this.playerHealth < 0) this.playerHealth = 0;

            this.log.push({msg: "Monster deals " + monsterAttack + " damage with attack", class: 'monster-turn'});
            

            this.checkOver();
        },
        heal: function() {
            var playerHeal = Math.floor(Math.random() * 35 + 10);

            this.playerHealth += playerHeal;
            if (this.playerHealth > 100) this.playerHealth = 100;

            this.log.push({msg: "Player heals for " + playerHeal + " life points", class: 'player-turn'});

            this.monsterAttack();
        },
        giveUp: function() {
            this.gameStarted = false;
            this.gameFinished = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.log = [];
        },
        getColor: function getColor(lifePoints) {
            if (lifePoints > 50) return 'green';
            if (lifePoints > 15) return 'orange';
            return 'red';
        },
        checkOver: function() {
            if (this.playerHealth == 0 || this.monsterHealth == 0) {
                var message = 'You won! Start another game?';
                if (this.playerHealth == 0)
                    message = 'You lost! Start another game?';

                if(confirm(message) == true) {
                    this.startGame();
                } else {
                    this.gameStarted = false;
                }
            }
        },
        getClass: function(l) {
            return l.class;
        }
    },
    computed: {
        stylePlayerBar: function() {
            return {
                width: this.playerHealth + '%',
                backgroundColor: this.getColor(this.playerHealth),
                margin: '0',
                color: 'white'
            }
        },
        styleMonsterBar: function() {
            return {
                width: this.monsterHealth + '%',
                backgroundColor: this.getColor(this.monsterHealth),
                margin: '0',
                color: 'white'
            }
        }
    }
});