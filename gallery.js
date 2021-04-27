var sImgArr = document.querySelectorAll("img");

for(var i=0; i<sImgArr.length; i++) {
    sImgArr[i].onclick = showBigImage;
}

function showBigImage(event) {
    var bImgFileName = event.target.src.split("/").pop().replace("s", "b"),
        bigImageDiv = document.getElementById("bigImageDiv"),
        bigImage = document.createElement("img");

    bigImage.className = "rounded-lg shadow-lg w-11/12 md:w-2/3";
    bigImage.src = "img/big/" + bImgFileName;
    bigImage.alt = event.target.alt;

    bigImageDiv.innerHTML = "";
    bigImageDiv.append(bigImage);

    bigImage.onerror = function() {
        bigImage.src = "img/big/nif.png";
    }

    var imgText = document.createElement("span");
    imgText.className = "absolute bottom-5 md:bottom-10 text-3xl md:text-6xl text-white text-opacity-50";
    imgText.innerHTML = event.target.alt;
    bigImageDiv.append(imgText);

    var imgNavDiv = document.createElement("div");
    imgNavDiv.className = "absolute grid grid-cols-12 w-11/12 md:w-2/3 h-full";

    var imgNavPrev = document.createElement("div");
    imgNavPrev.className = "bg-white opacity-10 cursor-pointer transform hover:opacity-25 transition duration-300 rounded-l-lg flex items-center justify-center";
    imgNavPrev.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-center" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" /></svg>';
    imgNavDiv.append(imgNavPrev);

    imgNavPrev.addEventListener("click", function(){
        switch(bImgFileName) {
            case "b_1.jpg":
                bImgFileName = "b_3.jpg";
                imgText.innerHTML = "Снежный Барс";
                break;
            case "b_2.jpg":
                bImgFileName = "b_1.jpg";
                imgText.innerHTML = "БАО";
                break;
            case "b_3.jpg":
                bImgFileName = "b_2.jpg";
                imgText.innerHTML = "Алтын-Эмель";
                break;
            default:
                bImgFileName = "nif.png";
                break;
        }

        bigImage.src = "img/big/" + bImgFileName;
    });

    var imgNavNext = document.createElement("div");
    imgNavNext.className = "bg-white opacity-10 cursor-pointer transform hover:opacity-25 transition duration-300 col-start-12 rounded-r-lg flex items-center justify-center";
    imgNavNext.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>';
    imgNavDiv.append(imgNavNext);

    imgNavNext.addEventListener("click", function(){
        switch(bImgFileName) {
            case "b_1.jpg":
                bImgFileName = "b_2.jpg";
                imgText.innerHTML = "Алтын-Эмель";
                break;
            case "b_2.jpg":
                bImgFileName = "b_3.jpg";
                imgText.innerHTML = "Снежный Барс";
                break;
            case "b_3.jpg":
                bImgFileName = "b_1.jpg";
                imgText.innerHTML = "БАО";
                break;
            default:
                bImgFileName = "nif.png";
                break;
        }

        bigImage.src = "img/big/" + bImgFileName;
    });

    bigImageDiv.append(imgNavDiv);
}