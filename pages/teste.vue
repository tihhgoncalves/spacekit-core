<template>
    <div>
        [PÁGINA DE TESTE]
        {{ $sdk }}
    </div>
</template>

<script>
export default {
    mounted () {
        console.log('TESTE', this.$sdk);

        this.$bus.$on('teste', () => {
            this.$swal('Hello Vue world!!!');
        })

        this.$bus.$emit('teste');
        
    },
}
</script>