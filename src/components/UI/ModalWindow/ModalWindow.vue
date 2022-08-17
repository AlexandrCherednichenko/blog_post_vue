<template>
    <div class="modal" v-if="show" @click.stop="hideModal">
        <div @click.stop class="modal__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import toggleModal from '@/mixin/toggleModal';


export default {
    name: "ModalWindow",
    mixins: [toggleModal]
}
</script>



<style lang="scss" src="./style.scss" scoped/>
