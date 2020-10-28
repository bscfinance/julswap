// Storage for user data variables
let address;
let web3;
let balance;
let amount;
let totalContributed;
let eventOver = false;
let autoStakeOnZap = true;

let LPbal;
let LPrewards;

// const routerAddress = '0x3D602Bc3d36FbD89E0cd16D0f0aA73E4da66Ba1A'
// const kPoolDaiAddress = `0x3C1BC74E9f1e219e8F86bB2f79C37922b5f6Ca2c`

// ============= Duplicate =================
const HDCoreAddress = '0x3DDE2e3a7d1B4e62d2e0Cf5d16C9FeE667d47551';
const LPTokenAddress = '0x8dfd6f03580f8ee88587f4c051aab7193d7bdf8a';
const HDVaultAddress = '0x4ec3BC3f1AD02Cb60cE08aFE88EeCacFE75A4a73';
const HDCoreV2Address = '0x47FDb27AD77aA44B93de5281f800911b6725D90F';
const wethAddress = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
const routerAddress = '0x785fc58BF1e5461dA6192fC81CF9cB3C8e7e6928';
const daiAddress = `0x6B175474E89094C44Da98b954EedeAC495271d0F`
const hdPoolDaiAddress = `0x3C1BC74E9f1e219e8F86bB2f79C37922b5f6Ca2c`


const eventEndTime = 1603972166000;

connect();

const ABI = {
  HDcoreToken:
    '[{"inputs":[{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"factory","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LPTokenClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"LiquidityAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"log","type":"string"}],"name":"Log","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPGenerationCompleted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LPperETHUnit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"agreesToTermsOutlinedInLiquidityGenerationParticipationAgreement","type":"bool"}],"name":"addLiquidity","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"addLiquidityToUniswapHDCORExWETHPair","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint32","name":"fromBlock","type":"uint32"},{"internalType":"uint256","name":"votes","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimLPTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createUniswapPairMainnet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyDrain24hAfterLiquidityGenerationEventIsDone","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"ethContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeDistributor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getCurrentVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"blockNumber","type":"uint256"}],"name":"getPriorVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSecondsLeftInLiquidityGenerationEvent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationOngoing","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"liquidityGenerationParticipationAgreement","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeDistributor","type":"address"}],"name":"setFeeDistributor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_transferCheckerAddress","type":"address"}],"name":"setShouldTransferChecker","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenUniswapPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalETHContributed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalLPTokensMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferCheckerAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapFactory","outputs":[{"internalType":"contract IUniswapV2Factory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapRouterV2","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"}]',
  LPToken:
    '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
  HDcoreVault:
    '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SuperAdminTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_","type":"uint256"}],"name":"addPendingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"averageFeesPerBlockEpoch","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"averageFeesPerBlockSinceStart","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"contractStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cumulativeRewardsSinceStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"depositFor","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"hdcore","outputs":[{"internalType":"contract INBUNIERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochCalculationStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract INBUNIERC20","name":"_hdcore","type":"address"},{"internalType":"address","name":"_devaddr","type":"address"},{"internalType":"address","name":"superAdmin","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"newSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingHdcore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"accHdcorePerShare","type":"uint256"},{"internalType":"bool","name":"withdrawable","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsInThisEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAllowanceForPoolToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_DEV_FEE","type":"uint16"}],"name":"setDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevFeeReciever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"setPoolWithdrawable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setStrategyContractOrDistributionContractAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startNewEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  ERC20:
    '[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]',
  pair:
    '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]',
  HDcoreVaultV2:
    '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"SuperAdminTransfered","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"contractStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"cumulativeRewardsSinceStart","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"devaddr","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"epochCalculationStartBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"hdcore","outputs":[{"internalType":"contract INBUNIERC20","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"pendingRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"accHdcorePerShare","type":"uint256"},{"internalType":"bool","name":"withdrawable","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardsInThisEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"averageFeesPerBlockSinceStart","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"averageFeesPerBlockEpoch","outputs":[{"internalType":"uint256","name":"averagePerBlock","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"startNewEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract INBUNIERC20","name":"_hdcore","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"bool","name":"_withdrawable","type":"bool"}],"name":"setPoolWithdrawable","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"_DEV_FEE","type":"uint16"}],"name":"setDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingHdcore","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_","type":"uint256"}],"name":"addPendingRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"depositAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"depositFor","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"depositFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setAllowanceForPoolToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdrawAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setStrategyContractOrDistributionContractAllowance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"isContract","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"transferDevFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devaddr","type":"address"}],"name":"setDevFeeReciever","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"superAdmin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"burnSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"newSuperAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"}]',
  router:
    '[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback","payable":true},{"inputs":[],"name":"_WETH","outputs":[{"internalType":"contract IWETH","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_feeApprover","outputs":[{"internalType":"contract IFeeApprover","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_HDcoreToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_hdcoreVault","outputs":[{"internalType":"contract IHdcoreVault","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"_hdcoreWETHPair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"hardHDCORE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"refreshApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"},{"internalType":"bool","name":"autoStake","type":"bool"}],"name":"addLiquidityETHOnly","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"feeApprover","type":"address"}],"name":"changeFeeApprover","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"hdcoreVault","type":"address"}],"name":"changeKVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"ethAmt","type":"uint256"}],"name":"getLPTokenPerEthUnit","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"view","type":"function","constant":true}]',
};
var x = setInterval(async function () {
  var distance = eventEndTime - Date.now();

  // alert(Date.now());

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById('countdown').innerHTML =
    days + ':' + hours + ':' + minutes + ':' + seconds;
  if (distance < 0) {
    eventOver = true;
    clearInterval(x);
    document.getElementById('contribute').style.display = 'none';
    document.getElementById('claim-lp').style.display = 'block';
    document.getElementById('countdown').innerHTML = '00:00:00:00';
  }
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  if (isMetaMaskInstalled()) {
    loadSummary();
    loadZapper();
    loadLGEData();
    loadHDVaultData();
    loadHDVaultV2Data();
  }
}, 1000);

