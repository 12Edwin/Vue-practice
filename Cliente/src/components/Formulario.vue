<template>
    <div class="mt-5 p-4">
        <b-container>
            <b-card title="Formulario" sub-title="Algunas preguntas" class="p-4">
                <b-form class="card-form">
                    <div class="tab" :class="{ fade: tab != 1 }">
                        <h4>Datos personales</h4>
                        <label for="name">Nombre</label>
                        <b-form-input v-model="name" type="text" :state="required(name)" id="name"></b-form-input>
                        <b-form-invalid-feedback v-if="!required(name)" :state="!required(name)">
                            Nombre obligatorio
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="required(name)">
                            Looks Good.
                        </b-form-valid-feedback>
                        <label for="surname">Apellido paterno</label>
                        <b-form-input v-model="surname" type="text" :state="required(surname)" id="surname"></b-form-input>
                        <b-form-invalid-feedback v-if="!required(surname)" :state="!required(surname)">
                            Apellido paterno inválido
                        </b-form-invalid-feedback>
                        <b-form-valid-feedback :state="required(surname)">
                            Looks Good.
                        </b-form-valid-feedback>
                        <label for="surname">Apellido materno</label>
                        <b-form-input v-model="lastname" type="text" :state="true" id="lastname"></b-form-input>
                        <label for="birthday">Fecha de nacimiento</label>
                        <b-form-input v-model="birthday" type="date" :state="birthdayV()" id="birthday"></b-form-input>
                        <b-form-invalid-feedback v-if="!birthdayV()" :state="!birthdayV()">
                            La fecha de nacimiento debe coincidir con una edad mayor o igual a 18 años
                        </b-form-invalid-feedback>

                    </div>
                    <div class="tab" :class="{ fade: tab != 2 }">
                        <h4>Dirección</h4>
                        <label for="cp">CP</label>
                        <b-form-input v-model="cp" type="number" :state="required(cp) && cpV()" id="cp"></b-form-input>
                        <b-form-invalid-feedback v-if="!required(cp)">
                            CP obligatorio
                        </b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="!cpV()">
                            CP Inválido
                        </b-form-invalid-feedback>
                        <label for="street">Calle</label>
                        <b-form-input v-model="street" type="text" :state="required(street)" id="street"></b-form-input>
                        <b-form-invalid-feedback v-if="!required(street)" :state="!required(street)">
                            Calle obligatoria
                        </b-form-invalid-feedback>
                        <label for="number">Númenro</label>
                        <b-form-input v-model="number" type="number" :state="required(number)" id="number"></b-form-input>
                        <b-form-invalid-feedback v-if="!required(number)" :state="!required(number)">
                            Número obligatorio
                        </b-form-invalid-feedback>
                        <label for="city">Ciudad</label>
                        <b-form-input v-model="city" type="text" :state="required(city)" id="city"></b-form-input>
                        <b-form-invalid-feedback v-if="!required(city)" :state="!required(city)">
                            Ciudad obligatoria
                        </b-form-invalid-feedback>
                    </div>
                    <div class="tab" :class="{ fade: tab != 3 }">
                        <h4>Contacto</h4>
                        <label for="email">Correo</label>
                        <b-form-input v-model="email" type="email" :state="mail() && required(email)"
                            id="email"></b-form-input>
                        <b-form-invalid-feedback v-if="!mail()">
                            Correo inválido
                        </b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="!required(email)">
                            Correo Obligatorio
                        </b-form-invalid-feedback>
                        <label for="phone">Teléfono</label>
                        <b-form-input v-model="phone" type="phone" :state="phoneV() && required(phone)"
                            id="phone"></b-form-input>
                        <b-form-invalid-feedback v-if="!phoneV()">
                            Número de teléfono inválido
                        </b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="!required(phone)">
                            Número de teléfono obligatorio
                        </b-form-invalid-feedback>
                        <label for="photo">Foto</label>
                        <b-form-group label="Default:" label-cols-sm="2">
                            <b-form-file id="file-default"></b-form-file>
                        </b-form-group>
                        <b-form-invalid-feedback v-if="required(photo)">
                            Foto obligatoria
                        </b-form-invalid-feedback>
                        <b-form-invalid-feedback v-if="!photoV()">
                            El tamaño no debe sobrepasar los 3mb
                        </b-form-invalid-feedback>
                    </div>
                    <div class="d-flex">
                        <b-button v-if="tab != 1" @click="() => tab -= 1" variant="danger"
                            class="button">Anterior</b-button>
                        <b-button v-if="tab != 3" @click="() => tab += 1" variant="primary"
                            class="button">Siguiente</b-button>
                        <b-button type="submit" v-else class="button" variant="success">Enviar</b-button>
                    </div>
                </b-form>
            </b-card>
        </b-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tab: 1,
            email: '',
            name: '',
            surname: '',
            lastname: '',
            birthday: null,
            cp: 0,
            street: '',
            number: 0,
            city: '',
            email: '',
            phone: 0,
            photo: ''
        }
    },
    methods: {
        required(value) {
            return value.length > 0
        },
        length() {
            return this.email.length > 4 && this.email.length < 13
        },
        mail() {
            const pattern = /^\S+@\S+\.\S+$/
            return pattern.test(this.email);
        },
        phoneV() {
            return (this.phone + '').length === 10
        },
        birthdayV() {
            if (this.birthday == null)
                return false
            return (new Date()).getFullYear() - (new Date(this.birthday)).getFullYear() >= 18
        },
        cpV() {
            return (this.cp + '').length === 5
        },
        photoV() {
            return false
        }
    }
}
</script>

<style scoped>
.card-form {
    overflow: hidden;
}

.tab {
    opacity: 100%;
    height: 60vh;
    transition: all ease-in-out 3s;
    transform: skewY(0);
}

.fade {
    height: 0;
    opacity: 0;
    transform: skewY(90deg);
}

.button {
    transform: translateX(0);
    transition: all ease-in 2s;
    margin-left: 15px;
}

.button-fade {
    transform: translateX(100p);
}
</style>