module.exports = (app,router)=>{
    const generateLinksModule = require("../modules/generate_links/generate_links.routes")

    generateLinksModule(router)
}