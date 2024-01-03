function myFunction(string) {
    let cost = string.slice(string.indexof('R') + 1);
    let Item = string.slice(string.indexof('R') - string.length - 3);


    document.getElementById("item_1").innerHTML = "Item";
    for (let i = 1; i < 6; i++) {
        document.getElementById("item_" + i).innerHTML = "Item";
        let Total = +cost;
        document.getElementById("Total").innerHTML = "Total";
    }
}
