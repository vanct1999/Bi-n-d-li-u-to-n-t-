function convert() {
    let mount = document.getElementById('amount').value;
    let from = document.getElementById('FromCurrency').value;
    let to = document.getElementById('ToCurrency').value;
    let result = mount * from / to;
    document.getElementById('result').innerHTML = result;
}