let salon = {
    name: 'The Pet Salon',
    phone: '916-215-321',
    address: {
        street: 'Main',
        number: '3245'
    },
    workingHours: {
        open: '0900',
        close: '1700'
    },

    pets: []
}; 

var petCnt=0; // we start in 0 pets

function Pet(name, age, serviceType, ownerName, phoneContact) { 
    this.id="pt"+petCnt;
    petCnt+=1;

    this.hunger = 20;
    this.happiness = 10;
    this.name = name;
    this.age = age;
    this.serviceType =  serviceType;
    this.ownerName = ownerName;
    this.phoneContact = phoneContact ;

    this.feed = function() {
        this.hunger -=10;
        this.happiness +=10;
    }

    this.status= function () {
        console.log(this.name, 'hunger level = ' + this.hunger, 'Happy level = ' + this.happiness);
    }

    this.ownerContact = function() {
        console.log('The owner of ' + this.name  + ' is ' + this.ownerName, 'and to contact them, call ' + this.phoneContact);
    }

}

function registerPet() {
    
    var txtName= document.getElementById("petName");
    var txtAge= document.getElementById("petAge");
    var txtOwner= document.getElementById("ownerName");
    var txtPhone= document.getElementById("ownerNumber");
    var selService= document.getElementById("selService");

    
    var thePet = new Pet(txtName.value, txtAge.value, txtOwner.value, txtPhone.value, selService.value);

    console.log(thePet);

    eraseBtn();

    salon.pets.push(thePet);

    displayPet(thePet);

    alert('We have ' + salon.pets.length + ' new pets as customers.');
    
}

function eraseBtn() {

    petName.value="";
    petAge.value="";
    ownerName.value="";
    ownerNumber.value="";
    selService.value="";
}


function displayPet(aPet) {
    var list = document.getElementById('petList');
    
    

}


function displayPetTable(aPet) {
    var tBody = document.getElementById('listBody');

    var row = `<tr id='${aPet.id}'> <td>${aPet.name}</td> <td>${aPet.age}</td> <td>${aPet.ownerName}</td> <td>${aPet.phoneContact}</td> <td>${aPet.serviceType}</td> </tr>  `;
    tBody.innerHTML+=row;
}