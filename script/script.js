const imp = document.querySelector('#imp');

let noOfBox = 16;
let eachBoxSize = 420/noOfBox;


for(let i=0; i<noOfBox ; i++){
    const main = document.createElement('div');
    main.setAttribute('class','main')
    imp.appendChild(main)
    for (let i=0; i<noOfBox ; i++){
        let single = document.createElement('div');
        single.setAttribute('class','single');
        single.setAttribute('style',`width:${eachBoxSize}px;height:${eachBoxSize}px;border:0px`)
        main.appendChild(single); 
    }
}

const singles = document.querySelectorAll('.single')
singles.forEach(single => {
    single.addEventListener('click', e => {
        single.setAttribute('style',`background-color: black;width:${eachBoxSize}px;height:${eachBoxSize}px;border:0px`)
    })
})


const reset = document.querySelector('#reset')
    reset.addEventListener('click', e => {
        singles.forEach(single => {
        single.setAttribute('style',`background-color:white; width:${eachBoxSize}px;height:${eachBoxSize}px;border:0px`)
        })
    })






