web3 = new Web3(window.ethereum);
async function web3enable() {
  await window.ethereum.enable();
}
web3enable();

const currentUrl = new URL(window.location.href);
const forwarderOrigin =
  currentUrl.hostname === 'localhost' ? 'http://localhost:9010' : undefined;
const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

//connect with metamask and reach consensus
async function connect() {
  const walletconnect = document.getElementById('walletconnect');
  const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
  if (!isMetaMaskInstalled()) {
    document.getElementById('warning').innerHTML =
      'MetaMask is not installed, thus you cannot interact with the HDCORE Vault. Please install MetaMask from <a href="https://metamask.com/download.html/">here</a> and try again.';
    document.getElementById('deposit').disabled = true;
    return;
  }
  const chainId = await ethereum.request({
    method: 'eth_chainId',
  });
  if (chainId != '0x01' && chainId != '0x1') {
    document.getElementById('warning').innerHTML =
      'Your MetaMask is set on the incorrect chain. Please switch to ETH mainnet.';
    return;
  }
  const accounts = await ethereum.request({
    method: 'eth_requestAccounts',
  });
  address = accounts[0];
  ethereum.on('accountsChanged', function (accounts) {
    location.reload();
  });
  ethereum.on('chainChanged', function (chain) {
    location.reload();
  });
  loadSummary();
  loadZapper();
  loadLGEData();
  loadHDVaultData();
  loadHDVaultV2Data();
}

// ========================================== Summary ========================================== //

