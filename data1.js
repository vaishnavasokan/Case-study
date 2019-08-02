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
                var output="<table class='table'><thead style='background:#66a3ff'><th style='border-right: 1px solid black;'>ID</th><th style='border-right: 1px solid black;'>TITLE</th><th style='border-right: 1px solid black; text-align: center'>CHECKLIST</th></thead>";

                for(var i in p)               
                {
                    output+="<tr>";
                    output+="<td style='border-right: 1px solid black;'>"+  p[i].id+"</td>";
                    output+="<td style='border-right: 1px solid black;'>"+ p[i].title+"</td>";
                    if(p[i].completed==true)
                    {
                        output+="<td style='text-align: center;'><input type='checkbox' checkbox checked id='cb1' disabled></td></tr>";
                    }
                    else
                    output+="<td style='text-align: center;'><input type='checkbox' id='cb1'></td></tr>";
                    
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