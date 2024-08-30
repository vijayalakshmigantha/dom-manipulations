function switchOn(){
    document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("headingEl").textContent="Switch Off"
    document.getElementById("switchOff").style.backgroundColor="#e12d39";
    document.getElementById("switchOn").style.backgroundColor="#cbd2d9";
}

function switchOff(){
    document.getElementById("bulbImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImg").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("headingEl").textContent="Switch On"
    document.getElementById("switchOff").style.backgroundColor="#cbd2d9";
    document.getElementById("switchOff").style.backgroundColor= "#e12d39";
}