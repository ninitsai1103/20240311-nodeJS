// 重新命名導出
const aa = () => {
    console.log("Ni");
}

const bb = () => {
    console.log("Taiwan");
}

export {
    aa as sayMyName,
    bb as sayMyCountry
}