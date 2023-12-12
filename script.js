var images = document.querySelectorAll('.image')
var container = document.querySelector('.container')
images.forEach((e)=>{
    e.addEventListener('click', imageSlider)

})

function imageSlider(e){
imgUrl = e.target.src
document.querySelector('.inner-container').style.width = '100%'
document.querySelector('.inner-container').style.height = '100%'
document.querySelector('.inner-container').style.left = '0'
document.querySelector('.inner-container').style.top = '0'
container.style.background = `url(${imgUrl})`
setTimeout(()=>{
    document.querySelector('.inner-container').style.width = '0%' 
    document.querySelector('.inner-container').style.height = '0%'
    document.querySelector('.inner-container').style.left = '50%'
    document.querySelector('.inner-container').style.top = '50%'
    
},500)
}


//next
var index = 0
document.getElementById('next').addEventListener('click' , ()=>{
    console.log('next');
    console.log(images.length);
   if(index <= images.length-5 ){
    images[index].style.marginLeft = "-200px"
    index++
    console.log(index);
   }
//    for(i = 0 ; i >= images.length; i++ ){
//     console.log(images[i])
//    }
})


//prev
var prevIndex = images.length-1
var pixalIndex = 1
document.getElementById('prev').addEventListener('click' , ()=>{
    console.log(`${200*pixalIndex}px`)
    images[prevIndex].marginLeft = `-${200*pixalIndex}px`,
    prevIndex--
    pixalIndex++
})