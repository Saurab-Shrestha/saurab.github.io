fetch("https://api.github.com/users/Saurab-Shrestha")
    .then(response => response.json())
    .then(function(data){
        console.log(data);

        let followersCount = data['followers'];
        let followersInfo = `I have been followed by ${followersCount} people on Github.`;

        document.getElementById('profileImage').src = data['avatar_url']
        document.getElementById('fullName').textContent = data['name']
        document.getElementById('bio').textContent = data['bio']

        document.getElementById('followersInformartion').textContent = followersInfo

        document.getElementById('githubLink').href = followersInfo
    })