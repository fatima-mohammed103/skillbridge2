

function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
    document.getElementById("overlay").classList.add("active");
  }

  function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");

  }

 const teamMembers = [
 {name:"ندي عمر",role:"Frontend",avatar:"https://randomuser.me/api/portraits/women/44.jpg",email:"nada@mail.com",status:"active"},
 {name:"شادي محمد",role:"Backend",avatar:"https://randomuser.me/api/portraits/men/32.jpg",email:"shady@mail.com",status:"active"},
 {name:"نور حسن",role:"UI/UX",avatar:"https://randomuser.me/api/portraits/women/68.jpg",email:"nour@mail.com",status:"progress"}
];

const roles = [
  {name:"Frontend", icon:"💻"},
  {name:"Backend", icon:"⚙️"},
  {name:"UI/UX", icon:"🎨"}
];

/* Roles */
function createRoles(){
 let html=`<div class="role-pill active" data-role="all">🌐 All <span class="count">${teamMembers.length}</span></div>`;
 roles.forEach(r=>{
   let c=teamMembers.filter(m=>m.role===r.name).length;
   html+=`<div class="role-pill" data-role="${r.name}">
   ${r.icon} ${r.name}
   <span class="count">${c}</span></div>`;
 });
 document.getElementById("roleFilters").innerHTML=html;
}

/* Members */
function renderMembers(data){
 let grid=document.getElementById("teamMembersGrid");
 grid.innerHTML="";
 data.forEach((m,i)=>{
   grid.innerHTML+=`
   <div class="col-md-4 col-lg-3">
     <div class="member-card p-4 text-center">
       <img src="${m.avatar}" class="rounded-circle mb-3" width="90">
       <h5>${m.name}</h5>
       <p class="text-primary">${m.role}</p>
       <p class="text-muted small">${m.email}</p>
       <span class="badge ${m.status==="active"?"bg-success":"bg-info"}">
         ${m.status==="active"?"نشط":"قيد التنفيذ"}
       </span>
     </div>
   </div>`;
 });

 setTimeout(()=>{
  document.querySelectorAll(".member-card").forEach((c,i)=>{
    setTimeout(()=>c.classList.add("show"),i*100);
  });
 },50);
}

/* Table */
function renderTable(data){
 let body=document.getElementById("tableBody");
 body.innerHTML="";
 data.forEach(m=>{
  body.innerHTML+=`
  <tr>
    <td>${m.name}</td>
    <td>${m.role}</td>
    <td>SkillBridge Project</td>
    <td><span class="badge ${m.status==="active"?"bg-success":"bg-info"}">${m.status}</span></td>
    <td><button class="btn btn-sm btn-outline-primary view-btn">View</button></td>
  </tr>`;
 });
}

/* Counter */
function counter(){
 document.querySelectorAll("[data-count]").forEach(el=>{
  let target=+el.dataset.count,c=0;
  let i=setInterval(()=>{
    c+=target/30;
    if(c>=target){el.textContent=target;clearInterval(i);}
    else el.textContent=Math.floor(c);
  },20);
 });
}

/* Toast */
function toast(msg){
 let t=document.createElement("div");
 t.className="toast-msg";
 t.textContent=msg;
 document.body.appendChild(t);
 setTimeout(()=>t.remove(),2000);
}

document.addEventListener("DOMContentLoaded",()=>{
 createRoles();
 renderMembers(teamMembers);
 renderTable(teamMembers);
 counter();

 document.getElementById("roleFilters").onclick=e=>{
  let pill=e.target.closest(".role-pill");
  if(!pill)return;
  document.querySelectorAll(".role-pill").forEach(p=>p.classList.remove("active"));
  pill.classList.add("active");

  let role=pill.dataset.role;
  let f=role==="all"?teamMembers:teamMembers.filter(m=>m.role===role);
  renderMembers(f);
 };

 document.getElementById("searchInput").onkeyup=e=>{
  let t=e.target.value.toLowerCase();
  let f=teamMembers.filter(m=>m.name.toLowerCase().includes(t));
  renderMembers(f);
 };

 document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.onclick=()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    let type=btn.dataset.filter;
    let f=type==="all"?teamMembers:teamMembers.filter(m=>m.status===type);
    renderTable(f);
  };
 });

 document.addEventListener("click",e=>{
  if(e.target.classList.contains("view-btn")){
    toast("Opening Profile...");
  }
 });

 document.getElementById("darkModeToggle").onclick=()=>{
  document.body.classList.toggle("dark-mode");
 };
});
const btn = document.getElementById("darkModeToggle");

btn.onclick = () => {
  document.body.classList.toggle("dark-mode");
  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
};











