/* github user api */
fetch("https://api.github.com/users/Saurab-Shrestha")
    .then(response => response.json())
    .then(function(data){
        console.log(data);

        let followersCount = data['followers'];
        let followingCount = data['following'];
        let repoCount = data['public_repos'];

        document.getElementById('profileImage').src = data['avatar_url'];
        document.getElementById('fullName').textContent = data['name'];
        document.getElementById('bio').textContent = data['bio'];
        document.getElementById('country').textContent = data['location'];
        document.getElementById('followersInfo').textContent = followersCount;
        document.getElementById('followingInfo').textContent = followingCount;
        document.getElementById('reposInfo').textContent = repoCount;

        document.getElementById('githubLink').href = data['html_url'];
    })

    /* repo api */
fetch("https://api.github.com/users/Saurab-Shrestha/repos")
    .then(response =>response.json())
    .then(function(data){
    console.log(data)
    let m = data.length;
    var n = parseInt(m);
    for (i=0;i<n;i++)
    {
        document.getElementById('body').innerHTML += `
            <li> 
                <div class="body">
                    <div class="project-title">
                    <h1><a href="${data[i]['svn_url']}">${data[i]['name']}</a></h1>
                    </div>
                    <hr>
                    <div class="project-desc">
                        <p>${data[i]['description']}</p>
                    </div>
                    <hr>
                    <div class="project-footer">
                    <div class="project-tags">
                    <ul>
                        <li>${data[i]['language']}</li>
                        
                    </ul>
                    </div>
                    <div class="project-stars">
                    ${data[i]['stargazers_count']} <span><i class="fa fa-star"></i></span>
                    </div>
                </div>
            </li>`
    }
}) 



// Select all links with hashes

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