async function loadSummary() {
  var HDcoreTokenInstance = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreToken),
    HDCoreAddress
  );
  var lockedLP = web3.utils.fromWei(
    await HDcoreTokenInstance.methods.balanceOf(LPTokenAddress).call()
  );
  document.getElementById('HDcore-locked').innerHTML = Number(lockedLP).toFixed(
    5
  );

  var HDCoreBalance = web3.utils.fromWei(
    await HDcoreTokenInstance.methods.balanceOf(address).call()
  );
  document.getElementById('HDCore-wallet-balance').innerHTML = Number(
    HDCoreBalance
  ).toFixed(5);

  var lpTokenInstance = new web3.eth.Contract(
    JSON.parse(ABI.ERC20),
    LPTokenAddress
  );
  var lpTotalSupply = web3.utils.fromWei(
    await lpTokenInstance.methods.totalSupply().call()
  );
  document.getElementById('lp-total-supply').innerHTML = Number(
    lpTotalSupply
  ).toFixed(5);

  var lpBalance = web3.utils.fromWei(
    await lpTokenInstance.methods.balanceOf(address).call()
  );
  document.getElementById('lp-wallet-balance').innerHTML = Number(
    lpBalance
  ).toFixed(5);

  var vaultV2 = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVaultV2),
    HDCoreV2Address
  );
  var lpStaked = web3.utils.fromWei(
    (await vaultV2.methods.userInfo('0', address).call()).amount
  );
  document.getElementById('lp-staked').innerHTML = Number(lpStaked).toFixed(5);

  var claimable = web3.utils.fromWei(
    await vaultV2.methods.pendingHdcore(0, address).call()
  );
  document.getElementById('HDCore-claimable-balance').innerHTML = Number(
    claimable
  ).toFixed(5);
}
setInterval(loadSummary(), 15000);

// ========================================== KZap ========================================== //

async function loadZapper() {
  const userETHBalance = web3.utils.fromWei(await web3.eth.getBalance(address));
  var maxZapableBalance = userETHBalance - 0.1; // for gas
  await getZapEstimate(maxZapableBalance);
  document.getElementById('zap-eth-amount').value = Number(
    maxZapableBalance
  ).toFixed(5);
}
setInterval(loadZapper(), 15000);

async function zapMax() {
  var maxZapableBalance = web3.utils.fromWei(balance) - 0.1; // for gas
  await getZapEstimate(maxZapableBalance);
  document.getElementById('zap-eth-amount').value = Number(
    maxZapableBalance
  ).toFixed(5);
}

async function getZapEstimate(ethAmount) {
  if (ethAmount == 0) {
    document.getElementById('zap-lp-estimate').innerHTML = Number(0).toFixed(5);
  } else {
    var routerInstance = new web3.eth.Contract(
      JSON.parse(ABI.router),
      routerAddress
    );
    var lpEstimate = await routerInstance.methods
      .getLPTokenPerEthUnit(web3.utils.toWei(String(ethAmount), 'ether'))
      .call();
    document.getElementById('zap-lp-estimate').innerHTML = Number(
      web3.utils.fromWei(lpEstimate)
    ).toFixed(5);
  }
}

async function zap() {
  var routerInstance = new web3.eth.Contract(
    JSON.parse(ABI.router),
    routerAddress
  );
  var ethAmount = document.getElementById('zap-eth-amount').value;

  const zap = await new Promise((resolve, reject) => {
    routerInstance.methods.addLiquidityETHOnly(address, autoStakeOnZap).send(
      {
        from: address,
        value: web3.utils.toWei(ethAmount, 'ether'),
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!zap) return;
  document.getElementById('zap-lp').innerText = 'ZAPPING...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(zap);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('zap-lp').innerText = 'ZAP ETH TO LP';
    }
  }, 10 * 1000);
}

// ========================================== HDCORE-ETH LGE functions ========================================== //

async function deposit() {
  amount = parseFloat(document.getElementById('amount').value);

  if (!amount) {
    document.getElementById('warningDep').innerHTML =
      'Please specify a valid value!';
    setTimeout(function () {
      document.getElementById('warningDep').innerText = '';
    }, 5000);
    return;
  }
  if (amount > balance) {
    document.getElementById('warningDep').innerText =
      'Deposit amount exceeds balance!';
    setTimeout(function () {
      document.getElementById('warningDep').innerText = '';
    }, 15000);
    return;
  }
  amount = amount.toFixed(4);
  amount = web3.utils.toWei(amount, 'ether');
  amount = amount + '';
  const send = await new Promise((resolve, reject) => {
    web3.eth.sendTransaction(
      {
        from: address,
        value: amount,
        to: HDCoreAddress,
        data:
          '0xda620cd70000000000000000000000000000000000000000000000000000000000000001',
      },
      function (error, result) {
        if (result) resolve(result);
        else reject(error);
      }
    );
  });
  document.getElementById('deposit').innerText = 'Depositing';
  let checkTx = setInterval(async function () {
    const tx = await new Promise((resolve, reject) => {
      web3.eth.getTransactionReceipt(send, function (error, result) {
        if (result) resolve(result);
        else reject();
      });
    });
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('depositLGE').innerText = 'Deposit';
      document.getElementById('successLGE').innerText = 'Deposit confirmed!';
      setTimeout(function () {
        document.getElementById('successLGE').innerText = '';
      }, 15000);
    }
  }, 10 * 1000);
}

