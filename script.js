var websites;


websites = ['LinkedIn', 'Netlify', 'Facebook'];
websites.forEach((websites) => {
  let element_list1 = document.getElementById('list1');
  let new_li = document.createElement('li');
  let new_a = document.createElement('a');
  if (websites == 'LinkedIn') {
    new_a.setAttribute("href", 'https://www.linkedin.com/in/nataliia-zablotska/');
    new_a.innerText = websites;
  }
  if (websites == 'Netlify') {
    new_a.setAttribute("href", 'https://app.netlify.com/teams/nataliia-zab/overview');
    new_a.innerText = websites;
  }
  if (websites == 'Facebook') {
    new_a.setAttribute("href", 'https://www.facebook.com/nataliia.zab');
    new_a.innerText = websites;
  }

  new_li.appendChild(new_a);

  element_list1.appendChild(new_li);
});
