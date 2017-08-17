<template>
    <div>
        <h1>Stocks History</h1>
        <small>The HighCharts plugin is bugged. You should go to another route and back for it to work correctly.</small>
        <vue-highcharts :options="options" ref="lineChart"></vue-highcharts>
    </div>
</template>

<script>

    import VueHighcharts from 'vue2-highcharts';

    export default {
        data() {
            return {
            }
        },
        methods: {
            test() {
                let chart = this.$refs.lineChart;
                chart.delegateMethod('redraw', true);
            }
        },
        computed: {
            stocksHistory() {
                return [... this.$store.getters.stocksHistory, this.$store.getters.stocks];
            },
            categories() {
                let cat = [];
                for (let i = 1; i <= this.stocksHistory.length; i++) {
                    cat.push('Day ' + i);
                }
                return cat;
            },
            series() {
                let map = this.stocksHistory.reduce((result, values) => {
                    values.forEach(v => {
                        if (typeof(result[v.name]) === 'undefined') result[v.name] = [v.price];
                        else result[v.name].push(v.price);
                    });
                    return result;
                }, {});

                let series = [];
                for (var k in map) {
                    if (map.hasOwnProperty(k))
                        series.push({name: k, data: map[k]});
                }

                return series;
            },
            options() {
                return {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: 'Stock Prices by Day'
                    },
                    xAxis: {
                        categories: this.categories
                    },
                    yAxis: {
                        title: {
                            text: 'Dollar'
                        },
                        labels: {
                            formatter: function () {
                                return this.value + '$';
                            }
                        }
                    },
                    tooltip: {
                        crosshairs: true,
                        shared: true
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        spline: {
                        marker: {
                            radius: 4,
                            lineColor: '#666666',
                            lineWidth: 1
                        }
                        }
                    },
                    series: this.series
                };
            }
        },
        components: {
            VueHighcharts
        }
    }

</script>