async function claim() {
  var token = new web3.eth.Contract(JSON.parse(ABI.HDcoreToken), HDCoreAddress);
  const claim = await new Promise((resolve, reject) => {
    token.methods.claimLPTokens().send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!claim) return;
  document.getElementById('claim').innerText = 'Claiming...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(claim);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('claim').innerText = 'Claim';
      document.getElementById('success').innerText = 'Claim confirmed!';
      setTimeout(function () {
        document.getElementById('success').innerText = '';
      }, 15000);
    }
  }, 10 * 1000);
}

async function loadLGEData() {
  web3.eth.getBalance(address, function (error, result) {
    balance = result;
    document.getElementById('walletconnect').innerText =
      address.slice(0, 6) +
      '..' +
      address.slice(36) +
      ' [' +
      parseFloat(web3.utils.fromWei(balance, 'ether')).toFixed(4) +
      ' ETH]';
  });
  var token = new web3.eth.Contract(JSON.parse(ABI.HDcoreToken), HDCoreAddress);
  const ethContributed = web3.utils.fromWei(
    await token.methods.ethContributed(address).call(),
    'ether'
  );
  const totalContributed = web3.utils.fromWei(
    await token.methods.totalETHContributed().call(),
    'ether'
  );
  var percent = (ethContributed / totalContributed) * 100;
  percent = percent.toFixed(3);
  if (percent == 0.0) percent = 0;
  document.getElementById('total-deposit').innerHTML = totalContributed;
  document.getElementById('your-deposit').innerHTML = ethContributed;
  document.getElementById('your-deposit-percent').innerHTML = percent;
}
setInterval(loadLGEData(), 15000);

// ========================================== V1 Vault functions ========================================== //

async function loadHDVaultData() {
  if (!address) return;
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVault),
    HDVaultAddress
  );
  var pendingHdcore = await vault.methods.pendingHdcore('0', address).call();

  const pair = new web3.eth.Contract(JSON.parse(ABI.pair), LPTokenAddress);
  const weth = new web3.eth.Contract(JSON.parse(ABI.ERC20), wethAddress);
  const HDcore = new web3.eth.Contract(JSON.parse(ABI.ERC20), HDCoreAddress);
  var totalLP = await pair.methods.totalSupply().call();
  var wethLP = await weth.methods.balanceOf(LPTokenAddress).call();
  var lockedLP = await pair.methods.balanceOf(HDVaultAddress).call();
  // document.getElementById('stakedLP').innerHTML = "Total Tokens Locked<br>" + parseFloat(web3.utils.fromWei(lockedLP, 'ether')).toFixed(4)
  var averageRewards = await vault.methods
    .averageFeesPerBlockSinceStart()
    .call();
  var HDCoreLP = await HDcore.methods.balanceOf(LPTokenAddress).call();
  var ethPerLP = wethLP / totalLP;
  ethPerLP = ethPerLP * 2;
  var ethPerHDCore = wethLP / HDCoreLP;
  var lockedLPValue = web3.utils.fromWei(lockedLP, 'ether') * ethPerLP;
  var HDCorePerYear = web3.utils.fromWei(averageRewards, 'ether') * 2103840;
  var ethPerYear = HDCorePerYear * ethPerHDCore;
  var APY = (ethPerYear / lockedLPValue) * 100;
  APY = APY.toFixed(3);
  // document.getElementById('apyLP-v1').innerHTML = APY
  // var price = wethLP / HDCoreLP
  // document.getElementById('priceHDcore').innerHTML = "HDcore Price<br>" + price.toFixed(4) + " ETH"

  var amountStaked = (await vault.methods.userInfo('0', address).call()).amount;
  document.getElementById('stakedLP-v1').innerHTML = Number(
    web3.utils.fromWei(amountStaked, 'ether')
  ).toFixed(5);

  var pendingHdcore = web3.utils.fromWei(
    await vault.methods.pendingHdcore(0, address).call()
  );
  document.getElementById('tokens-claimable-v1').innerHTML = Number(
    pendingHdcore
  ).toFixed(5);

  document.getElementById('total-lp-locked-v1').innerHTML = Number(
    web3.utils.fromWei(lockedLP)
  ).toFixed(5);
}
setInterval(loadHDVaultData, 15000);

