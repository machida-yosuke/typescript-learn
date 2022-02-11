function reset (value: number | string | boolean){
    const v0 = value
    if(typeof value === 'number'){
        const v1 = value
        return 0
    }

    const v2 = value
    if(typeof value === 'string'){
        const v3 = value
        return ''
    }

    const v4 = value
    return false
}

console.log(reset(0));
console.log(reset('0'));
console.log(reset(false));
