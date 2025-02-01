// var isToggled = false; // biến lưu trữ trạng thái bật tắt
// var ul=false;



// // Lấy đối tượng StyleSheet đầu tiên trong trang
// var styleSheet = document.styleSheets[0];

// // Tạo một chuỗi chứa quy tắc @keyframes
// var keyframes = "  @keyframes show{    from{    opacity: 0;  }  to{ opacity: 1;  }}; animation: show 2s;";

// // Thêm quy tắc @keyframes vào vị trí đầu tiên trong tệp CSS
// styleSheet.insertRule(keyframes, 0);
// function toggleColor() {
  
//   if (isToggled) { // nếu đang bật
//     document.getElementById("loginh2").style.cssText = "  @keyframes show{    from{    opacity: 0;  }  to{ opacity: 1;  }}; animation: show 2s;";
//     document.getElementById("acimage").style.backgroundColor= "white";// đổi màu nền thành trắng
//     document.getElementById("aelogin").style.backgroundColor= "black";
//     document.getElementById("loginh1").style.color= "white";
//     document.getElementById("loginh2").style.color= "white";
//     document.getElementById("backnen").style.backgroundColor= "black";
 
//     document.getElementById("light-sun").style.opacity='0';
//     document.getElementById("light-dark").style.opacity='0.5';
    
//     isToggled = false; // đổi trạng thái thành tắt
//   } else { // nếu đang tắt
//     document.getElementById("acimage").style.backgroundColor= "black"; // đổi màu nền thành đỏ
//     document.getElementById("aelogin").style.backgroundColor= "white"; 
//     document.getElementById("loginh1").style.color= "black";
//     document.getElementById("loginh2").style.color= "black";
//     document.getElementById("backnen").style.backgroundColor= "white";
//     document.getElementById("light-sun").style.backgroundColor= "#99dbe9";
//     document.getElementById("light-sun").style.opacity='0.5';
//     document.getElementById("light-dark").style.opacity='0';

//     document.getElementById("loginh2").style.cssText = "  @keyframes show{    from{    opacity: 0;  }  to{ opacity: 1;  }}; animation: show 2s;"
//     isToggled = true; // đổi trạng thái thành bật
//   }

// }




// -------------------


var isToggled = false; // biến lưu trữ trạng thái bật tắt
var ul=false;

// Lấy đối tượng StyleSheet đầu tiên trong trang
var styleSheet = document.styleSheets[0];

// Tạo hai chuỗi chứa quy tắc @keyframes
var keyframesShow = "@keyframes show { from { opacity: 0; } to { opacity: 1; } }";
var keyframesHide = "@keyframes hide { from { opacity: 0; } to { opacity: 1; } }";

// Thêm quy tắc @keyframes vào vị trí đầu tiên và thứ hai trong tệp CSS
styleSheet.insertRule(keyframesShow, 0);
styleSheet.insertRule(keyframesHide, 1);


