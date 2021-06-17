export function massConversions(from, to, num) {
    let newNum = 0;

    switch (from) {
        case "kg":
            switch (to){
                case "lb":
                    newNum = num * 2.20462
                    break;
                case "stone":
                    newNum = num * 0.157473
                    break;
                case "ton":
                    newNum = num * 0.00110231
            }
            break;
        case "lb":
            switch (to){
                case "kg":
                    newNum = num / 2.205
                    break;
                case "stone":
                    newNum = num / 14
                    break;
                case "ton":
                    newNum = num / 2000
            }
            break;
        case "stone":
            switch (to){
                case "lb":
                    newNum = num * 14
                    break;
                case "kg":
                    newNum = num * 6.35029
                    break;
                case "ton":
                    newNum = num / 143
            }
            break;
        case "ton":
            switch (to){
                case "lb":
                    newNum = num * 2000
                    break;
                case "stone":
                    newNum = num * 142.857
                    break;
                case "kg":
                    newNum = num * 907.185
            }
            break;
    }
    
    return newNum
}