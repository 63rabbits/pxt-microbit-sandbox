//% weight=100
//% color=#0fbc11
//% icon="\uf0c3"
namespace sandbox {

    /**
     * sample function
     */
    //% block="s %arg1 %arg2"
    //% help=help/sample.txt
    export function sample(arg1: number, arg2: number) {
        basic.showNumber(arg1)
    }

    //% block="s2 $arg1 $arg2"
    //% subcategory="subcat"
    export function sample2(arg1: number, arg2: number) {
        basic.showNumber(arg1)
    }

}
