// document.addEventListener("DOMContentLoaded", function () {
//     fetch("db.json") // استبدل هذا بالعنوان الصحيح لملف JSON
//         .then((response) => response.json())
//         .then((jsonData) => {
//             // تعيين قيمة اسم المستخدم
//             const userNameInput = document.getElementById("user-name-input");
//             userNameInput.value = jsonData.username;

//             // تعيين قيمة كلمة المرور
//             const passwordInput = document.getElementById("password-input");
//             passwordInput.value = jsonData.password;
//         })
//         .catch((error) => {
//             console.error("حدث خطأ: " + error);
//         });
// });





document.addEventListener("DOMContentLoaded", function () {
    const userNameInput = document.getElementById("user-name-input");
    const userEmailInput = document.getElementById("user-email-input");
    const editProfileButton = document.getElementById("editProfileButton");
  
    // اعتراض عند النقر على زر "Save Changes"
    editProfileButton.addEventListener("click", function () {
      // استخراج البيانات من حقول الإدخال
      const newUsername = userNameInput.value;
      const newEmail = userEmailInput.value;
  
      // تخزين البيانات في Session Storage
      sessionStorage.setItem("username", newUsername);
      sessionStorage.setItem("email", newEmail);
  
      // إعادة توجيه المستخدم إلى صفحة البروفايل
      window.location.href = "profile-page.html";
    });
  });
  document.getElementById("editProfileButton").addEventListener("click", function () {
    // استخراج البيانات من حقول الإدخال
    const newUsername = document.getElementById("user-name-input").value;
    const newEmail = document.getElementById("user-email-input").value;
    const newImageName = "new-profile-image.jpg"; // استبدل هذا بالمسار أو اسم الملف الجديد

    // تخزين البيانات في Session Storage
    sessionStorage.setItem("username", newUsername);
    sessionStorage.setItem("email", newEmail);
    sessionStorage.setItem("profileImage", newImageName);
    
    // إعادة توجيه المستخدم إلى صفحة البروفايل
    window.location.href = "profile-page.html";
});

  