//  accordion
//select element
const accordionBox=document.querySelectorAll(".accordion__box");
//loop through accordionBoxes
for(var i =0 ; i<accordionBox.length ;i++){

    //handle click on accordionBox(collapse)
    accordionBox[i].addEventListener("click",function(){
        let el=accordionBox[0];
        while (el) {
            if(el.tagName== "DIV"){
                //remove class active from siblings
                el.classList.remove("active");
            }
            //pass to siblings
            el=el.nextSibling;
        }
        //add class active to selected one
        this.classList.toggle("active");
    })
    
}
