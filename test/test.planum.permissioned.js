let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore
bdcash.mainnetNodesh = ['http://localhost:3001']

async function send(amount = 0.001){
    return new Promise(async response => {
        let started = new Date().getTime()
        bdcash.staticnodes = true
        let prv = 'Spd2eh6Cw6dRytJeeDov9upTvYGbXcKhPkzEHLbLFrRHeJy6tSab'
        let pub = 'LcC9CGNDR1A124LacsDMMgfF6yi8Lw5E65'
        let sidechain = '6Kk2jkJ76wjZiBvDr6j1R9Ub9z9TWXBK18'
        let to = 'LchzGX6vqmanceCzNUMTk5cmnt1p6knGgT'
        let password = 'password'
        bdcash.debug = true
        bdcash.usePlanum(sidechain)
        await bdcash.importPrivateKey(prv, password)
        let balance = await bdcash.returnPlanumBalance(pub)
        console.log('BALANCE', balance)
        if(balance.balance > 0){
            let tx = await bdcash.sendPlanumAsset(pub, password, to, amount, '', '', new Date().getTime())
            let ended = new Date().getTime()
            let elapsed = ended - started
            console.log('TRANSACTION CREATED IN ' + elapsed + 'ms')
            console.log('SXID IS ' + tx)
        }else{
            console.log('NOT ENOUGH BALANCE')
        }
        response(true)
    })
}
var i = 1
async function runtest(){
    let amount = i / 1000
    console.log('SENDING ' + amount)
    await send(amount)
    i++
    runtest()
}
runtest()
/*
setInterval(function(){
    runtest()
},2000)
*/