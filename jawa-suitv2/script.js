function getPilihanComputer(){
    const comp = Math.random()

    if(comp < 0.34) return 'gajah'
    if(comp >= 0.34 && comp < 0.67) return 'orang'
    return 'semut'
}

function getHasil(comp, player){
    if(player == comp) return 'SERI'
    if(player == 'gajah') return ( comp == 'orang') ? 'MENANG' : 'KALAH'
    if(player == 'orang') return ( comp == 'gajah') ? 'KALAH' : 'MENANG'
    if(player == 'semut') return ( comp == 'orang') ? 'Kalah' : 'MENANG'
}

function putar(){
    const imgComputer = document.querySelector('.img-komputer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            return clearInterval;
        }

        if(i === gambar.length) i = 0

        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        
    }, 100)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanKomputer = getPilihanComputer()
        const pilihanPlayer = pil.className
        const hasil = getHasil(pilihanKomputer, pilihanPlayer)

        putar()

        setTimeout(function(){

            const imgKomputer = document.querySelector('.img-komputer')
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png')

            const info = document.querySelector('.info')
            info.innerHTML = hasil
            
        }, 1000)

        // fungcition score yang dipanggil
        score(hasil)
        
    })
})


// hasil modifikasi, dengan adanya score
let score1 = 0
let score2 = 0

function score(hasil){
        
        const scoreKompter = document.querySelector('.score-komputer')
        const scorePlayer = document.querySelector('.score-player')

        if(hasil == 'MENANG'){
            score1++
            scorePlayer.innerHTML = score1
        } 
        if (hasil == 'KALAH'){
            score2++
            scoreKompter.innerHTML = score2
        }
}


