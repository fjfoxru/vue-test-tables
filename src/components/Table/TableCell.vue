<template>
<div @click="onStartChange" class="cell__content">
    <span v-show="!editMode">
        {{element.value}}
    </span>
    <label v-show="checkValid && editMode" class="cell__label" for="cellValue">{{checkValid}}</label>
    <input
        :ref="element.id"
        class="cell__input"
        v-show="editMode"
        name="cellValue"
        v-model="newValue"
        @blur="onInputBlur"
        @change="onValueChanged"
         />
</div>    
</template>
<script>
export default {
    props: {
        element: {
            type: Object,
        },
        itemId: {
            type: String,
        }
    },
    data() {
        return {
            editMode: false,
            newValue: this.element.value,
        }
    },
    computed: {
        checkValid() {
            if (!/^\d{0,6}$/g.test(this.newValue)) {
                return 'Ошибка! Символов больше 6 или введены буквы. Сохранено не будет';
            } else {
                return '';
            }
        },
    },
    methods: {
        onStartChange() {
            this.editMode = true;
            this.$nextTick(() => {
                this.$refs[this.element.id].focus();
            })
        },
        
        onValueChanged() {
            if (!this.checkValid) {
                this.$emit('input', {itemId: this.itemId, elementId: this.element.id, newValue: this.newValue});
                this.editMode = false;
            }
            
        },
        onInputBlur() {
            this.editMode = false;
        }
    }
}
</script>