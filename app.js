var btn = document.getElementById('btn-light');

var description = document.getElementById('description');
var hide = document.getElementById('hide');
var asda = document.getElementById('description-area');
var like = document.getElementById('like-icon')
var likebtn = document.getElementById('like-btn');
var qwer = document.getElementById('qwer');
var commentbtn = document.getElementById('comment-btn');
var deleteicon = document.getElementById('delete-icon');



function check()
{

    if(description.value != "")
    {
        hide.style.display = "block";
        asda.innerHTML = description.value;
        description.value = "";


    }
    
    else{
        alert("Enter Something");
    }

}


function showpost()
{
    hide.style.display = 'block';
}


function liked()
{
    likebtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>Liked`;
}


function commented()
{

}



function deletepost()
{
    hide.style.display = "none";
    likebtn.innerHTML = `<i class="fa-regular fa-thumbs-up" id="like-icon"></i>&nbsp;Like`;
}
