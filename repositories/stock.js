const {movementModel} = require('../models/config');



function findAll(){
    return movementModel.findAll()
}

function getTotalStock (payload) {
    let totalStock = 0;

    payload.forEach(movement => {
        if(movement.type === 'input')
            totalStock = parseInt(totalStock) + parseInt(movement.quantity);

        if(movement.type === 'output')
            totalStock = parseInt(totalStock) - parseInt(movement.quantity)
        
    });

    return totalStock;
}

function getStockByProtocol (payload) {
    let stockByProtocol = {}

    payload.forEach(movement =>{
        if(!stockByProtocol[movement.protocol])
            stockByProtocol[movement.protocol] = 0;

        if(movement.type === 'input')
            stockByProtocol[movement.protocol]=
            parseInt(stockByProtocol[movement.protocol])
             + parseInt(movement.quantity);
             
        if(movement.type === 'output')
            stockByProtocol[movement.protocol]=
            parseInt(stockByProtocol[movement.protocol]) 
            - parseInt(movement.quantity)
    }); 
    
    return stockByProtocol
};


module.exports= {
    findAll,
    getTotalStock,
    getStockByProtocol
}