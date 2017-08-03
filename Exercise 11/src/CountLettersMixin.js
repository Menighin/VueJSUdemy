export const CountLettersMixin = {
    data() {
        return {
            textLengthMixin: 'Length filter applied by mixin'
        }
    },
    computed: {
        countLetters() {
            return this.textLengthMixin + ' (' + this.textLengthMixin.length + ')';
        }
    },
}