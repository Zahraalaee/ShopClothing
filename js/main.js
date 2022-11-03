let products = document.querySelector("section.Products")
let showProducts = async () => {
    let response = await fetch("http://localhost:1000/Products").then(function (res) {
        return res.json()
    })
    let productsHtml = ""
    response.map((elem) => {
        ``
        productsHtml += `${elem.price !== null ? `<div>
        <div class="images-pro">
        <div>${elem.hov}</div>
        <img src=${elem.image} alt="product-01" " />
        <div class="tow"></div>
        </div>
        <b>${elem.title}</b>
        <span class="off">${elem.priceOld}</span>
        <span> ${elem.price}</span>
        <button>${elem.off}</button>
        </div>`: `<div>
        <div class="images-pro">
        <div>${elem.hov}</div>
        <img src=${elem.image} alt="product-01" width="300px" />
        <div></div>
        </div>
        <b>${elem.title}</b>
        <span>${elem.priceOld}</span>
        </div>`}
   `
    })
    products.innerHTML = productsHtml
}
showProducts()



let fhead = document.querySelector("div.fhead")
let showfhead = async () => {
    let response = await fetch("http://localhost:1000/fhead").then(function (res) {
        return res.json()
    })
    let fheadHtml = ""
    response.map((elem) => {
        fheadHtml += ` 
        <input type="${elem.type}" placeholder="${elem.placeholder}" name="${elem.name}"/>

        <span>
            <i class="fas fa-female"> </i>
            <span>${elem.menuw}</span>
            <i class="fas fa-male"> </i>
            <span>${elem.menum} </span>
            <i class="fas fa-dollar-sign"> </i>
            <span> ${elem.menud} </span>
            <i class="fas fa-swatchbook"> </i>
            <span> ${elem.menus}</span>
        </span>
`
    })
    fhead.innerHTML = fheadHtml
}
showfhead()


let know = document.querySelector("div.know")
let showknow = async () => {
    let response = await fetch("http://localhost:1000/know").then(function (res) {
        return res.json()
    })
    let knowhtml = ""
    response.map((elem) => {
        knowhtml += ` 
    <h2> ${elem.title} </h2>
    <p>
    ${elem.p}
    </p>
    <button>${elem.butt} <i class="fab fa-instagram"></i> </button>
`
    })
    know.innerHTML = knowhtml
}
console.log(know)
showknow()


let fashion = document.querySelector("div.fashion")
let showFashion = async () => {
    let response = await fetch("http://localhost:1000/fashion").then(function (res) {
        return res.json()
    })
    let fashionHtml = ""
    response.map((elem) => {
        fashionHtml += `<img src="${elem.image}" alt="test" width="300px" />`
    })
    fashion.innerHTML = fashionHtml
}
showFashion()

let sitemap = document.querySelector("div.sitemap")
let showSiteMap = async () => {
    let response = await fetch("http://localhost:1000/menuFooter").then(function (res) {
        return res.json()
    })
    let sitemapHtml = ""
    response.map((elem) => {
        sitemapHtml += `<span><a href="${elem.https}">${elem.menu}</a></span>`
    })
    sitemap.innerHTML = sitemapHtml
}
showSiteMap()


let menuhead = document.querySelector("div.menuhead")
let showmenuhead = async () => {
    let response = await fetch("http://localhost:1000/menuhead").then(function (res) {
        return res.json()
    })
    let menuheadhtml = ""
    response.map((elem) => {
        menuheadhtml += `<ul><li><a href="${elem.https}"> ${elem.menuh} </a></li></ul>`
    })
    menuhead.innerHTML = menuheadhtml
}
showmenuhead()

let menulogo = document.querySelector("div.menulogo")
let showmenulogo = async () => {
    let response = await fetch("http://localhost:1000/menulogo").then(function (res) {
        return res.json()
    })
    let menulogohtml = ""
    response.map((elem) => {
        menulogohtml += `<img src="${elem.image}" alt="logo" width="150px"/>`
    })
    menulogo.innerHTML = menulogohtml
}
showmenulogo()

