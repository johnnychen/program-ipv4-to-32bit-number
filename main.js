

module.exports = function (ip = '172.168.5.1') {
    let isValid = true;
    let nn = [];


    let spaceWarning = false;
    let num = 0;
    for (let i = 0; i < ip.length; i++) {
        let ch = ip[i];

        // 数字 1.0
        if (ch !== ' ' && ch !== '.') {
            // 错误情况 1.1
            if (spaceWarning) {
                isValid = false;
                break;
                // 正常读数 1.2
            } else {
                num = num * 10 + Number(ch);
            }
            // 空格 2.0
        } else if (ch === ' ') {

            // 警告情况 2.1
            if (num > 0) {
                spaceWarning = true;
            }
            // 其他空格忽略 2.2


            // 点 3.0 进行重置
        } else if (ch === '.') {
            spaceWarning = false;
            nn.push(num);
            num = 0;
        }
    }


    if (isValid) {
        nn.push(num);
        let result = nn[3] + nn[2] * 256 + nn[1] * 256 * 256 + nn[0] * 256 * 256 * 256;
        return result;
    } else {
        console.error('Sorry, spaces between digits found');
        return 0;
    }
}