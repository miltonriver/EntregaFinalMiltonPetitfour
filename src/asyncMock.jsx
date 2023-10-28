const products = [
    {id: "1", name:"Horizon Zero Dawn", price: 2500, category: "Playstation", img:"https://media.vandal.net/m/26118/horizon-zero-dawn-20173114177_1.jpg", stock: 15, description: "Controla a Aloy, una hábil arquera y cazadora de la tribu de los Nora, con grandes habilidades de combate, pudiendo eliminar a tus enemigos de diversas maneras, haciendo uso de las trampas, del arco, los explosivos y la lanza, en este mundo postapocalíptico lleno de máquinas parecidas a los antiguos dinosaurios."},
    {id: "2", name:"Doom Eternal", price: 1500, category: "PC", img:"https://http2.mlstatic.com/D_NQ_NP_618333-MLA69217608120_052023-O.webp", stock: 25, description: "Ambientada en un tiempo después de los eventos del juego anterior, la historia sigue al Doom Slayer una vez más en una misión para terminar con el consumo de la Tierra por parte del Infierno y frustrar los planes del alienígena Khan Maykr para exterminar a la humanidad. Dispara a todo lo que mueva en este violento shoteer."},
    {id: "3", name:"Halo Infinite", price: 2200, category: "Xbox", img:"https://images.cdn3.buscalibre.com/fit-in/360x360/5c/ff/5cff0805ea0e661ff9da3efc6a84ac5f.jpg", stock: 8, description: "La legendaria saga Halo regresa con la campaña de Master Chief más amplia hasta la fecha y una experiencia multijugador gratuita revolucionaria. Controla al Master Chief y abrete camino a puro disparo en este entretenido shoteer multijugador."},
    {id: "4", name:"Bloodborne", price: 2300, category: "Playstation", img:"https://media.vandal.net/m/24302/bloodborne-2015412031_1.jpg", stock: 12, description: "Sigue las acciones del personaje del jugador, el Cazador, a través de Yharnam, una ciudad ficticia de estilo victoriano, cuyos habitantes han sido afectados con una enfermedad de transmisión sanguínea anormal, adentrandote en esta dura cacería nocturna."}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}