let menuico = document.querySelector("div.menuico")
let showmenuico = async () => {
    let response = await fetch("http://localhost:1000/menuico").then(function (res) {
        return res.json()
    })
    let menuicohtml = ""
    response.map((elem) => {
        menuicohtml += `
        <i class=" ${elem.icon}"></i>
        <i class="${elem.icon1}"></i>
    `
    })
    menuico.innerHTML = menuicohtml
}
showmenuico()

let header = document.querySelector("section.header")
let showheader = async () => {
    let response = await fetch("http://localhost:1000/header").then(function (res) {
        return res.json()
    })
    let headerhtml = ""
    response.map((elem) => {
        headerhtml += `
        <div>
        <h3>
           ${elem.title}
        </h3>
        <p>
           ${elem.body}
        </p>
        <span>
           ${elem.button}
        </span>
    </div>
    <div>
        <h3>
        ${elem.title}
        </h3>
        <p>
        ${elem.body}
        </p>
        <span>
        ${elem.button}
        </span>
    </div>`
    })
}
showheader()



let lastfooter = document.querySelector("div.lastfooter")
let showlastfooter = async () => {
    let response = await fetch("http://localhost:1000/lastfooter").then(function (res) {
        return res.json()
    })
    let lastfooterHtml = ""
    response.map((elem) => {
        lastfooterHtml += `<span><a href="${elem.https}">${elem.menul}</a></span>`
    })
    lastfooter.innerHTML = lastfooterHtml
}
showlastfooter()


let Copyright = document.querySelector("section.Copyright")
let showCopyright = async () => {
    let response = await fetch("http://localhost:1000/Copyright").then(function (res) {
        return res.json()
    })
    let CopyrightHtml = ""
    response.map((elem) => {
        CopyrightHtml += `<div class="data-cpyright"> ${elem.p} </div>`
    })
    Copyright.innerHTML = CopyrightHtml
}
showCopyright()

let CLIENTS = document.querySelector("section.CLIENTS")
let showCLIENTS = async () => {
    let response = await fetch("http://localhost:1000/CLIENTS").then(function (res) {
        return res.json()
    })
    let CLIENTSHtml = ""
    response.map((elem) => {
        CLIENTSHtml += `<div>
        <h3>
          ${elem.title}
        </h3>
        <p>
            ${elem.pragraf}
        </p>
        <div> <img src=${elem.image}> </div> 
        <a>${elem.button} <i class="fas fa-angle-right"></i> </a> </div>`
    })
    CLIENTS.innerHTML = CLIENTSHtml
}
showCLIENTS()

let lobortis = document.querySelector("div.lobortis")
let showlobortis = async () => {
    let response = await fetch("http://localhost:1000/lobortis").then(function (res) {
        return res.json()
    })
    let lobortisHtml = ""
    response.map((elem) => {
        lobortisHtml += ` <img src=${elem.image} alt="logo">
         <div> <p> ${elem.paragraf} </p>  <a href="">${elem.href}</a> </div> `
    })
    lobortis.innerHTML = lobortisHtml
}
console.log(lobortis)
showlobortis()


let view = document.querySelector("div.view")
let showview = async () => {
    let response = await fetch("http://localhost:1000/view").then(function (res) {
        return res.json()
    })
    let viewHtml = ""
    response.map((elem) => {
        viewHtml += `   <div>
        <img src="${elem.icon}" alt="icon">
        <p>${elem.p}</p> 
        <a href="#">${elem.a} </a>
    </div>
   `
    })
    view.innerHTML = viewHtml
}
showview()

let banner = document.querySelector("div.banner")
let showbanner = async () => {
    let response = await fetch("http://localhost:1000/banner").then(function (res) {
        return res.json()
    })
    let bannerHtml = ""
    response.map((elem) => {
        bannerHtml += ` <h1>${elem.h1} </h1>   `
    })
    banner.innerHTML = bannerHtml
}
showbanner()

