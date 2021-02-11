let count = 0

const generateLink = () => {
    var anysize = 10;//the size of string 
    var charset = "abcdefghijklmnopqrstuvwxyz"; //from where to create
    var i = 0, ret = '';
    while (i++ < anysize) {
        ret += charset.charAt(Math.random() * charset.length)
    }
    document.getElementById("link").href = `http://www.${ret}.com`
    count = 0
}

const LinkCount = () => {
    const getLink = document.getElementById("link").href
    if (getLink) {
        count++
    }
    saveTask({link: getLink, count: 1})
} 

const saveTask = async (data)=>{
    try{
        const requestUrl = await fetch("http://localhost:3000/product",{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        })
        let respone = await requestUrl.json()
        if(respone.success){
            document.getElementById("count").innerText = respone.data.count
            document.getElementById("linkFetch").innerText = respone.data.link
            document.getElementById("updateAt").innerText = "Clicked At: "+" "+new Date(respone.data.updated_at)
        }
    }
    catch(err){
        console.log(err)
    }
}