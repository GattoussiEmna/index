window.onload = () => {
  const womenCollection = {
    blackOpium: {
      qty: 0,
      isHearted: false,
      price: 150,
    },
    dolceGabana: {
      qty: 0,
      isHearted: false,
      price: 320,
    },
    myWay: {
      qty: 0,
      isHearted: false,
      price: 356,
    },
    olimpya: {
      qty: 0,
      isHearted: false,
      price: 621,
    },
    louisVuitton: {
      qty: 0,
      isHearted: false,
      price: 750,
    },
    dior: {
      qty: 0,
      isHearted: false,
      price: 950,
    },
  };

  const menCollection = {
    clive: {
      qty: 0,
      isHearted: false,
      price: 150,
    },
    gisada: {
      qty: 0,
      isHearted: false,
      price: 850,
    },
    horage: {
      qty: 0,
      isHearted: false,
      price: 622,
    },
    chanel: {
      qty: 0,
      isHearted: false,
      price: 612,
    },
    sauvage: {
      qty: 0,
      isHearted: false,
      price: 897,
    },
    shaves: {
      qty: 0,
      isHearted: false,
      price: 900,
    },
  };

  // ALL ITEMS
  // WOMEN COLLECTION: blackOpium, dolceGabana, myWay, olimpya, louisVuitton, dior
  // MEN COLLECTION: clive, gisada, horage, chanel, sauvage, shaves

  const setWomenCollectionTotalPrice = () => {
    let sum =
      womenCollection.blackOpium.price * womenCollection.blackOpium.qty +
      womenCollection.dolceGabana.price * womenCollection.dolceGabana.qty +
      womenCollection.myWay.price * womenCollection.myWay.qty +
      womenCollection.olimpya.price * womenCollection.olimpya.qty +
      womenCollection.louisVuitton.price * womenCollection.louisVuitton.qty +
      womenCollection.dior.price * womenCollection.dior.qty;

    document.getElementById("womenCollectionTotalPrice").innerText = sum;
  };

  const setMenCollectionTotalPrice = () => {
    let sum =
      menCollection.clive.price * menCollection.clive.qty +
      menCollection.gisada.price * menCollection.gisada.qty +
      menCollection.horage.price * menCollection.horage.qty +
      menCollection.chanel.price * menCollection.chanel.qty +
      menCollection.sauvage.price * menCollection.sauvage.qty +
      menCollection.shaves.price * menCollection.shaves.qty;

    document.getElementById("menCollectionTotalPrice").innerText = sum;
  };

  // IF ADD BUTTON IS CLICKED
  // -- WOMEN COLLECTION
  document.getElementById("blackOpiumAdd").addEventListener("click", () => {
    womenCollection.blackOpium.qty++;
    document.getElementById("blackOpiumQty").innerText =
      womenCollection.blackOpium.qty;
    setWomenCollectionTotalPrice();
  });

  document.getElementById("dolceGabanaAdd").addEventListener("click", () => {
    womenCollection.dolceGabana.qty++;
    document.getElementById("dolceGabanaQty").innerText =
      womenCollection.dolceGabana.qty;
    setWomenCollectionTotalPrice();
  });

  document.getElementById("myWayAdd").addEventListener("click", () => {
    womenCollection.myWay.qty++;
    document.getElementById("myWayQty").innerText = womenCollection.myWay.qty;
    setWomenCollectionTotalPrice();
  });

  document.getElementById("olimpyaAdd").addEventListener("click", () => {
    womenCollection.olimpya.qty++;
    document.getElementById("olimpyaQty").innerText =
      womenCollection.olimpya.qty;
    setWomenCollectionTotalPrice();
  });

  document.getElementById("louisVuittonAdd").addEventListener("click", () => {
    womenCollection.louisVuitton.qty++;
    document.getElementById("louisVuittonQty").innerText =
      womenCollection.louisVuitton.qty;
    setWomenCollectionTotalPrice();
  });

  document.getElementById("diorAdd").addEventListener("click", () => {
    womenCollection.dior.qty++;
    document.getElementById("diorQty").innerText = womenCollection.dior.qty;
    setWomenCollectionTotalPrice();
  });

  // -- MEN COLLECTION
  document.getElementById("cliveAdd").addEventListener("click", () => {
    menCollection.clive.qty++;
    document.getElementById("cliveQty").innerText = menCollection.clive.qty;
    setMenCollectionTotalPrice();
  });

  document.getElementById("gisadaAdd").addEventListener("click", () => {
    menCollection.gisada.qty++;
    document.getElementById("gisadaQty").innerText = menCollection.gisada.qty;
    setMenCollectionTotalPrice();
  });

  document.getElementById("horageAdd").addEventListener("click", () => {
    menCollection.horage.qty++;
    document.getElementById("horageQty").innerText = menCollection.horage.qty;
    setMenCollectionTotalPrice();
  });

  document.getElementById("chanelAdd").addEventListener("click", () => {
    menCollection.chanel.qty++;
    document.getElementById("chanelQty").innerText = menCollection.chanel.qty;
    setMenCollectionTotalPrice();
  });

  document.getElementById("sauvageAdd").addEventListener("click", () => {
    menCollection.sauvage.qty++;
    document.getElementById("sauvageQty").innerText = menCollection.sauvage.qty;
    setMenCollectionTotalPrice();
  });

  document.getElementById("shavesAdd").addEventListener("click", () => {
    menCollection.shaves.qty++;
    document.getElementById("shavesQty").innerText = menCollection.shaves.qty;
    setMenCollectionTotalPrice();
  });

  // IF REMOVE BUTTON IS CLICKED
  // -- WOMEN COLLECTION
  document.getElementById("blackOpiumRemove").addEventListener("click", () => {
    if (womenCollection.blackOpium.qty > 0) {
      womenCollection.blackOpium.qty--;
      document.getElementById("blackOpiumQty").innerText =
        womenCollection.blackOpium.qty;
      setWomenCollectionTotalPrice();
    }
  });

  document.getElementById("dolceGabanaRemove").addEventListener("click", () => {
    if (womenCollection.dolceGabana.qty > 0) {
      womenCollection.dolceGabana.qty--;
      document.getElementById("dolceGabanaQty").innerText =
        womenCollection.dolceGabana.qty;
      setWomenCollectionTotalPrice();
    }
  });

  document.getElementById("myWayRemove").addEventListener("click", () => {
    if (womenCollection.myWay.qty > 0) {
      womenCollection.myWay.qty--;
      document.getElementById("myWayQty").innerText = womenCollection.myWay.qty;
      setWomenCollectionTotalPrice();
    }
  });

  document.getElementById("olimpyaRemove").addEventListener("click", () => {
    if (womenCollection.olimpya.qty > 0) {
      womenCollection.olimpya.qty--;
      document.getElementById("olimpyaQty").innerText =
        womenCollection.olimpya.qty;
      setWomenCollectionTotalPrice();
    }
  });

  document
    .getElementById("louisVuittonRemove")
    .addEventListener("click", () => {
      if (womenCollection.louisVuitton.qty > 0) {
        womenCollection.louisVuitton.qty--;
        document.getElementById("louisVuittonQty").innerText =
          womenCollection.louisVuitton.qty;
        setWomenCollectionTotalPrice();
      }
    });

  document.getElementById("diorRemove").addEventListener("click", () => {
    if (womenCollection.dior.qty > 0) {
      womenCollection.dior.qty--;
      document.getElementById("diorQty").innerText = womenCollection.dior.qty;
      setWomenCollectionTotalPrice();
    }
  });

  // -- MEN COLLECTION
  document.getElementById("cliveRemove").addEventListener("click", () => {
    if (menCollection.clive.qty > 0) {
      menCollection.clive.qty--;
      document.getElementById("cliveQty").innerText = menCollection.clive.qty;
      setMenCollectionTotalPrice();
    }
  });

  document.getElementById("gisadaRemove").addEventListener("click", () => {
    if (menCollection.gisada.qty > 0) {
      menCollection.gisada.qty--;
      document.getElementById("gisadaQty").innerText = menCollection.gisada.qty;
      setMenCollectionTotalPrice();
    }
  });

  document.getElementById("horageRemove").addEventListener("click", () => {
    if (menCollection.horage.qty > 0) {
      menCollection.horage.qty--;
      document.getElementById("horageQty").innerText = menCollection.horage.qty;
      setMenCollectionTotalPrice();
    }
  });

  document.getElementById("chanelRemove").addEventListener("click", () => {
    if (menCollection.chanel.qty > 0) {
      menCollection.chanel.qty--;
      document.getElementById("chanelQty").innerText = menCollection.chanel.qty;
      setMenCollectionTotalPrice();
    }
  });

  document.getElementById("sauvageRemove").addEventListener("click", () => {
    if (menCollection.sauvage.qty > 0) {
      menCollection.sauvage.qty--;
      document.getElementById("sauvageQty").innerText =
        menCollection.sauvage.qty;
      setMenCollectionTotalPrice();
    }
  });

  document.getElementById("shavesRemove").addEventListener("click", () => {
    if (menCollection.shaves.qty > 0) {
      menCollection.shaves.qty--;
      document.getElementById("shavesQty").innerText = menCollection.shaves.qty;
      setMenCollectionTotalPrice();
    }
  });

  // IF HEART ICON IS IS CLICKED
  // ...
  
  let hearts = document.getElementsByClassName('heart')
  console.log(hearts)
  for(let heart of hearts){
    heart.addEventListener('click' , function(){
      if(heart.getAttribute('fill') =='grey'){
        heart.setAttribute('fill' , 'red')
      }
      else{
        heart.setAttribute('fill' , 'grey')
      }
    })
  }

  
};




VanillaTilt.init(document.querySelectorAll("img"), {
  max: 25,
  speed: 400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  perspective: 500,
  transition: true,
});