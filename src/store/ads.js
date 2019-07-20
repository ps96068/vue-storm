export default {
    state: {
        ads: [
            {
                title: 'F1',
                description: 'F1 description',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1'
            },
            {
                title: 'F2',
                description: 'F2 description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '2'
            },
            {
                title: 'F3',
                description: 'F3 description',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '3'
            },
        ]
    },
    mutations: {
        createAd (state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = Math.floor(Math.random() * (1000 - 20 +1)).toString()

            commit('createAd', payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => { return ad.promo })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find(ad => ad.id === adId)
            }
        }
    }
}
