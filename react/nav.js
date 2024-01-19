let sidebarEnabled=0;

const root = ReactDOM.createRoot(
    document.getElementById('nav')
  );

  const element = (
<div  class="d-flex justify-content-between">
<span id="brand"><img src="/images/logo.png" alt="Logo"/>Disha Learning</span>
<span id="navAction" onClick={toggleNav}><i class="fas fa-bars"></i></span>
</div>
  );

  root.render(element);

function toggleNav() {
    if(sidebarEnabled) {
        document.getElementById("sidebar").style.display="none";
        document.getElementById("navAction").innerHTML = `<i class="fas fa-bars"></i>`;
        sidebarEnabled=0;
    } else {
        document.getElementById("sidebar").style.display="block";
        document.getElementById("navAction").innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        sidebarEnabled=1;
    }
  }