async function claimLPV1() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVault),
    HDVaultAddress
  );
  const claim = await new Promise((resolve, reject) => {
    vault.methods.deposit('0', '0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!claim) return;
  document.getElementById('claimLPbutton-v1').innerText = 'Claiming...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(claim);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('claimLPbutton-v1').innerText = 'Claim';
    }
  }, 10 * 1000);
}

async function withdrawAllLPV1() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVault),
    HDVaultAddress
  );
  var amountStaked = (await vault.methods.userInfo('0', address).call()).amount;
  const withdraw = await new Promise((resolve, reject) => {
    vault.methods.withdraw('0', amountStaked).send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  document.getElementById('withdrawAllLPbutton-v1').innerText =
    'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('withdrawAllLPbutton-v1').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}

// ========================================== V2 Vault functions ========================================== //

async function loadHDVaultV2Data() {
  if (!address) return;
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVaultV2),
    HDCoreV2Address
  );
  var pendingHdcore = await vault.methods.pendingHdcore('0', address).call();

  const pair = new web3.eth.Contract(JSON.parse(ABI.pair), LPTokenAddress);
  const weth = new web3.eth.Contract(JSON.parse(ABI.ERC20), wethAddress);
  const HDcore = new web3.eth.Contract(JSON.parse(ABI.ERC20), HDCoreAddress);
  var totalLP = await pair.methods.totalSupply().call();
  var wethLP = await weth.methods.balanceOf(LPTokenAddress).call();
  var lockedLP = await pair.methods.balanceOf(HDCoreV2Address).call();
  var averageRewards = await vault.methods
    .averageFeesPerBlockSinceStart()
    .call();
  var HDCoreLP = await HDcore.methods.balanceOf(LPTokenAddress).call();
  var ethPerLP = wethLP / totalLP;
  ethPerLP = ethPerLP * 2;
  var ethPerHDCore = wethLP / HDCoreLP;
  var lockedLPValue = web3.utils.fromWei(lockedLP, 'ether') * ethPerLP;
  var HDCorePerYear = web3.utils.fromWei(averageRewards, 'ether') * 2103840;
  var ethPerYear = HDCorePerYear * ethPerHDCore;
  var APY = 0;
  APY = lockedLPValue == 0 ? 0 : (ethPerYear / lockedLPValue) * 100;
  APY = APY.toFixed(3);
  document.getElementById('apyLP-v2').innerHTML = APY;
  // var price = wethLP / HDCoreLP
  // document.getElementById('priceHDcore').innerHTML = "HDcore Price<br>" + price.toFixed(4) + " ETH"

  var amountStaked = (await vault.methods.userInfo('0', address).call()).amount;
  document.getElementById('stakedLP-v2').innerHTML = Number(
    web3.utils.fromWei(amountStaked, 'ether')
  ).toFixed(5);

  var pendingHdcore = web3.utils.fromWei(
    await vault.methods.pendingHdcore(0, address).call()
  );
  document.getElementById('tokens-claimable-v2').innerHTML = Number(
    pendingHdcore
  ).toFixed(5);

  var userUnstakedLPBalance = web3.utils.fromWei(
    await pair.methods.balanceOf(address).call()
  );
  document.getElementById('unstakedLP').innerHTML = Number(
    userUnstakedLPBalance
  ).toFixed(5);

  document.getElementById('total-lp-locked-v2').innerHTML = Number(
    web3.utils.fromWei(lockedLP)
  ).toFixed(5);
}
setInterval(loadHDVaultV2Data, 15000);

