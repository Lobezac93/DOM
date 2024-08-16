var menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  // Select and cache the top menu element
  const topMenuEl = document.getElementById("top-menu");
  
  // loops over the array to Create and append menu links to the navbar
  menuLinks.forEach((link) => {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
  });
  
  // Style the top menu
  topMenuEl.style.height = "100%";
  topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  // Select and cache the <main> element
  const mainEl = document.querySelector("main");
  
  // Set the background color using the CSS custom property
  mainEl.style.backgroundColor = "var(--main-bg)";
  
  // Set the content of <main> to <h1>DOM Manipulation</h1>
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
  
  // Add a class of 'flex-ctr' to <main>
  mainEl.classList.add("flex-ctr");
  
  // Part 3: Creating and Styling Submenu
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.backgroundColor = "var(--sub-menu-bg)"; // Fixed CSS custom property syntax
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  // Add a single event listener to topMenuEl for menu interactions
  topMenuEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
  
    // Handle the top menu link activation
    const link = menuLinks.find(link => link.text === event.target.textContent);
    if (!link) return;
  
    // Toggle active class on the clicked link
    topMenuEl.querySelectorAll('a').forEach(link => link.classList.remove('active'));
    event.target.classList.add('active');
  
    // Show or hide the submenu
    if (link.subLinks) {
      subMenuEl.style.top = '100%';
      buildSubmenu(link.subLinks);
    } else {
      subMenuEl.style.top = '0';
      subMenuEl.innerHTML = ''; // Clear submenu if no subLinks
    }
  });
  
  // Build the submenu from the given subLinks array
  function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = ''; // Clear existing contents
    subLinks.forEach(subLink => {
      const a = document.createElement('a');
      a.href = subLink.href;
      a.textContent = subLink.text;
      subMenuEl.appendChild(a);
    });
  }
  
  // Add a delegated event listener to the submenu for submenu interactions
  subMenuEl.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
  
    // Update <main> content and hide submenu
    document.querySelector('main h1').textContent = event.target.textContent;
    subMenuEl.style.top = '0'; // Hide submenu after selection
  
    // Remove active class from top menu links
    topMenuEl.querySelectorAll('a').forEach(link => link.classList.remove('active'));
  });
