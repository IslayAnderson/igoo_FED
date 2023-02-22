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
            if(quantity.value < 999){
                quantity.value++;
            }
            console.log(quantity.value)
        })
        ui[1].addEventListener('click', function(e){
            //e.preventDefault();
            if(quantity.value > 1){
                quantity.value--;
            }
            console.log(quantity.value)
        })
    }
}
//end event listeners