function toggleColor() {
  
  if (isToggled) { // nếu đang bật
    // document.getElementById("loginh1").style.cssText = "@keyframes hide { from { opacity: 1; } to { opacity: 0.2; } }; animation: hide 0.9s;";
    // document.getElementById("loginh2").style.cssText = "@keyframes hide { from { opacity: 1; } to { opacity: 0.2; } }; animation: hide 0.9s;";
    
    document.getElementById("loginh1").style.cssText = "@keyframes hide { from { opacity: 0.2; } to { opacity: 1; } }; animation: hide 2s;";
    document.getElementById("loginh2").style.cssText = "@keyframes hide { from { opacity: 0.2; } to { opacity: 1; } }; animation: hide 2s;";
    document.getElementById("acimage").style.backgroundColor= "white";// đổi màu nền thành trắng
    document.getElementById("aelogin").style.backgroundColor= "#131718";
    document.getElementById("loginh1").style.color= "white";
    document.getElementById("loginh2").style.color= "white";
    document.getElementById("backnen").style.backgroundColor= "black";

    document.getElementById("light-sun").style.opacity='0';
    document.getElementById("light-dark").style.opacity='0.5';
    document.getElementById("dangnhap").style.backgroundColor= "#00153c";
    document.getElementById("dangnhap").style.color= "#02367D";
    document.getElementById("chaiconlock").style.backgroundColor= "black";
    document.getElementById("chaiconemail").style.backgroundColor= "black";
    document.getElementById('fa-lock').style.color="#87d2e3";
    document.getElementById('fa-envelope').style.color="#87d2e3";
    document.getElementById("email").style.color= "white";
    document.getElementById("pass").style.color= "white";
    isToggled = false; // đổi trạng thái thành tắt
  } else { // nếu đang tắt
    document.getElementById("acimage").style.backgroundColor= "black"; // đổi màu nền thành đỏ
    document.getElementById("aelogin").style.backgroundColor= "white"; 

    document.getElementById("loginh1").style.color= "black";
    document.getElementById("loginh2").style.color= "black";
    document.getElementById("backnen").style.backgroundColor= "white";
    document.getElementById("light-sun").style.backgroundColor= "#99dbe9";
    document.getElementById("light-sun").style.opacity='0.5';
    document.getElementById("light-dark").style.opacity='0';
    document.getElementById("dangnhap").style.backgroundColor= "#addbff";
    document.getElementById("dangnhap").style.color= "#white";
    // document.getElementById("loginh2").style.cssText = "@keyframes show { from { opacity: 0.2; } to { opacity: 1; } }; animation: show 0.9s;";
    // document.getElementById("loginh1").style.cssText = "@keyframes show { from { opacity: 0.2; } to { opacity: 1; } }; animation: show 0.9s;";
    document.getElementById("loginh2").style.cssText = "@keyframes show { from { opacity: 0.2; } to { opacity: 1; } }; animation: show 2s;";
    document.getElementById("loginh1").style.cssText = "@keyframes show { from { opacity: 0.2; } to { opacity: 1; } }; animation: show 2s;";
    document.getElementById("chaiconlock").style.backgroundColor= "white";
    document.getElementById("chaiconemail").style.backgroundColor= "white";
    document.getElementById('fa-lock').style.color="black";
    document.getElementById('fa-envelope').style.color="black";
    document.getElementById("email").style.color= "black";
    document.getElementById("pass").style.color= "black";
    isToggled = true; // đổi trạng thái thành bật
  }

}
  // Lấy các phần tử input và div
  var email1 = document.getElementById("email");
  var pass1  = document.getElementById("pass");
  var div1 = document.getElementById("chaiconlock");
  var div2 = document.getElementById("chaiconemail");

  // Định nghĩa một hàm để xử lý sự kiện focus và blur cho input
  function handleInput(input, parent) {
    // Thêm sự kiện focus cho input
    input.addEventListener("focus", function() {
      // Thay đổi thuộc tính border của parent thành màu xanh
      parent.style.outline = "2px solid blue";
    });

    // Thêm sự kiện blur cho input
    input.addEventListener("blur", function() {
      // Đặt lại thuộc tính border của parent thành mặc định
      parent.style.outline = "";
    });
  }

  // Gọi hàm cho cả hai input
  handleInput(pass1, div1);
  handleInput(email1, div2);



  function dangnhap(){
    
  var taikhoan='hoangphuc@gmail.com'
  var matkhau='123'
  var inputtaikhoan = document.getElementById('email').value;
  var inputmatkhau = document.getElementById('pass').value;
  if(taikhoan==inputtaikhoan && matkhau == inputmatkhau){

location.href="https://www.facebook.com/minute2701/";
  }else{
    alert("Hỏi thật, mày biết cách đăng nhập không hả?????")
  }

  }

  function dangnhapgg(){
    location.href="https://accounts.google.com/o/oauth2/auth?response_type=code&access_type=online&client_id=1045948776443-tm14dk8uqouu5k1dp7hrnpafhg00cafg.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fgateway73zncdk1.monfansubvn.com%2Fapi%2Fv2%2Fserver%2Foauth%2Fgoogle&state&scope=email%20profile&approval_prompt=auto";
  }