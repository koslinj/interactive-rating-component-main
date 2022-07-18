let rating=0;

document.querySelector('.n1').onclick = function(){
    rating = 1;
    console.log(rating);
}

document.querySelector('.n2').onclick = function(){
    rating = 2;
    console.log(rating);
}

document.querySelector('.n3').onclick = function(){
    rating = 3;
    console.log(rating);
}

document.querySelector('.n4').onclick = function(){
    rating = 4;
    console.log(rating);
}

document.querySelector('.n5').onclick = function(){
    rating = 5;
    console.log(rating);
}

document.querySelector('.submit').onclick = function(){
    if(rating != 0){
        document.querySelector('.container1').classList.add("hidden");
    document.querySelector('.container2').classList.remove("hidden");
    document.querySelector('.info').innerHTML = `<p>You selected ${rating} out of 5</p>`;
    }
    else{
        alert("YOU DID NOT PICK ANY RATING");
    }
}
