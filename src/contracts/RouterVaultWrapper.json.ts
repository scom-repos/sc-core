export default {
"abi":[
{"inputs":[{"internalType":"contract Vault","name":"_vault","type":"address"},{"internalType":"contract IOSWAP_HybridRouter2","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Authorize","type":"event"},
{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"trancheId","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"inToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"inAmount","type":"uint256"}],"name":"Claim","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"Deauthorize","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"StartOwnershipTransfer","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"trancheId","type":"uint256[]"},{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"inToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"inAmount","type":"uint256"}],"name":"Swap","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"}],"name":"TransferOwnership","type":"event"},
{"anonymous":false,"inputs":[{"indexed":false,"internalType":"contract IOSWAP_HybridRouter2","name":"router","type":"address"}],"name":"UpdateRouter","type":"event"},
{"inputs":[{"internalType":"address[]","name":"pair","type":"address[]"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"trancheId","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"allocation","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claimExactIn","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address[]","name":"pair","type":"address[]"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256","name":"trancheId","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"allocation","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"claimExactOut","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"deny","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isPermitted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"newOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"permit","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"router","outputs":[{"internalType":"contract IOSWAP_HybridRouter2","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[{"internalType":"address[]","name":"pair","type":"address[]"},{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256[]","name":"trancheIds","type":"uint256[]"},{"internalType":"address","name":"to","type":"address"}],"name":"swapExactIn","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address[]","name":"pair","type":"address[]"},{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint256[]","name":"trancheIds","type":"uint256[]"},{"internalType":"address","name":"to","type":"address"}],"name":"swapExactOut","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"takeOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"address","name":"newOwner_","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[{"internalType":"contract IOSWAP_HybridRouter2","name":"_router","type":"address"}],"name":"updateRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},
{"inputs":[],"name":"vault","outputs":[{"internalType":"contract Vault","name":"","type":"address"}],"stateMutability":"view","type":"function"},
{"inputs":[],"name":"weth","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}
],
"bytecode":"60806040523480156200001157600080fd5b50604051620029fc380380620029fc833981016040819052620000349162000112565b60008054336001600160a01b0319918216179091556003805482166001600160a01b038581169182179092556004805490931691841691909117825560408051633fc8cef360e01b815290519192633fc8cef39282820192602092908290030181865afa158015620000aa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000d0919062000151565b600580546001600160a01b0319166001600160a01b039290921691909117905550620001789050565b6001600160a01b03811681146200010f57600080fd5b50565b600080604083850312156200012657600080fd5b82516200013381620000f9565b60208401519092506200014681620000f9565b809150509250929050565b6000602082840312156200016457600080fd5b81516200017181620000f9565b9392505050565b61287480620001886000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c80639c52a7f111610097578063d9f510bb11610066578063d9f510bb14610233578063f2fde38b14610246578063f887ea4014610259578063fbfa77cf1461027957600080fd5b80639c52a7f1146101da578063a2f55ae5146101ed578063c851cc3214610200578063d4ee1d901461021357600080fd5b8063484420d6116100d3578063484420d61461018c57806355a5ed7e1461019f57806360536172146101b25780638da5cb5b146101ba57600080fd5b806307c0cf1f146100fa5780633fc8cef31461010f5780633fd8cc4e14610159575b600080fd5b61010d610108366004612132565b610299565b005b60055461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b61017c6101673660046121d2565b60026020526000908152604090205460ff1681565b6040519015158152602001610150565b61010d61019a366004612132565b6107e9565b61010d6101ad3660046121ef565b610c32565b61010d6110e4565b60005461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b61010d6101e83660046121d2565b61120e565b61010d6101fb3660046121d2565b6112b5565b61010d61020e3660046121d2565b611358565b60015461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b61010d6102413660046121ef565b6113ef565b61010d6102543660046121d2565b61180b565b60045461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b60035461012f9073ffffffffffffffffffffffffffffffffffffffff1681565b32331480156102a75750333b155b610312576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e64207573657200000000000000000000000000000060448201526064015b60405180910390fd5b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8b8b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b8152600401610396939291906122fd565b600060405180830381865afa1580156103b3573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526103f9919081019061244d565b90508060008151811061040e5761040e612482565b60200260200101519150506104248133886118a2565b60045490965061044e9073ffffffffffffffffffffffffffffffffffffffff8381169116886119f9565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1385f2489898d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168d600067ffffffffffffffff8111156104f3576104f3612337565b6040519080825280601f01601f19166020018201604052801561051d576020820181803683370190505b506040518963ffffffff1660e01b8152600401610541989796959493929190612527565b6000604051808303816000875af1158015610560573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526105a69190810190612593565b9150508315610654576003546040517fa90d625900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063a90d62599061060b90889088903390899060040161269d565b6020604051808303816000875af115801561062a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064e91906126df565b506106f2565b6003546040517fa9e89ab600000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff85811660248301529091169063a9e89ab6906044016020604051808303816000875af11580156106cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106f091906126df565b505b7fa209008f549b3d427707a61fa4615bd06a3ebc4fa19bc4b555dc47593c6e5ee7858533858560008151811061072a5761072a612482565b60200260200101516040516107439594939291906126f8565b60405180910390a18060008151811061075e5761075e612482565b60200260200101518711156107dd576107b5338260008151811061078457610784612482565b602002602001015189610797919061276c565b73ffffffffffffffffffffffffffffffffffffffff85169190611b7b565b6004546107dd9073ffffffffffffffffffffffffffffffffffffffff84811691166000611bd6565b50505050505050505050565b32331480156107f75750333b155b61085d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610309565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8b8b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b81526004016108e1939291906122fd565b600060405180830381865afa1580156108fe573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610944919081019061244d565b90508060008151811061095957610959612482565b602002602001015191505061096f8133896118a2565b6004549097506109999073ffffffffffffffffffffffffffffffffffffffff8381169116896119f9565b60045460035460009173ffffffffffffffffffffffffffffffffffffffff908116916365d9e64b918b918b918f918f918991168d896040519080825280601f01601f1916602001820160405280156109f8576020820181803683370190505b506040518963ffffffff1660e01b8152600401610a1c989796959493929190612527565b6000604051808303816000875af1158015610a3b573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610a819190810190612593565b9150508315610b2f576003546040517fa90d625900000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9091169063a90d625990610ae690889088903390899060040161269d565b6020604051808303816000875af1158015610b05573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2991906126df565b50610bcd565b6003546040517fa9e89ab600000000000000000000000000000000000000000000000000000000815233600482015273ffffffffffffffffffffffffffffffffffffffff85811660248301529091169063a9e89ab6906044016020604051808303816000875af1158015610ba7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bcb91906126df565b505b7fa209008f549b3d427707a61fa4615bd06a3ebc4fa19bc4b555dc47593c6e5ee78585338585600081518110610c0557610c05612482565b6020026020010151604051610c1e9594939291906126f8565b60405180910390a150505050505050505050565b3233148015610c405750333b155b610ca6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610309565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b8152600401610d2a939291906122fd565b600060405180830381865afa158015610d47573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610d8d919081019061244d565b905080600081518110610da257610da2612482565b6020026020010151915050610db881338a6118a2565b600454909850610de29073ffffffffffffffffffffffffffffffffffffffff83811691168a6119f9565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c1385f248b8b8f8f600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff811115610e8757610e87612337565b6040519080825280601f01601f191660200182016040528015610eb1576020820181803683370190505b506040518963ffffffff1660e01b8152600401610ed5989796959493929190612527565b6000604051808303816000875af1158015610ef4573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201604052610f3a9190810190612593565b6003546040517f8ad30c8d00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff169150638ad30c8d90610f9c908a9033908b908b908b908b90600401612783565b6020604051808303816000875af1158015610fbb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fdf91906126df565b50867fa27580a77a01c86ee8598d930ae5f9a0ec6f146c6e0e9e9f50b95bacb337871833848460008151811061101757611017612482565b602002602001015160405161105a9392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a28060008151811061107557611075612482565b60200260200101518911156110d6576110ae338260008151811061109b5761109b612482565b60200260200101518b610797919061276c565b6004546110d69073ffffffffffffffffffffffffffffffffffffffff84811691166000611bd6565b505050505050505050505050565b60015473ffffffffffffffffffffffffffffffffffffffff16331461118b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f416374696f6e20706572666f726d656420627920756e617574686f72697a656460448201527f20616464726573732e00000000000000000000000000000000000000000000006064820152608401610309565b600180546000805473ffffffffffffffffffffffffffffffffffffffff83167fffffffffffffffffffffffff000000000000000000000000000000000000000091821681179092559091169091556040519081527fcfaaa26691e16e66e73290fc725eee1a6b4e0e693a1640484937aac25ffb55a49060200160405180910390a1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461123257600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905590519182527f79ede3839cd7a7d8bd77e97e5c890565fe4f76cdbbeaa364646e28a8695a788491015b60405180910390a150565b60005473ffffffffffffffffffffffffffffffffffffffff1633146112d957600080fd5b73ffffffffffffffffffffffffffffffffffffffff811660008181526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016600117905590519182527f6d81a01b39982517ba331aeb4f387b0f9cc32334b65bb9a343a077973cf7adf591016112aa565b60005473ffffffffffffffffffffffffffffffffffffffff16331461137c57600080fd5b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527fd5f5b4d616f94f5e10b2955392470790b3fdde7c0c0b68bd1f3ea635e2caa8d7906020016112aa565b32331480156113fd5750333b155b611463576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f742066726f6d20656e6420757365720000000000000000000000000000006044820152606401610309565b600080600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b66bd67c8d8d600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518463ffffffff1660e01b81526004016114e7939291906122fd565b600060405180830381865afa158015611504573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016820160405261154a919081019061244d565b90508060008151811061155f5761155f612482565b602002602001015191505061157581338b6118a2565b60045490995061159f9073ffffffffffffffffffffffffffffffffffffffff83811691168b6119f9565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166365d9e64b8b8b8f8f87600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168f600067ffffffffffffffff81111561162257611622612337565b6040519080825280601f01601f19166020018201604052801561164c576020820181803683370190505b506040518963ffffffff1660e01b8152600401611670989796959493929190612527565b6000604051808303816000875af115801561168f573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526116d59190810190612593565b6003546040517f8ad30c8d00000000000000000000000000000000000000000000000000000000815291935073ffffffffffffffffffffffffffffffffffffffff169150638ad30c8d90611737908a9033908b908b908b908b90600401612783565b6020604051808303816000875af1158015611756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061177a91906126df565b50867fa27580a77a01c86ee8598d930ae5f9a0ec6f146c6e0e9e9f50b95bacb33787183384846000815181106117b2576117b2612482565b60200260200101516040516117f59392919073ffffffffffffffffffffffffffffffffffffffff9384168152919092166020820152604081019190915260600190565b60405180910390a2505050505050505050505050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461182f57600080fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f686a7ab184e6928ddedba810af7b443d6baa40bf32c4787ccd72c5b4b28cae1b906020016112aa565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa15801561190f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061193391906126df565b905061195773ffffffffffffffffffffffffffffffffffffffff8516843085611d58565b6040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152819073ffffffffffffffffffffffffffffffffffffffff8616906370a0823190602401602060405180830381865afa1580156119c3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119e791906126df565b6119f1919061276c565b949350505050565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611a70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a9491906126df565b611a9e91906127d5565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150611b759085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611db6565b50505050565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bd19084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611af3565b505050565b801580611c7657506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611c50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c7491906126df565b155b611d02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610309565b60405173ffffffffffffffffffffffffffffffffffffffff8316602482015260448101829052611bd19084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611af3565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052611b759085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611af3565b6000611e18826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611ec29092919063ffffffff16565b805190915015611bd15780806020019051810190611e3691906127ed565b611bd1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610309565b60606119f18484600085611ed8565b9392505050565b606082471015611f6a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610309565b73ffffffffffffffffffffffffffffffffffffffff85163b611fe8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610309565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051612011919061280f565b60006040518083038185875af1925050503d806000811461204e576040519150601f19603f3d011682016040523d82523d6000602084013e612053565b606091505b509150915061206382828661206e565b979650505050505050565b6060831561207d575081611ed1565b82511561208d5782518084602001fd5b816040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610309919061282b565b60008083601f8401126120d357600080fd5b50813567ffffffffffffffff8111156120eb57600080fd5b6020830191508360208260051b850101111561210657600080fd5b9250929050565b73ffffffffffffffffffffffffffffffffffffffff8116811461212f57600080fd5b50565b60008060008060008060008060c0898b03121561214e57600080fd5b883567ffffffffffffffff8082111561216657600080fd5b6121728c838d016120c1565b909a50985060208b0135975060408b0135965060608b0135955060808b01359150808211156121a057600080fd5b506121ad8b828c016120c1565b90945092505060a08901356121c18161210d565b809150509295985092959890939650565b6000602082840312156121e457600080fd5b8135611ed18161210d565b6000806000806000806000806000806101008b8d03121561220f57600080fd5b8a3567ffffffffffffffff8082111561222757600080fd5b6122338e838f016120c1565b909c509a5060208d0135995060408d0135985060608d0135975060808d0135965060a08d013591506122648261210d565b90945060c08c0135935060e08c0135908082111561228157600080fd5b5061228e8d828e016120c1565b915080935050809150509295989b9194979a5092959850565b8183526000602080850194508260005b858110156122f25781356122ca8161210d565b73ffffffffffffffffffffffffffffffffffffffff16875295820195908201906001016122b7565b509495945050505050565b6040815260006123116040830185876122a7565b905073ffffffffffffffffffffffffffffffffffffffff83166020830152949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156123ad576123ad612337565b604052919050565b600067ffffffffffffffff8211156123cf576123cf612337565b5060051b60200190565b600082601f8301126123ea57600080fd5b815160206123ff6123fa836123b5565b612366565b82815260059290921b8401810191818101908684111561241e57600080fd5b8286015b848110156124425780516124358161210d565b8352918301918301612422565b509695505050505050565b60006020828403121561245f57600080fd5b815167ffffffffffffffff81111561247657600080fd5b6119f1848285016123d9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60005b838110156124cc5781810151838201526020016124b4565b83811115611b755750506000910152565b600081518084526124f58160208601602086016124b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b88815287602082015260e06040820152600061254760e08301888a6122a7565b73ffffffffffffffffffffffffffffffffffffffff87811660608501528616608084015260a0830185905282810360c084015261258481856124dd565b9b9a5050505050505050505050565b600080604083850312156125a657600080fd5b825167ffffffffffffffff808211156125be57600080fd5b6125ca868387016123d9565b93506020915081850151818111156125e157600080fd5b85019050601f810186136125f457600080fd5b80516126026123fa826123b5565b81815260059190911b8201830190838101908883111561262157600080fd5b928401925b8284101561263f57835182529284019290840190612626565b80955050505050509250929050565b81835260007f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83111561268057600080fd5b8260051b8083602087013760009401602001938452509192915050565b6060815260006126b160608301868861264e565b73ffffffffffffffffffffffffffffffffffffffff9485166020840152929093166040909101529392505050565b6000602082840312156126f157600080fd5b5051919050565b60808152600061270c60808301878961264e565b73ffffffffffffffffffffffffffffffffffffffff9586166020840152939094166040820152606001529392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008282101561277e5761277e61273d565b500390565b868152600073ffffffffffffffffffffffffffffffffffffffff808816602084015280871660408401525084606083015260a060808301526127c960a08301848661264e565b98975050505050505050565b600082198211156127e8576127e861273d565b500190565b6000602082840312156127ff57600080fd5b81518015158114611ed157600080fd5b600082516128218184602087016124b1565b9190910192915050565b602081526000611ed160208301846124dd56fea2646970667358221220910af1216b267e57ff8f56230dd0ca4bafaf4556eb48f9ce2f55e7368602edb164736f6c634300080d0033"
}