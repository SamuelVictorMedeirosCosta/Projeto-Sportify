document.addEventListener('DOMContentLoaded', () => {
  const artistsData = [
     { name: 'Henrique & Juliano', image: './img/artista-henrique-juliano.jpg' },
     { name: 'Jorge & Mateus', image: './img/artista-jorge-mateus.jpg' },
     { name: 'Zé Neto & Cristiano', image: './img/artista-ze-neto.jpg' },
     { name: 'Gusttavo Lima', image: './img/artista-gustavo-limma.jpg'},
     { name: 'Luan Santana', image: './img/artista-luan-santana.jpg' },
     { name: 'Matheus & Kauan', image: './img/artista-mateus-kauan.jpg' },
     { name: 'Montell Fish', image: './img/artist-montell.jpg' },
     { name: 'Mc Cabelinho', image: './img/artist-mc-cabelinho.jpg'},
     { name: 'Tribalistas', image: './img/artista-tribalista.jpg'},
     { name: 'Mc Tuto', image: './img/artista-barbie-mc-tuto.jpg'}
    
    ];

  const albumsData = [
     { name: 'White Noise (Sleep & Relaxation Sounds)', artist: 'Sleepy John', image: './img/album-white-noise.jpg' },
     { name: 'O Céu Explica Tudo (Ao Vivo)', artist: 'Henrique & Juliano', image: './img/album-ceu-explica.jpg' },
     { name: 'Nada como um dia após o outro', artist: 'Racionais', image: './img/album-vida-loka.jpg' },
     { name: 'HIT ME HARD AND SOFT', artist: 'Billie Eilish', image: './img/album-hit-me.jpg' },
     { name: 'CAJU', artist: 'Liniker', image: './img/album-caju.jpg' },
     { name: 'Escândalo Íntimo', artist: 'Luísa Sonza', image: './img/album-escandalo.jpg' },
     { name: 'Hotel', artist: 'Montell Fish', image: './img/album-montell.jpg' },
     { name: 'Litter Hair', artist: 'Cabelinho', image: './img/album-mc-cabelinho.jpg' },
     { name: 'Tribalistas', artist: 'Tribalistas', image: './img/album-tribalistas.jpg' },
     { name: 'David Goggins', artist: 'David Goggins', image: './img/album-david-goggins.jpg' },





    ];

  const artistGrid = document.querySelector('.artists-grid')
  const albumsGrid = document.querySelector('.albums-grid')

  artistsData.forEach( artist => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML = `
      <img src="${artist.image}" alt="imagem do ${artist.name}">     
    <div>
      <h3>${artist.name}</h3>
      <p>artista</p>
    </div>
    `

    artistGrid.appendChild(artistCard)
 })

 albumsData.forEach( album => {
  const albumCard = document.createElement('div')
  albumCard.classList.add('album-card')

  albumCard.innerHTML = `
    <img src="${album.image}" alt="imagem do ${album.name}">
    <div> 
      <h3>${album.name}</h3>
      <p>${album.artist}</p>
    </div>
  
    `

  albumsGrid.appendChild(albumCard)
})

})    
