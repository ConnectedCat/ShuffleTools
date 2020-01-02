$(document).ready(function(){
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    $("#RunIt").click(function(){
        var arrayLeft = [];
        var arrayRight = [];

        $(".left-array").each(function(){
            arrayLeft.push($(this).val());
        })
        arrayLeft = shuffle(arrayLeft);

        $(".left-array").each(function(index){
            $(this).val(arrayLeft[index]);
        })
    })

    $("#SaveIt").click(function(){
        var arrayLeft = [];
        var arrayRight = [];

        $(".left-array").each(function(){
            arrayLeft.push($(this).val());
        })
        console.log(arrayLeft);

        $(".right-array").each(function(){
            arrayRight.push($(this).val());
        })
        console.log(arrayRight);
        var result = {};
        var modalText = '<ul class="list-group list-group-flush">';
        arrayRight.forEach(function(key, i) {
            result[key] = arrayLeft[i];
            modalText += '<li class="list-group-item">' + key + " : " + arrayLeft[i] + "</li>";
        });

        $('#resultContents .modal-body').html(modalText);
        $('#resultContents').modal();
        console.log(JSON.stringify(result));
        download(JSON.stringify(result), "result.txt", 'text/plain');
    })

    $("#AddOne").click(function(){
        $("tbody tr:last-child").clone().appendTo("tbody");

        $("tbody tr:last-child input").val("");
    })
})