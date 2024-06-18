const imageContainer = document.getElementById('container-grid');
    const buttons = Array.from(document.getElementsByClassName('category-button'));

    const imageSources = {
      chineseContainer: [
        'https://i.imgur.com/OmsXtFy.png',
        'https://i.imgur.com/Xt2JgiQ.png',
        'https://i.imgur.com/qVaCDw9.png',
        'https://i.imgur.com/GQhBqbq.png',
        'https://i.imgur.com/ThOfBdD.jpeg',
        'https://i.imgur.com/05n9gqP.png',
        'https://i.imgur.com/FoCvoBl.png'
      ],
      englishContainer: [
        'https://i.imgur.com/obZ9egt.png',
        'https://i.imgur.com/ED0P1Zw.png',
        'https://i.imgur.com/u8uOLCI.png',
        'https://i.imgur.com/BhvYcfY.png',
        'https://i.imgur.com/LPPlxm6.png',
        'https://i.imgur.com/BEvMvdl.png'
      ],
      mathematicsContainer: [
        'https://i.imgur.com/Blj2lg2.png',
        'https://i.imgur.com/jinRU82.png',
        'https://i.imgur.com/Eamlnkf.png',
        'https://i.imgur.com/hDZiYC6.png',
        'https://i.imgur.com/B8dRuvh.png',
        'https://i.imgur.com/AYRTu4a.png',
        'https://i.imgur.com/cR9ahIH.png',
        'https://i.imgur.com/bSuOTw3.png',
        'https://i.imgur.com/4RWrThu.png',
        'https://i.imgur.com/KnUvl5D.png',
        'https://i.imgur.com/vUgeN4G.png',
        'https://i.imgur.com/4fUvn93.png',
        'https://i.imgur.com/wQFy1SM.png',
        'https://i.imgur.com/7RRhGvj.png',
        'https://i.imgur.com/XIQydv2.png',
        'https://i.imgur.com/Y6BGEft.png'
      ],
      scholarshipsContainer: [
        'https://i.imgur.com/OTOsMVU.png',
        'https://i.imgur.com/ILLsnkC.png',
        'https://i.imgur.com/8chTgFN.png',
        'https://i.imgur.com/YSnzaM7.png',
        'https://i.imgur.com/dtFNYiv.png',
        'https://i.imgur.com/JaeCoso.png',
        'https://i.imgur.com/5obqjxR.png',
        
 'https://i.imgur.com/galXQRn.jpg',
        
 'https://i.imgur.com/i6w8kni.jpg', 
        'https://i.imgur.com/Q1L98rI.jpg',
        'https://i.imgur.com/RmRadIX.jpg',
        'https://i.imgur.com/6MykZOy.jpg',
        'https://i.imgur.com/dzLHx3G.jpg',
        'https://i.imgur.com/PuQmet4.jpg',
        'https://i.imgur.com/a0vMlrz.jpg',
        'https://i.imgur.com/9doqTfc.jpg',
        
 'https://i.imgur.com/ljbetUR.jpg',
        'https://i.imgur.com/KOwvVeI.jpg',
        'https://i.imgur.com/Ci5ozup.jpg',
        'https://i.imgur.com/yrkzfmZ.jpg',
        'https://i.imgur.com/7faWjg4.jpg',
        'https://i.imgur.com/cPkGlEZ.jpg',
        'https://i.imgur.com/K1cX4JR.jpg',
        'https://i.imgur.com/P6lxZ44.jpg',
        'https://i.imgur.com/v4MxplU.jpg',
        'https://i.imgur.com/jHul86x.jpg',
        'https://i.imgur.com/g2o4yIQ.jpg',
        'https://i.imgur.com/FwwhgW1.jpg',
        'https://i.imgur.com/4f16sWX.jpg',
        'https://i.imgur.com/ihIwTnw.jpg',
        'https://i.imgur.com/2gODh88.jpg',
        'https://i.imgur.com/wWc1uvO.jpg',
        'https://i.imgur.com/Qd4FaQf.jpg'   

      ],
      otherContainer: [
        'https://i.imgur.com/gEDTJMo.png',
        'https://i.imgur.com/TUWQSlz.png',
        'https://i.imgur.com/3hwZ54k.png',
        'https://i.imgur.com/LCaqPcQ.png',
        'https://i.imgur.com/BhY3Yz7.png',
        'https://i.imgur.com/ewKodIl.png',
        'https://i.imgur.com/xRBJVx1.png',
        'https://i.imgur.com/bzbWQJ1.png',
        'https://i.imgur.com/b20qUKA.png',
        'https://i.imgur.com/65Zqhr1.png',
        'https://i.imgur.com/XIbuGSd.jpeg',
        'https://i.imgur.com/LYqljCk.jpeg',
        'https://i.imgur.com/5WRLcvr.jpeg',
        'https://i.imgur.com/VWNwqwp.jpeg',
        'https://i.imgur.com/BQrCu3w.jpg',
        'https://i.imgur.com/oiquPJO.jpeg',
        'https://i.imgur.com/pMGA9h5.jpeg',     
      ]
    };

    function updateImages(category) {
      const images = imageSources[category];
      const imageElements = imageContainer.getElementsByTagName('img');

      Array.from(imageElements).forEach((img, index) => {
        img.src = images[index];
        img.style.display = "block"; // Show the image
      });
    }

    function updateActiveButton(clickedButton) {
      buttons.forEach((button) => {
        button.classList.remove('active');
      });

      clickedButton.classList.add('active');
    }

    function handleButtonClick(event) {
      const clickedButton = event.target;
      const category = clickedButton.dataset.category;

      updateImages(category);
      updateActiveButton(clickedButton);
    }

    buttons.forEach((button) => {
      button.addEventListener('click', handleButtonClick);
    });