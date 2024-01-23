<template>
    <div class="mt-5 p-4">
        <b-container>
            <b-card title="Formulario" sub-title="Algunas preguntas" class="p-4">
                <b-form class="card-form">
                    <div class="tab" :class="{fade: tab==1}">
                        <label for="email">Correo</label>
                        <b-form-input v-model="email" type="email" :state="mail" id="email"></b-form-input>
                        <b-form-invalid-feedback v-if="!mail" :state="!mail">
                            Correo inválido
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="mail">
                            Looks Good.
                        </b-form-valid-feedback>
                        <label for="email">Nombre</label>
                        <b-form-input v-model="email" type="email" :state="mail" id="email"></b-form-input>
                        <b-form-invalid-feedback v-if="!mail" :state="!mail">
                            Correo inválido
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="mail">
                            Looks Good.
                        </b-form-valid-feedback>
                    </div>
                    <div class="tab" :class="{fade: tab==2}">
                        <label for="email">Teléfono</label>
                        <b-form-input v-model="email" type="email" :state="mail" id="email"></b-form-input>
                        <b-form-invalid-feedback v-if="!mail" :state="!mail">
                            Correo inválido
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="mail">
                            Looks Good.
                        </b-form-valid-feedback>
                    </div>
                    <b-button v-if="tab == 1" @click="()=> tab += 1" class="button" :class="{'button-fade': tab==2}">Siguiente</b-button>
                    <b-button type="submit" v-else class="button">Enviar</b-button>
                </b-form>
            </b-card>
        </b-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tab: 1,
            email: '',
        }
    },
    computed: {
      length() {
        return this.email.length > 4 && this.email.length < 13
      },
      mail(){
        const pattern = /^\S+@\S+\.\S+$/
        return pattern.test(this.email);
      }
    }
}
</script>

<style scoped>
    .card-form{
        overflow: hidden;
    }
    .tab{
        opacity: 100%;
        height: 30vh;
        transition: all ease-in-out 3s;
        transform: skewY(0);
    }
    .fade{
        height: 0;
        opacity: 0;
        transform: skewY(80deg);
    }

    .button{
        transform: translateX(0);
        transition: all ease-in 3s;
    }
    .button-fade{
        transform: translateX(-30px);
    }
</style>