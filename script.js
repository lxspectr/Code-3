const data1 = [{
    'name': 'Emperor',
    'imageUrl': 'http://www.penguinworld.com/types/emperor_files/emperorl-2.jpg',
    'size': '36.7kg (m), 28.4kg (f)',
    'favoriteFood': 'fish and squid'
}, {
    'name': 'Macaroni',
    'imageUrl': 'http://www.penguinworld.com/types/macaroni_files/macaroni-002850029.jpg',
    'size': '5.2kg (m), 5.3kg (f)',
    'favoriteFood': 'krill'
}, {
    'name': 'Chinstrap',
    'imageUrl': 'http://www.penguinworld.com/types/chinstrap_files/chinstrapl-2.jpg',
    'size': '5.0kg (m), 4.8kg (f)',
    'favoriteFood': 'krill'
}, {
    'name': 'Erect-crested',
    'imageUrl': 'http://www.penguinworld.com/types/erect_files/erectl-2.jpg',
    'size': '5.2kg (m), 5.1kg (f)',
    'favoriteFood': 'krill and squid'
}, {
    'name': 'African',
    'imageUrl': 'http://www.penguinworld.com/types/african_files/africanl-2.jpg',
    'size': '3.3kg (m), 3.0kg (f)',
    'favoriteFood': 'small fish'
}]

const data2 = [{
    'name': 'Adelie',
    'imageUrl': 'https://www.penguinworld.com/types/adelie_files/adeliel-2.jpg',
    'size': '5.4 kg (m), 4.7 kg (f)',
    'favoriteFood': 'krill'
}, {
    'name': 'Fiordland',
    'imageUrl': 'https://www.penguinworld.com/types/fiordland_files/fiordlandl-2.jpg',
    'size': '4.1 kg (m), 3.7 kg (f)',
    'favoriteFood': 'fish and squid'
}, {
    'name': 'Galapagos',
    'imageUrl': 'https://www.penguinworld.com/types/galapagos_files/galapagosl-2.jpg',
    'size': '2.1 kg (m), 1.7 kg (f)',
    'favoriteFood': 'small fish'
}, {
    'name': 'Gentoo',
    'imageUrl': 'https://www.penguinworld.com/types/gentoo_files/gentool-2.jpg',
    'size': '5.6 kg (m), 5.1 kg (f)',
    'favoriteFood': 'krill and squid'
}, {
    'name': 'Humboldt',
    'imageUrl': 'https://www.penguinworld.com/types/humboldt_files/humboldt-2.jpg',
    'size': '4.9 kg (m), 4.5 kg (f)',
    'favoriteFood': 'small fish'
}];

class ListPenguins {
    constructor(container, data) {
        this.container = container;
        this.data = data;
        this.i = 0;
        this.setDiv();
        this.control();
        this.render()
    }
    control(){
        this.next.addEventListener('click', () => {
            if (this.i < this.data.length - 1) {
                this.i++
            } else {
                this.i = 0
            }
            this.render()
        });
        this.prev.addEventListener('click', () => {
            this.i--;
            if (this.i < 0) {
                this.i = this.data.length - 1
            }
            this.render()
        })
    }
    setDiv() {
        this.namePenguin = this.container.querySelector('.pName');
        this.img = this.container.querySelector('.penguin-image');
        this.info = this.container.querySelector('.size');
        this.food = this.container.querySelector('.fFood');
        this.next = this.container.querySelector('.next');
        this.prev = this.container.querySelector('.previous');
    }

    render() {
        this.img.setAttribute('src', this.data[this.i].imageUrl);
        this.info.innerHTML = "<b>Size:</b> " + this.data[this.i].size;
        this.food.innerHTML = "<b>Favorite food:</b> "+ this.data[this.i].favoriteFood;
        this.namePenguin.innerHTML = this.data[this.i].name;
    }
}


let container1 = document.querySelector('#listOfPenguins');
let container2 = document.querySelector('#listOfPenguins2');

let list1 = new ListPenguins(container1, data1);
let list2 = new ListPenguins(container2, data2);