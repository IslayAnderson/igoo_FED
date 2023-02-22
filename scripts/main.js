//onloads
window.onload = function(){
    quantity();

}
//end onloads

//event listeners 
function quantity(){
    let quantity = document.querySelector('#quantity');
    let ui = document.querySelectorAll('.quantity_ui button');
    console.log(ui)
    if(quantity){
        ui[0].addEventListener('click', function(e){
            //e.preventDefault();
            quantity.value++;
            console.log(quantity.value)
        })
        ui[1].addEventListener('click', function(e){
            //e.preventDefault();
            quantity.value--;
            console.log(quantity.value)
        })
    }
}
//end event listeners