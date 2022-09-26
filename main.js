var post = 0;
function postFunction()
{

    if(post==0)
    {
        var topic1 = document.getElementById("text1").value;
        document.getElementById("topic1").innerHTML = topic1;
        post++;
    }
    else if (post == 1)
    {  
        var topic1 = document.getElementById("text1").value;
        document.getElementById("comment1").innerHTML = topic1;
        post++;
    }
    else if (post == 2)
    {
        var topic1 = document.getElementById("text1").value;
        document.getElementById("comment2").innerHTML = topic1;
        post++
    }
    
    else if(!topic1)
    {
        alert("Comment Exceed Limit!");
        return;
    }

}

function clearFunction()
{
  if(post == 3)
  {
   document.getElementById("text1").innerHTML = "";
   document.getElementById("topic1").innerHTML = "";
   document.getElementById("comment1").innerHTML = "";
   document.getElementById("comment2").innerHTML = "";
  }
 
}