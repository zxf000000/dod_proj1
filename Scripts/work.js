(function() {
    var abi = [
        {
            "inputs": [
                {
                    "internalType": "address[]",
                    "name": "_whiteAddress",
                    "type": "address[]"
                }
            ],
            "name": "addWhiteList",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "buy",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_startTime",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_dodPrice",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_endNum",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "_activity",
                    "type": "string"
                }
            ],
            "name": "setStart",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "takeOutBnb",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dodPrice",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getCountDown",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_activity",
                    "type": "string"
                }
            ],
            "name": "getSurplus",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "num",
                    "type": "uint256"
                }
            ],
            "name": "getToken",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "receiver",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "startTime",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];
    let time = 0;
    let transWeb3 = null;
    let userAdd = '';
    const rpc = 'https://bsc-dataseed.binance.org/';
    const contractAddress = '0x95eAbCCD298dE778A16A401235E1Dd6c468d0383';

    async function clickBuy() {
        if (time > 0) {
            return;
        } else {
            // buy
            if (typeof window.ethereum !== 'undefined') {
                const address = await window.ethereum.enable();
                if (address.length > 0) {
                    userAdd = address[0];
                    transWeb3 = new window.Web3(window.ethereum);
                    const chainId = window.ethereum.chainId;
                    if (chainId !== '0x38') {
                        alert('Please change your net to BSC mainnet!');
                        return;
                    }
                    const contract = new transWeb3.eth.Contract(abi, contractAddress);
                    contract.methods.buy().send({from: userAdd, value: window.Web3.utils.toWei('0.001')});
                } else {
                    alert('Please create wallet!');
                }
            } else {
                alert('Please install metamask!');
            }
        }
    }
    const ele = document.querySelector('#\\31 253410576');
    ele.addEventListener('click', clickBuy);
    const button = document.querySelector('#\\31 705739837');
    function countdown() {
        if (time <= 0) {
            return;
        }
        let hour = Math.round(time/3600);
        let minute = Math.round(time/60);
        let second = Math.round(time%60);
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }
        if (second < 10) {
            second = '0' + second;
        }
        button.innerHTML = hour + ' : ' + minute + ' : ' + second;
        time -= 1;
        setTimeout(countdown, 1000);
    }
    const fetchWeb3 = new window.Web3(rpc);
    const contract = new fetchWeb3.eth.Contract(abi, contractAddress);
    contract.methods.getCountDown().call()
        .then(res => {
            // res = 1000;
            if (res > 0) {
                time = res;
                countdown();
            } else {
                button.innerHTML = 'BUY PRE-SALE';
            }
        }).catch(e => {
        let cd = localStorage.getItem('countdown');
        if (cd !== undefined && cd !== null && cd > 0) {
            time = cd;
            countdown();
        }
    });
    // TODO:
    const bnbnumEle = document.querySelector('#\\31 670107396 > p > span');
    const dodEle = document.querySelector('#\\31 533183067 > p > span');
    const remaining = document.querySelector('#\\31 075302118 > p > span');
    // 1
    const progress1 = document.querySelector('#\\31 261624518 > p > span');
    const progress2 = document.querySelector('#\\31 433128951 > p > span');
    const progress3 = document.querySelector('#\\31 495848894 > p > span');
    contract.methods.getSurplus('one').call()
        .then((res) => {
            console.log(res);
        })
    contract.methods.getSurplus('two').call()
        .then((res) => {
            console.log(res);
        })

}());
