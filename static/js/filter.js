$("a.download").click(function(selection) {
   
    var input, filter, props, i;

        input = document.getElementById('myInput');
        filter = selection.srcElement.getAttribute("data-select");
        props = document.getElementsByClassName("col-third");

        if (filter == 'showall') {

            for (i = 0; i < props.length; i++) {
                props[i].style.display = "";
            }

        } else {

            for (i = 0; i < props.length; i++) {
                if (props[i].classList.contains(filter)) {
                    props[i].style.display = "";
                } else {
                    props[i].style.display = "none";
                }
            }
            
        }

   $("#dlDropDown").dropdown("toggle");

});


