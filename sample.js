// <div>
//   <img src="images/bird.png" alt="" />
//   <div class="detail">
//     <h2>hfskjfhs</h2>
//     <p>fsdjkfhdskjfhdsk</p>
//   </div>
// </div>;
let apiUser = "http://localhost:3000/grades";

const list = document.getElementById("list");
const search = document.getElementById("search");
const listItems = [];

search.addEventListener("input", (e) => filterInput(e.target.value));

//login
const username = document.querySelector(".input-login-username");
const password = document.querySelector(".input-login-password");
const bntLogin = document.querySelector(".login__signInButton");

// get user
const getUser = async () => {
  const response = await fetch(apiUser);
  const data = await response.json();
  return data;
};

getUser().then((data) => {
  //   const user = data.find(
  //     (user) => user.sv.maSV == username.value && user.sv.TenSV == password.value
  //   );
  //   if (user) {
  //     alert("Login success");
  //     window.location.href = "index.html";
  //   } else {
  //     alert("Login failed");
  //   }
  list.innerHTML = "Loading ...";
  setTimeout(() => {
    list.innerHTML = "";
    const user = data.find((result) => {
      const divItem = document.createElement("div");
      //   listItems.push(divItem);
      listItems.push(divItem);
      divItem.innerHTML = `   
        <div class="detail">
        <img src="images/actvn_big_icon.png" alt="">
          <h2>        
          Mã học sinh: ${result.sv.maSV}</br>
          Tên học sinh: ${result.sv.TenSV}</br>
          Toán: ${result.anhVan};
          Lý: ${result.tinHoc};
          Hóa: ${result.gdtc};
          Sinh: ${result.sinh};
          Tin: ${result.tin};
          Công nghệ: ${result.congNghe};
          Ngữ văn: ${result.nguVan};
          Địa lý: ${result.diaLy};
          Lịch sử: ${result.lichSu};
          Công dân: ${result.congDan}.</br>
          </h2>
          
        </div>

              `;
      list.appendChild(divItem);
    });
  }, 2000);
});

function filterInput(keySearch) {
  const searchTerm = keySearch.toLowerCase();
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
  console.log("keySearch :>", keySearch);
}
