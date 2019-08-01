$(document).ready(function()
{
    //$("#btn1").click(function()
    //{ 
        var c=0;
        $.ajax({
            type:"GET",
            url:"https://jsonplaceholder.typicode.com/todos",
            success:function(p)
            {
                var output="<table class='table'><thead><th>ID</th><th>TITLE</th></thead>";

                for(var i in p)               
                {
                    output+="<tr>";
                    output+="<td>"+  p[i].id+"</td>";
                    output+="<td>"+ p[i].title+"</td>";
                    output+="<td><input type='checkbox' id='cb1'></td></tr>";
                    //output+="<td>"+p[i].publishedAt+"</td>";
                }
                
                output+="</table>";
                $(".result").html(output);

                $('input[type="checkbox"]').click(function()
                {
                    if($(this).prop("checked") == true)
                    {
                        c+=1;
                    }    

                    var mypromise = new Promise((resolve,reject)=>
                    {
                        if(c==5)
                            resolve();
                        else
                            reject();
                    });

                    mypromise.then(()=>  
                    {
                        alert("Congrats. 5 Tasks have been Successfully Completed");
                    }).catch(()=>
                    {
                        console.log(c);
                    });

                });
            }
        });

});