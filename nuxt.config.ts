// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        'nuxt-icon'
    ],
    content: {
        highlight: {
            theme: 'nord',
            preload: ['ts', 'js', 'css', 'json', 'bash', 'vue']
        }
    },
})
