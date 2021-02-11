module.exports = (router)=>{
    const generateLinksController = require("./generate_links.controller")
    
    router.route("/product")
        .get(generateLinksController.generateLinks)
        .post(generateLinksController.SaveCount)
}