//onloads
window.onload = function(){
    quantity();

}
//end onloads

//event listeners 
function quantity(){
    let quantity = document.querySelectorAll('#quantity');
    let ui = document.querySelectorAll('.quantity_ui button');
    console.log(ui)
    if(quantity){
        ui[0].addEventListener('click', function(e){
            //e.preventDefault();
            quantity.value = quantity.value++;
            console.log(quantity.value)
        })
        ui[1].addEventListener('click', function(e){
            //e.preventDefault();
            quantity.value = quantity.value--;
            console.log(quantity.value)
        })
    }
}
//end event listeners