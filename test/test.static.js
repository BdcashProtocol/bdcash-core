let BDCashCore = require('../src/index.js')
let bdcash = new BDCashCore(false, ['http://localhost:3001'])
bdcash.debug = true

// SHOULD RETURN ALL IDANODES
async function testnodes(){
   let nodes = await bdcash.returnNodes()
   console.log('SHOULD RETURN ALL NODES')
   console.log(nodes)
   let info = null
   while(info === null){
    info = await bdcash.get('/wallet/getinfo')
    console.log(info)
   }
}
testnodes()
// SHOULD CREATE ADDRESS
/*
let password = '123456'
bdcash.createAddress(password, true).then(async res => {
    
    // SHOULD GET AN IDANODE
    console.log('SHOULD GET FIRST IDANODE')
    let getinfo = await bdcash.get('/wallet/getinfo')
    console.log(JSON.stringify(getinfo))

    // SHOULD RETURN THE WALLETSTORE
    console.log('CREATED NEW ADDRESS ' + res.pub)
    let walletstore = await bdcash.returnKey(res.pub)
    console.log(walletstore)
    let readKey = await bdcash.readKey(password, walletstore)
    console.log(readKey)

    // SHOULD RETURN A DEPRECATED WALLET
    let oldwallet = 'LbMsc12yAWjGeoRbfUu9bb6EE19CK2Pjbd:5c6b0b6095e94a1948b54ebbd1681cc78f0809e32c5036ee323a8dfc2abda2ceb0df85fe839df9701d97819867d5d92a79ed10386cd51a0af3cde27f7215afabe13a47688f14f22e6cb4743a11be86744ff8945992bc48f8b0dccce107f6d9ec665a43bc12a2e363ad66b7937827fd29a58d4a47728e8de3163afb7cd8d9dffab8ce7d01e7aac752a9edca2dd689a93fbb48fdc94314a72a580ebc6358c3cf39a0115aaf461604034d870a534f1f1aaf52af60990d96d2ccbda9e5c55a3c8db4'
    let readKeyOld = await bdcash.readKey(password, oldwallet)
    console.log(readKeyOld)
    
    // SHOULD POST AN IDANODE
    let init = await bdcash.post('/init',{address: res.pub})
    console.log(JSON.stringify(init))

    // SHOULD CONNECT TO ALL IDANODES
    console.log('SHOULD CONNECT TO ALL IDANODES WITH ADDRESS ' + res.pub)
    bdcash.connectP2P(function(received){
        console.log('Received ' + JSON.stringify(received))
    })

    // SHUOLD SEND A MESSAGE
    setInterval(function(){
        bdcash.broadcast(res.pub, password, 'message', 'Now are '+ new Date() +'!')
    },2500)
})


bdcash.buildxSid('YourAwesomePassword', 'latin', false).then(async response => {
    let information = 'MyUniqueAndImportantInformation'
    let hash = await bdcash.hash(information)
    let index = await bdcash.hashtopath(hash)
    console.log(index)
    let derived = await bdcash.deriveKeyFromSeed(response.seed, index)
    console.log(derived)
})
*/