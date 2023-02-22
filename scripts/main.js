//onloads
window.onload = function(){
    quantity();

}
//end onloads

//event listeners 
function quantity(){
    let quantity = document.querySelectorAll('#quantity');
    let ui = document.querySelectorAll('quantity_ui button');
    if(quantity){
        ui[0].addEventListener('click', function(){
            quantity.value = quantity.value++;
        })
        ui[1].addEventListener('click', function(){
            quantity.value = quantity.value--;
        })
    }
}
//end event listeners