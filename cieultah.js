function openLetter() {  
    const letter = document.querySelector('.letter');  
    const flipCard = document.querySelector('.flip-card');  
    const tapHint = document.querySelector('.tap-hint');     // Hentikan animasi shake
      
    letter.style.animation = 'none';
    // Sembunyikan letter agar flip-card terlihat di atasnya secara bersih
    letter.style.visibility = 'hidden';


       // Menampilkan flip card dan efek lainnya
      
    flipCard.style.visibility = 'visible'; // Buat flip card terlihat
      
    document.querySelector('.arrow-down-closed').style.visibility = 'hidden';  
    document.querySelector('.arrow-up-open').style.visibility = 'visible';  
    document.querySelector('.media-btn').style.visibility = 'visible';  
    document.getElementById('audio').play();

       // Sembunyikan petunjuk "Tap Letter!"
      
    tapHint.style.display = 'none';
}

var number = 0;

function mediaBtn() {

      
    number++;

      
    if (number % 2 == 0) {     icon = '<i class="fas fa-pause"></i>';    
        document.getElementById('audio').play();   } else {     icon = '<i class="fas fa-play"></i>';    
        document.getElementById('audio').pause();   }

      
    document.getElementById('media-button').innerHTML = icon;
}

// Fungsi baru untuk flip card
function flipCard() {
    const flipCard = document.querySelector('.flip-card');
    flipCard.classList.toggle('flipped'); // Menambahkan/menghapus kelas 'flipped'
}