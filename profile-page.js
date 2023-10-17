
// document.addEventListener('DOMContentLoaded', function () {
//   // قم بجلب المعلومات من ملف JSON باستخدام AJAX أو Fetch API
//   fetch('db.json') // يجب تعديل اسم الملف إلى اسم ملفك الفعلي
//       .then(response => response.json())
//       .then(data => {
//           const userName = document.getElementById('user-name');
//           const userEmail = document.getElementById('email');
//           // const profileImage = document.getElementById('profileImage');
          
//           // قم بتحديث العناصر في الصفحة بالبيانات من ملف JSON
//           userName.textContent = data.username;
//           userEmail.textContent = data.email;
//           // profileImage.src = data.profileImage;
//       })
//       .catch(error => console.error('Error:', error));
// });






document.addEventListener("DOMContentLoaded", function () {
  const userNameElement = document.getElementById("user-name");
  const userEmailElement = document.getElementById("email");

  // استرجاع بيانات المستخدم من Session Storage
  const storedUsername = sessionStorage.getItem("username");
  const storedEmail = sessionStorage.getItem("email");

  // عرض بيانات المستخدم إذا تم تخزينهما في Session Storage
  if (storedUsername) {
    userNameElement.textContent = storedUsername;
  }
  if (storedEmail) {
    userEmailElement.textContent = storedEmail;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const userName = sessionStorage.getItem("username");
  const userEmail = sessionStorage.getItem("email");

  // عرض البيانات في صفحة البروفايل
  document.getElementById("user-name").textContent = userName;
  document.getElementById("email").textContent = userEmail;
});

