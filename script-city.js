const cityMap = document.querySelector("#city-map");
const swoosh = document.createElement('audio');
const bldg = {
    feuDiliman: "https://cdn.glitch.com/1e04e99f-b859-4c58-a916-69aa5ce193aa%2Ftriplets.png?v=1625812026929",
    feuAlabang: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/FEU-Building.png",
    feuTech: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/beige.png",
    Affordable: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/pharmacy.png",
    ClimateChange: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/white.png",
    GoodHealth: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/hospital.png",
    Industry: "https://cdn.glitch.com/1e04e99f-b859-4c58-a916-69aa5ce193aa/tallest.png",
    NoPoverty: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/bank.png",
    QualityEducation: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/LB-building.png",
    Sustain: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/apartment.png",
    ZeroHunger: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/bakery.png",
    FeatureArts: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/small_triplets.png",
    JPCS: "https://cdn.glitch.com/1e04e99f-b859-4c58-a916-69aa5ce193aa/corner.png",
    FTIC: "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/cafe.png",
    ACM: "https://cdn.glitch.com/1e04e99f-b859-4c58-a916-69aa5ce193aa/blue-building.png",
    AnotherCity: gDrivePhoto("https://drive.google.com/file/d/1-Wht4G9PLOsddgoIfdTsBK9ff96hIMYT/view?usp=drive_link")
}

const directLink = {
    feuDiliman: "https://www.facebook.com/profile.php?id=61557273780466&mibextid=ZbWKwL",
    feuAlabang: "https://feualabang.edu.ph/",
    feuTech: "https://www.facebook.com/profile.php?id=61557448672989&mibextid=ZbWKwL",
    FeatureArts: "https://www.youtube.com/watch?v=8YkvlWpixpY&ab_channel=TAMbayanTV",
    JPCS: "https://hubs.mozilla.com/45xuGov/mature-infatuated-domain",
    FTIC: "https://drive.google.com/file/d/1jN5nXJFlbdvzXURVXw25y0eCZYXCiupu/view",
    ACM: "https://www.youtube.com/watch?v=ZwGRnGjFP3Y&ab_channel=TAMbayanTV"
}

const pins = {
    school: gDrivePhoto("https://drive.google.com/file/d/1kJopfKrjrRm-1sJ-FRadKHsjmrLNgugh/view?usp=drive_link"),
    watch: gDrivePhoto("https://drive.google.com/file/d/14S1OlDVFJZq0Tt9_7O2Bt79h93794IpN/view?usp=drive_link"),
    diliman: gDrivePhoto("https://drive.google.com/file/d/1s4gNXM8Ol67oZWFOyBoeTh7uIx8zNqK3/view?usp=drive_link"),
    tech: gDrivePhoto("https://drive.google.com/file/d/1zRL3V2kGzb12kZxhLSZOiuMilA6oFmT1/view?usp=drive_link"),
    Affordable: gDrivePhoto("https://drive.google.com/file/d/1MwRoMeMaLAZAG6ine9hhdTBkZLmp1aAX/view?usp=drive_link"),
    ClimateChange: gDrivePhoto("https://drive.google.com/file/d/1BexkoIKqnsMWNNbUoAF4R9iLgeItzGBA/view?usp=drive_link"),
    GoodHealth: gDrivePhoto("https://drive.google.com/file/d/1bDnAB6119krVowxl96MKOjO2CyJfXbZ1/view?usp=drive_link"),
    Industry: gDrivePhoto("https://drive.google.com/file/d/1HFw5QcnkmopfLmOaPpzzCfW1Wfe5R9cO/view?usp=drive_link"),
    NoPoverty: gDrivePhoto("https://drive.google.com/file/d/1OT1EtnQSkziXLvhFTywbzgeQHc5wFEkI/view?usp=drive_link"),
    QualityEducation: gDrivePhoto("https://drive.google.com/file/d/15JyS2QQ0rr5bQ6FWpdUPH2qT9tF2Ooqy/view?usp=drive_link"),
    Sustain: gDrivePhoto("https://drive.google.com/file/d/1_gJ7BHHhgBkl_y48LDzkjvgOnEyhDwIT/view?usp=drive_link"),
    ZeroHunger: gDrivePhoto("https://drive.google.com/file/d/14pftcefDGfo2kmHI9cl2NuoCL6R3P7W7/view?usp=drive_link")
}

        
function addAsset(bldgName, bldgID, pinIcon, directLink, bldgImgURL) {
    var txt = document.createElement('div');
    txt.classList.add('txt');
    txt.innerHTML = bldgName.toUpperCase();

    var pin = document.createElement('div');
    pin.classList.add('pin')
    pin.style.backgroundImage = 'url(' + pinIcon + ')';

    var bldg = document.createElement('img');
    bldg.setAttribute('src', bldgImgURL);

    var div = document.createElement('div');
    div.setAttribute('id', bldgID);
    div.appendChild(bldg);
    div.appendChild(pin);
    div.appendChild(txt);
    div.setAttribute('onclick', 'window.open("' +directLink + '", "_blank")');
    div.setAttribute('onmouseover', 'playSound()');
    div.setAttribute('onmouseout', 'stopSound()');

    cityMap.appendChild(div);
}

function gDrivePhoto(imgURL) {
    imgURL = imgURL.substring(imgURL.indexOf("/d/") + 3);
    imgURL = imgURL.substring(0, imgURL.indexOf("/"));
    return "https://drive.google.com/thumbnail?id=" + imgURL;
}

function playSound(){
    swoosh.play();
}

function stopSound() {
    swoosh.stop();
    swoosh.currentTime = 0;
}

addAsset("FEU Diliman", "feu-diliman", pins.school, directLink.feuDiliman, bldg.feuDiliman);
addAsset("FEU Alabang", "feu-alabang", pins.school, directLink.feuAlabang, bldg.feuAlabang);
addAsset("FEU Tech", "feu-tech", pins.school, directLink.feuTech, bldg.feuTech);
addAsset("Feature Arts", "arts", pins.watch, directLink.FeatureArts, bldg.FeatureArts);
addAsset("JPCS", "jpcs", pins.watch, directLink.JPCS, bldg.JPCS);
addAsset("FTIC", "ftic", pins.watch, directLink.FTIC, bldg.FTIC);
addAsset("ACM", "acm", pins.watch, directLink.ACM, bldg.ACM);


swoosh.setAttribute('src',"https://cdn.glitch.com/546a765c-09a6-48da-a4be-14fc266c8c7f%2Fswoosh2.mp3?v=1614870466456");
document.querySelector('body').appendChild(swoosh);

