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

var links;


links = ['https://images.unsplash.com/photo-1509828945144-552b3b1a968d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'https://images.unsplash.com/photo-1610834298273-a2ec97ba979d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'https://images.unsplash.com/photo-1521730365094-d6978fa2ac8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', 'https://images.unsplash.com/photo-1442689859438-97407280183f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1615199298962-dced5bccb0c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'];


document.getElementById('turn_left').addEventListener('click', (event) => {
  let element_img = document.getElementById('img');
  links.unshift(links.slice(-1)[0]);
  element_img.setAttribute("src", links.pop());

});

document.getElementById('turn_right').addEventListener('click', (event) => {
  let element_img2 = document.getElementById('img');
  links.push(links[0]);
  element_img2.setAttribute("src", links.shift());

});
