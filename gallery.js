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
}