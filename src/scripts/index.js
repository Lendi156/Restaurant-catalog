import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');
const item = document.querySelectorAll('#item');
const post = document.querySelectorAll('.post-item');

/*kode untuk membuka navigation drawer menggunakan mouse*/
menu.addEventListener('click', function (event) {
    drawer.classList.add('open');
    event.stopPropagation();
    this.setAttribute('aria-expanded', 'true');
});


/*kode untuk membuka dan menutup navigation drawer menggunakan tombol enter dan escape dari icon navigation drawer*/
menu.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        drawer.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
    } else if (event.keyCode === 27) {
        event.preventDefault();
        drawer.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
    }
});

/*kode untuk keluar dari navigation drawer menggunakan escape */
for (var i = 0; i < item.length; i++) {
    item[i].addEventListener("keyup", function(event) {
        if (event.keyCode === 27) {
            event.preventDefault();
            drawer.classList.remove('open');
            menu.setAttribute('aria-expanded', 'false');
        }  
      })    
}


/*kode untuk keluar dari navigation drawer menggunakan mouse */
hero.addEventListener('click', function () {
    drawer.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
});



/*kode untuk expand deskripsi restoran */

for (let pos of post) {
    pos.addEventListener('keyup', function (event) {
        const child = this.children[1].children;
        if (event.keyCode === 13) {
            child[3].classList.remove('deskripsi'); 
            child[3].classList.add('deskripsi_new');
            this.setAttribute('aria-expanded', 'true');
        } else if (event.keyCode === 27) {
            child[3].classList.add('deskripsi'); 
            child[3].classList.remove('deskripsi_new');
            this.setAttribute('aria-expanded', 'false');
        } 
    })

    pos.children[1].addEventListener('mouseenter', function (event) {
        this.parentElement.setAttribute('aria-expanded', 'true');
    })

    pos.children[1].addEventListener('mouseleave', function (event) {
        this.parentElement.setAttribute('aria-expanded', 'false');
    })
}


    