let rightside = document.querySelector("div.rightside")
let showrightside = async () => {
    let response = await fetch("http://localhost:1000/rightside").then(function (res) {
        return res.json()
    })
    let rightsideHtml = ""
    response.map((elem) => {
        rightsideHtml += ` <img src="${elem.img}" alt="banner" width="400px">
        <p>${elem.p}</p>
        <h2>${elem.h2}</h2>
        <span>${elem.span} </span>
        <span>${elem.span2} </span> `
    })
    rightside.innerHTML = rightsideHtml
}
showrightside()


let leftside = document.querySelector("div.leftside")
let showleftside = async () => {
    let response = await fetch("http://localhost:1000/leftside").then(function (res) {
        return res.json()
    })
    let leftsideHtml = ""
    response.map((elem) => {
        leftsideHtml += ` <form action="">
        <div>
            <div> <label for="" class="label"> ${elem.label1} </label>
                <input type="text">

                <label for="" class="label"> ${elem.label2}  </label>
                <input type="text">
            </div>
            
            <div>
                <label for="" class="label"> ${elem.label3} </label>
                <input type="text">

                <label for="" class="label">  ${elem.label4}  </label>
                <input type="text">
            </div>
        </div>
        <div>
            <label for="" class="label">  ${elem.label5} </label>
            <input type="text">

            <label for="" class="label">  ${elem.label6} </label>
            <input type="text">
            <label for="" class="label"> ${elem.label7} </label>
            <input type="text">

        </div>
       
        <label for="" class="label"> ${elem.label8} </label>
        <textarea name="" id=""></textarea>
    </form>  `
    })
    leftside.innerHTML = leftsideHtml
}
showleftside()



let collections = document.querySelector("section.collections")
let showcollections = async () => {
    let response = await fetch("http://localhost:1000/collections").then(function (res) {
        return res.json()
    })
    let collectionsHtml = ""
    response.map((elem) => {
        collectionsHtml += `
        <div>
        <h2>${elem.h2}</h2>
        <p> ${elem.p} </p>
        <a href=""> ${elem.a} </a>
    </div>
    <div> <img src="${elem.image1}" alt="" ><span>Casual collection 7</span></div>
    <div> <img src="${elem.image2}" alt="" > <span>Spring collection 11 </span></div>
    <div> <img src="${elem.image3} " alt=""> <span> Streetwear 4 </span> </div>  `
    })
    collections.innerHTML = collectionsHtml
}
showcollections()

let fusion = document.querySelector("section.fusion")
let showfusion = async () => {
    let response = await fetch(" http://localhost:1000/fusion").then(function (res) {
        return res.json()
    })
    let fusionHtml = ""
    response.map((elem) => {
        fusionHtml += `    <div>
        <h2>${elem.h2}</h2>
        <p>${elem.p} </p>
        <a href=""> ${elem.a} </a>
    </div>
    <div>
        <div>
        <h2>${elem.h21}</h2>
        <p>${elem.p1} </p>
        <a href=""> ${elem.a1} </a>
        </div>

        <div>
        <h2>${elem.h22}</h2>
        <p>${elem.p2} </p>
        <a href=""> ${elem.a2} </a>
        </div>

    </div> `
    })
    fusion.innerHTML = fusionHtml
}
showfusion()


let Subscribe = document.querySelector("section.Subscribe")
let showSubscribe = async () => {
    let response = await fetch(" http://localhost:1000/Subscribe").then(function (res) {
        return res.json()
    })
    let SubscribeHtml = ""
    response.map((elem) => {
        SubscribeHtml += `  <div>
        <h2>${elem.h2} </h2>
        <p> ${elem.p} </p>
        <input type="text" placeholder="${elem.input} "><button>${elem.butt}</button>
    </div>  `
    })
    Subscribe.innerHTML = SubscribeHtml
}
showSubscribe()



