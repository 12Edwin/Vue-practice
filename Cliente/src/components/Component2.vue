<template>
    <div>
        <h1>Productos para el hogar</h1>
        <b-breadcrumb class="mx-2 mb-0">
            <b-breadcrumb-item v-for="(item, i) in items" @click="changeActive(i)" :key="i" :active="item.active"
                :href="item.href">{{ item.text }}</b-breadcrumb-item>
        </b-breadcrumb>
        <h4>{{ currentItem }}</h4>
    </div>
</template>
  
<script>
export default {
    methods: {
        changeActive(value) {
            this.items.map(i => {
                i.active = false
            })
            this.items[value].active = true
            this.currentItem = this.items[value].text
        }

    },
    data() {
        return {
            items: [
                {
                    text: "Inicio",
                    href: "#1",
                    name: "inicio",
                    active: true
                },
                {
                    text: "Limpieza",
                    href: "#2",
                    name: "component1",
                    active: false
                },
                {
                    text: "Detergentes",
                    href: "#3",
                    name: 'component2',
                    active: false
                },
            ],
            currentItem: 'Inicio'
        }
    }
}
</script>
  
<style></style>