async function approveLPV2() {
  var LPToken = new web3.eth.Contract(JSON.parse(ABI.LPToken), LPTokenAddress);
  const approve = await new Promise((resolve, reject) => {
    LPToken.methods
      .approve(
        HDCoreV2Address,
        '9999999999999999999999999999999999999999999999999999999999'
      )
      .send(
        {
          from: address,
        },
        function (error, transactionHash) {
          if (transactionHash) resolve(transactionHash);
          else reject();
        }
      );
  });
}

async function stakeLPV2() {
  // approve first if not approved
  var LPToken = new web3.eth.Contract(JSON.parse(ABI.LPToken), LPTokenAddress);
  const allowance = await LPToken.methods
    .allowance(address, HDCoreV2Address)
    .call();
  if (allowance < 99999999999999999999999999999999999999) {
    await approveLPV2();
  }

  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVaultV2),
    HDCoreV2Address
  );
  var amount = document.getElementById('LPamount-v2').value;
  if (!amount) return;
  const deposit = await new Promise((resolve, reject) => {
    vault.methods.deposit('0', web3.utils.toWei(amount, 'ether')).send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!deposit) return;
  document.getElementById('stakeLPbutton-v2').innerText = 'Staking...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(deposit);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('stakeLPbutton-v2').innerText = 'Stake';
    }
  }, 10 * 1000);
}

async function stakeAllLPV2() {
  // approve first if not approved
  var LPToken = new web3.eth.Contract(JSON.parse(ABI.LPToken), LPTokenAddress);
  const allowance = await LPToken.methods
    .allowance(address, HDCoreV2Address)
    .call();
  if (allowance < 99999999999999999999999999999999999999) {
    await approveLPV2();
  }

  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVaultV2),
    HDCoreV2Address
  );
  const deposit = await new Promise((resolve, reject) => {
    vault.methods.depositAll('0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!deposit) return;
  document.getElementById('stakeAllLPbutton-v2').innerText = 'Staking...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(deposit);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('stakeAllLPbutton-v2').innerText = 'Stake';
    }
  }, 10 * 1000);
}

async function withdrawLPV2() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVaultV2),
    HDCoreV2Address
  );
  const withdraw = await new Promise((resolve, reject) => {
    vault.methods
      .withdraw(
        '0',
        web3.utils.toWei(document.getElementById('LPamount-v2').value, 'ether')
      )
      .send(
        {
          from: address,
        },
        function (error, transactionHash) {
          if (transactionHash) resolve(transactionHash);
          else reject();
        }
      );
  });
  document.getElementById('withdrawLPbutton-v2').innerText = 'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('withdrawLPbutton-v2').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}

async function withdrawAllLPV2() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVaultV2),
    HDCoreV2Address
  );
  const withdraw = await new Promise((resolve, reject) => {
    vault.methods.withdrawAll('0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  document.getElementById('withdrawAllLPbutton-v2').innerText =
    'Withdrawing...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(withdraw);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('withdrawAllLPbutton-v2').innerText = 'Withdraw';
    }
  }, 10 * 1000);
}

async function claimLPV2() {
  var vault = new web3.eth.Contract(
    JSON.parse(ABI.HDcoreVaultV2),
    HDCoreV2Address
  );
  const claim = await new Promise((resolve, reject) => {
    vault.methods.deposit('0', '0').send(
      {
        from: address,
      },
      function (error, transactionHash) {
        if (transactionHash) resolve(transactionHash);
        else reject();
      }
    );
  });
  if (!claim) return;
  document.getElementById('claimLPbutton-v2').innerText = 'Claiming...';
  let checkTx = setInterval(async function () {
    const tx = await web3.eth.getTransactionReceipt(claim);
    if (tx) {
      clearInterval(checkTx);
      document.getElementById('claimLPbutton-v2').innerText = 'Claim';
    }
  }, 10 * 1000);
}
