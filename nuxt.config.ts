// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/content',
        'nuxt-icon',
        '@nuxtjs/apollo'
    ],
    runtimeConfig: {
        githubToken: process.env.GITHUB_TOKEN,
    },
    content: {
        highlight: {
            theme: 'nord',
            preload: ['ts', 'js', 'css', 'json', 'bash', 'vue']
        }
    },
    apollo: {
        clients: {
            default: {
                tokenName: 'github-token',
                httpEndpoint: 'https://api.github.com/graphql'
            }
        },
    },
})
