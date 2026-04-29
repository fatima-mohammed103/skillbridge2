function showSection(e,id){
    document.querySelectorAll(".section").forEach(s=>s.classList.remove("active"));
    document.querySelectorAll(".sidebar a").forEach(a=>a.classList.remove("active"));

    document.getElementById(id).classList.add("active");
    e.target.classList.add("active");
    }