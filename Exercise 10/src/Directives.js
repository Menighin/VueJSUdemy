export default {
    bind(el, binding) {
        el.addEventListener(binding.arg, binding.value);
    }
}