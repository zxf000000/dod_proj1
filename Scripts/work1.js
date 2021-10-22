(function() {
    const dodAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"A","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AD","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"C","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"D","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"M","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"P","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"T","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"towner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"busd","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"deployTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isLocked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOpenTrading","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"swap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"takeOutTokenInCase","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalBurn","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
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
    const fetchWeb3 = new window.Web3(rpc);
    const contract = new fetchWeb3.eth.Contract(abi, contractAddress);

    async function clickInnerBuy() {
        const container = document.querySelector('#inputPopup');
        const buyButton = document.querySelector('#confirmBuy');
        const cancelbutton = document.querySelector('#cancelBuy');
        const input = document.querySelector('#buyNumberInput');
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
                const number = input.value;
                if (number.length === 0 || parseFloat(number, 10) <= 0) {
                    alert('Please input number');
                    return;
                }
                container.style.display = 'none';
                const contract = new transWeb3.eth.Contract(abi, contractAddress);
                contract.methods.buy().send({from: userAdd, value: window.Web3.utils.toWei(number)});
            } else {
                alert('Please create wallet!');
            }
        } else {
            alert('Please install metamask!');
        }
    }

    async function clickBuy() {
        if (time > 0) {
            return;
        } else {
            // 显示购买
            const container = document.querySelector('#inputPopup');
            container.style.display = 'flex';
            const buyButton = document.querySelector('#confirmBuy');
            const cancelbutton = document.querySelector('#cancelBuy');
            const input = document.querySelector('#buyNumberInput');
            console.log(input);
            input.addEventListener('input', () => {
                console.log(input.value);
                const anumber = input.value;
                if (anumber.length > 0) {
                    contract.methods.getToken(window.Web3.utils.toWei(anumber)).call().then(res => {
                        console.log(res);
                        document.querySelector('#dodNumberText').innerHTML = 'You will receive ' + window.Web3.utils.fromWei(res) + ' DOD';
                    })
                }
            })
            buyButton.addEventListener('click', clickInnerBuy);
            cancelbutton.addEventListener('click', () => {
                const container = document.querySelector('#inputPopup');
                container.style.display = 'none';
            });
        }
    }

    let ele = document.querySelector('#\\31 253410576');
    ele.addEventListener('click', clickBuy);
    const button = document.querySelector('#\\31 705739837');
    function countdown() {
        if (time <= 0) {
            button.innerHTML = 'BUY PRE-SALE';
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

    contract.methods.getCountDown().call()
        .then(res => {
            // res = 1000;
            if (res > 0) {
                time = res;
                localStorage.setItem('countdown', res);
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
    // const progress1 = document.querySelector('#\\31 261624518 > p > span');
    // const progress2 = document.querySelector('#\\31 433128951 > p > span');
    // const progress3 = document.querySelector('#\\31 495848894 > p > span');

    function appendProgress(parent) {
        parent.style.setProperty('border-bottom-color', '#d7b267', 'important');
        const progress11 = document.createElement('span')
        progress11.style.width = '1%';
        progress11.style.height = '10px';
        progress11.style.position = 'absolute';
        progress11.style.bottom = '-10px';
        progress11.style.left = '0';
        progress11.style.background = '#f2e81a';
        parent.appendChild(progress11);
        return progress11;
    }
    const progress1 = document.querySelector('#\\31 855987257');
    const progress11 = appendProgress(progress1);
    const progress2 = document.querySelector('#\\31 156280604');
    const progress22 = appendProgress(progress2);

    const text1 = document.querySelector('#\\31 855987257 > h3 > span');
    const text2 = document.querySelector('#\\31 156280604 > h3 > span');


    total1 = 200;
    total2 = 400;
    let progress1Over = false;
    contract.methods.getSurplus('one').call()
        .then((res) => {
            const remaining = window.Web3.utils.fromWei(res[0]);
            const progress = (total1 - remaining)/total1;
            console.log(remaining);
            if (progress < 1) {
                text1.innerHTML = 'Strategic Round (ongoing)';
            } else {
                text1.innerHTML = 'Strategic Round';
                progress1Over = true;
            }
            console.log(Math.floor(progress * 10000)/100);
            progress11.style.width = Math.floor(progress * 10000)/100 + '%';
        })
    contract.methods.getSurplus('two').call()
        .then((res) => {
            const remaining = window.Web3.utils.fromWei(res[0]);
            const progress = (total2 - remaining)/total2;
            if (progress < 1 && progress1Over) {
                text2.innerHTML = 'CornerStone Round (ongoing)';
                console.log(Math.floor(progress * 10000)/100);
                progress22.style.width = Math.floor(progress * 10000)/100 + '%';
            } else {
                text2.innerHTML = 'CornerStone Round';
            }
        })

    // DOD 数量相关
    dodAddress = '0xc709878167Ed069Aea15FD0bD4E9758CEb4Da193';
    busdAddress = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56';
    dodContract = new fetchWeb3.eth.Contract(dodAbi, dodAddress);
    busdCont = new fetchWeb3.eth.Contract(dodAbi, busdAddress);
    const money1 = document.querySelector('#\\31 670107396 > p > span');
    const money2 = document.querySelector('#\\31 533183067 > p > span');
    const money3 = document.querySelector('#\\31 075302118 > p > span');
    Promise.all([
        dodContract.methods.totalBurn().call(),
        dodContract.methods.totalSupply().call(),
        busdCont.methods.balanceOf(dodAddress).call(),
    ]).then(([totalBurn, totalSupply, busdbalance]) => {
       console.log(totalBurn);
       console.log((totalSupply - totalBurn).toLocaleString());
       console.log(busdbalance);
       money2.innerHTML = window.Web3.utils.fromWei(totalBurn + '').toLocaleString() + ' DOD';
       money3.innerHTML = (window.Web3.utils.fromWei(totalSupply) - window.Web3.utils.fromWei(totalBurn)).toLocaleString() + ' DOD';
       money1.innerHTML = window.Web3.utils.fromWei(busdbalance + '') + ' BUSD';
    });
}());