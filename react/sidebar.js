const root = ReactDOM.createRoot(
    document.getElementById('sidebar')
  );

  const element = (
<div>
    <a href="/dashboard.html"><i class="fas fa-home"></i>Home</a>
    <a href="/notes.html"><i class="fas fa-book"></i>Notes</a>
    <a href="/practice.html"><i class="fas fa-clipboard-list"></i>Practice</a>
    <a href="/account.html"><i class="fas fa-user-circle"></i>Account</a>
    <a href="/support.html"><i class="fa-solid fa-ticket"></i>Support</a>
</div>
  );

  root.render(element);