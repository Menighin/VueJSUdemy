<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            </div>

            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                    <router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#" @click="endDay">End Day ({{dayNumber}})</a></li>
                    <li class="dropdown" :class="{ open: menuDropdown }">
                        <a href="#" @click="menuDropdown = !menuDropdown" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#" @click="saveData">Save Data</a></li>
                            <li><a href="#" @click="loadData">Load Data</a></li> 
                        </ul>
                    </li>
                    <li><a href="#">{{ money | currency}}</a></li>
                </ul>
            </div>
            
        </div>
    </nav>
</template>

<script>

    export default {
        data() {
            return {
                menuDropdown: false,
                dayNumber: 1
            }
        },
        methods: {
            saveData() {
                let state = {
                    portfolio: this.portfolio,
                    money: this.money
                };
                this.$http.post('state', state);
            },
            loadData() {
                this.$http.get('state')
                    .then(response => {
                        return response.json();
                    })
                    .then(json => {
                        this.$store.dispatch('setPortfolio', json);
                        this.$store.dispatch('setMoney', json);
                    });
            },
            endDay() {
                this.dayNumber++;
                this.$store.dispatch('fetchStocks');
                this.$store.dispatch('addStocksHistory');
            }
        },
        computed: {
            money() {
                return this.$store.getters.getMoney;
            },
            portfolio() {
                return this.$store.getters.portfolio;
            }
        }
    }

</script>