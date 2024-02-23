<template>
    <div class="wave-group">
        <input class="input" :value="modelValue" @input="$emit('update:modelValue', $event.target?.value)" v-bind="$attrs" required autocomplete="off">
        <span class="bar"></span>
        <label class="label">
            <span v-for="(text, index) in textoSplit(label)" class="label-char" :style="`--index:${index}`">{{ text }}</span>
        </label>
    </div>
    
</template>

<script setup lang="ts">
defineProps({
    label:{
        type: [String],
        default: false,
        required: true
    },
    modelValue:{
        type: String,
        default: ''
    }
});

const textoSplit = (text:string): string[] =>{
    return text.split("");
}

</script>

<style lang="scss" scoped>
.wave-group {
  position: relative;
}

.wave-group .input {
  font-size: 12px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid #bbb;
  background: transparent;
}

.wave-group .input:focus {
  outline: none;
  color: $darkColor-color;

}

.wave-group .label {
  /* color: #999; */
  font-size: 15px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  display: flex;
}

.wave-group .label-char {
  transition: 0.2s ease all;
  transition-delay: calc(var(--index) * .05s);
  color: #bbb;
}

.wave-group .input:focus ~ label .label-char,
.wave-group .input:valid ~ label .label-char {
  transform: translateY(-30px);
  font-size: 14px;
  color: $darkColor-color;
}

.wave-group .bar {
  position: relative;
  display: block;
  width: 100%;
}

.wave-group .bar:before,.wave-group .bar:after {
  content: '';
  height: 2px;
  width: 0;
  bottom: 1px;
  position: absolute;
  background: #151111;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.wave-group .bar:before {
  left: 50%;
}

.wave-group .bar:after {
  right: 50%;
}

.wave-group .input:focus ~ .bar:before,
.wave-group .input:focus ~ .bar:after {
  width: 50%;
}
</style>