let colm1f = document.querySelector("div.colm1f")
let showcolm1f = async () => {
    let response = await fetch(" http://localhost:1000/colm1f").then(function (res) {
        return res.json()
    })
    let colm1fhtml = ""
    response.map((elem) => {
        colm1fhtml += `
   
        <h3>
        ${elem.b}
    </h3>
  
    <span>
      ${elem.span}
    </span>
    <div class="iconfooter">
    <i class="${elem.i1} " data-twitter></i>
        <i class="${elem.i2} " data-facebook></i>
        <i class="${elem.i3} " data-telegram></i>
        <i class="${elem.i4}" data-instagram></i>
        </div>
    `
    })
    colm1f.innerHTML = colm1fhtml
}
showcolm1f()


let blog = document.querySelector("div.blog")
let showblog = async () => {
    let response = await fetch(" http://localhost:1000/blog").then(function (res) {
        return res.json()
    })
    let bloghtml = ""
    response.map((elem) => {
        bloghtml += `
        <h3> ${elem.h3} </h3>
            <p>${elem.p} </p>
    `
    })
    blog.innerHTML = bloghtml
}
showblog()



let part2blog = document.querySelector("section.part2blog")
let showpart2blog = async () => {
    let response = await fetch("  http://localhost:1000/part2blog").then(function (res) {
        return res.json()
    })
    let part2bloghtml = ""
    response.map((elem) => {
        part2bloghtml += `
        <div><a href="">
        <img src="${elem.img} " alt="blog">
        <div>
            ${elem.div}
            <span>
               ${elem.span}
                <i class="${elem.i} "></i>
            </span>
        </div>
    </a></div>
    `
    })
    part2blog.innerHTML = part2bloghtml
}
showpart2blog()



let shopwomen = document.querySelector("div.shopwomen")
let showshopwomen = async () => {
    let response = await fetch(" http://localhost:1000/shopwomen").then(function (res) {
        return res.json()
    })
    let shopwomenhtml = ""
    response.map((elem) => {
        shopwomenhtml += `
        <h3> ${elem.h3} </h3>
                <p> ${elem.p} </p>
                <span> ${elem.span} </span>
    `
    })
    shopwomen.innerHTML = shopwomenhtml
}
showshopwomen()


let shopmen = document.querySelector("div.shopmen")
let showshopmen = async () => {
    let response = await fetch("http://localhost:1000/shopmen").then(function (res) {
        return res.json()
    })
    let shopmenhtml = ""
    response.map((elem) => {
        shopmenhtml += `
        <h3> ${elem.h3} </h3>
                <p> ${elem.p} </p>
                <span> ${elem.span} </span>
    `
    })
    shopmen.innerHTML = shopmenhtml
}
showshopmen()

let sbf = document.querySelector("div.sbf")
let showsbf = async () => {
    let response = await fetch("http://localhost:1000/sbf").then(function (res) {
        return res.json()
    })
    let sbfhtml = ""
    response.map((elem) => {
        sbfhtml += `
        <h3>${elem.h3}</h3>
                <p>${elem.p}</p>
                <input type="${elem.type}" placeholder="${elem.search}" name="${elem.n}" /><button>${elem.butt} </button>
    `
    })
    sbf.innerHTML = sbfhtml
}
showsbf()


let about = document.querySelector("div.about")
let showabout = async () => {
    let response = await fetch("http://localhost:1000/about").then(function (res) {
        return res.json()
    })
    let abouthtml = ""
    response.map((elem) => {
        abouthtml += `
        <div>
        <h3>
            ${elem.title}
        </h3>
        <p>
            ${elem.pragraf}
        </p>
        <div> <img src=${elem.image}> </div>
        <a>${elem.button} <i class="fas fa-angle-right"></i> </a>
    </div>
    `
    })
    about.innerHTML = abouthtml
}
showabout()




let shopbanner = document.querySelector("div.hshop")
let showshopbanner = async () => {
    let response = await fetch("http://localhost:1000/shopbanner").then(function (res) {
        return res.json()
    })
    let shopbannerhtml = ""
    response.map((elem) => {
        shopbannerhtml += `
        <h1>
            ${elem.h1}
        </h1>
        <p>
            ${elem.p}
        </p>
    `
    })
    shopbanner.innerHTML = shopbannerhtml
}
showshopbanner()






