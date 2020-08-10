document.getElementById("button").addEventListener("click", function(){
   document.querySelector(".popup").style.display = "flex";
 })
document.querySelector(".close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
})

$(document).ready(function(){
//   var username_state = false;
//   var pass_state = false;
//   $('#password').keyup(function() {
//       var p_ass = $(this).val();
//       if(!p_ass==''){
//       $.ajax({
//         url: "checkLogIn.php",
//         method: "POST",
//         data: { 'pass':p_ass},
//         dataType:"text",
//         success: function (data){
//           var html = "";
//           var msg="";
//           if(data=="UUUUNAME"){
//             msg="invalid ";
//             html += "<tr>";
//
//             html += "<td>" +msg +"</td>";
//             html += "</tr>";
//           }
//           document.getElementById("divout1").innerHTML = html;
//       });
//     }




    //
    //
    // else{
    //   pass_state = true;
    //   $("#divout1").html('<span class="text-success"> *Τα πεδία είναι υποχρεωτικά </span>');
    // }
    // });

    $('#username').keyup(function() {
        var u_name = $(this).val();
        if(!u_name==''){
        $.ajax({
          url: "checkLogIn.php",
          method: "POST",
          data: { 'uname':u_name},
          dataType:"text",
          success: function (data){
            if(data =='user' ){
                    $("#divout1").css('color','green').html('<span class="text-success"> Valid Username </span>');
            }
            else{
                $("#divout1").html('<span class="text-success"> *AAaadmin </span>');
            }
          }
        });
      }
      else{
        $("#divout1").html('<span class="text-success"> *ADEIOOOOO </span>');
      }
      });

});
