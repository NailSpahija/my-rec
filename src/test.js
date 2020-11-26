
const si = require('systeminformation');

// const os_type = si.osInfo().then((val)=>{ console.log(val['platform'])});
// console.log(os_type);

si.graphics().then(val=> console.log(val));




