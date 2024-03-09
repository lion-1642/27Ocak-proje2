const kiloInput = document.querySelector("#kiloInput");
const select = document.querySelector("select");
const btnHesapla = document.querySelector("#btnHesapla");
const img = document.querySelector("#for-img");
const sonuc = document.querySelector("#sonuc");
const flexContainer = document.querySelector(".flex-container");

const hesapla = () => {
    let kilo = Number(kiloInput.value);
    // console.log(kilo);
    kilo = kilo / 9.81;
    // console.log(kilo);

    let gezegen = select.value;
    console.log(gezegen);

    if(kiloInput.value != "" && select.value != "Bir seçim yapınız"){
        if(gezegen == "Dünya"){
            img.setAttribute("src", "img/earth.png")
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 9.81).toFixed(2)}kg`
        }else if(gezegen == "Jüpiter"){
            img.setAttribute("src", "img/jupiter.png")
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 24.79).toFixed(2)}kg`
        }else if(gezegen == "Mars"){
            img.setAttribute("src", "img/mars.png")
            sonuc.innerHTML = `Seçtiğiniz gezegen ${gezegen}. Bu gezegendeki ağırlığınız : ${(kilo * 3.71).toFixed(2)}kg`
        }
    }else{
        img.setAttribute("src", "https://w7.pngwing.com/pngs/111/91/png-transparent-warning-sign-triangle-area-symbol-sign-alert-angle-triangle-sign-thumbnail.png");
        
        sonuc.innerHTML = `Kilogram girip bir gezegen seçmeniz gerekiyor.`
        sonuc.classList.remove("text-white");
        sonuc.classList.add("text-danger");
        
        flexContainer.style.border = "2px solid red";
    }
}


btnHesapla.addEventListener("click", hesapla);
