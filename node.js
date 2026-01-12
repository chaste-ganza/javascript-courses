let logger = {
    info:function(message){
        console.log("Info ..."+message)
    },
    warning:function(message){
        console.log("Warning..."+message)
    }
}

module.exports = logger