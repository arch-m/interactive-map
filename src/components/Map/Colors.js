const pasteles = [
    "#fff5ba" ,
    "#ffcbc1" ,
    "#ffbebc" ,
    "#ffabab" ,
    "#ffc9de" ,
    "#ffffd1" ,
    "#e7ffac" ,
    "#f3ffe3" ,
    "#dbffd6" ,
    "#bffcc6" ,
    "#6eb5ff" ,
    "#ace7ff" ,
    "#85e3ff" ,
    "#c4faf8" ,
    "#aff8db" ,
    "#afcbff" ,
    "#97a2ff" ,
    "#B5B9FF" ,
    "#A79AFF" ,
    "#DCD3FF" ,
    "#FBE4FF" ,
    "#ECD4FF" ,
    "#d5aaff" ,
    "#c5a3ff" ,
    "#b28dff" ,
    "#fcc2ff" ,
    "#ffccf9" ,
    "#ffb5e8" ,
    "#ffb3ba" ,
    "#ffdfba" ,
    "#ffffba" ,
    "#baffc9" ,
    "#bae1ff" ]

const solidos = [
    "#6930c3" ,
    "#f58634" ,
    "#23689b" ,
    "#c0e218" ,
    "#61b15a" ,
]

const getRandomColor = (paleta) => {
    if(paleta === "pasteles"){
        return pasteles[Math.floor(Math.random()*pasteles.length)]
    } else if(paleta === "solidos"){
        return solidos[Math.floor(Math.random()*solidos.length)]
    }
   
}

export default getRandomColor