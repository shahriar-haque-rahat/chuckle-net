fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts')
    .then(response => response.json())
    .then(data => {
        const latestPostsContainer = document.getElementById('latest-posts-container');

        data.forEach(post => {
            console.log(post);

            const postCard = document.createElement('div');
            postCard.className = 'card card-compact w-full bg-base-100 shadow-xl p-6';
            postCard.innerHTML = `
            <figure class="bg-[#12132D0D] h-48 rounded-2xl"><img src="${post.cover_image}" alt="" /></figure>
            <div class="card-body h-64">
                <div class="flex gap-2">
                    <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <clipPath id="clip29_1881">
                                <rect id="Frame" width="24.000000" height="24.000000" fill="white"
                                    fill-opacity="0" />
                            </clipPath>
                        </defs>
                        <rect id="Frame" width="24.000000" height="24.000000" fill="#FFFFFF" fill-opacity="0" />
                        <g clip-path="url(#clip29_1881)">
                            <path id="Vector"
                                d="M4.58578 5.58582C4.96086 5.21069 5.46957 5 6 5L18 5C18.5304 5 19.0391 5.21069 19.4142 5.58582C19.7893 5.96088 20 6.46954 20 7L20 19C20 19.5305 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21L6 21C5.46957 21 4.96086 20.7893 4.58578 20.4142C4.21071 20.0391 4 19.5305 4 19L4 7C4 6.46954 4.21071 5.96088 4.58578 5.58582Z"
                                stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                stroke-linejoin="round" />
                            <path id="Vector" d="M16 3L16 7" stroke="#12132D" stroke-opacity="0.600000"
                                stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                            <path id="Vector" d="M8 3L8 7" stroke="#12132D" stroke-opacity="0.600000"
                                stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                            <path id="Vector" d="M4 11L20 11" stroke="#12132D" stroke-opacity="0.600000"
                                stroke-width="1.500000" stroke-linejoin="round" stroke-linecap="round" />
                            <path id="Vector"
                                d="M11.2929 16.7071C11.4804 16.8947 11.7348 17 12 17C12.2652 17 12.5196 16.8947 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16C13 15.7348 12.8946 15.4804 12.7071 15.2929C12.5196 15.1053 12.2652 15 12 15C11.7348 15 11.4804 15.1053 11.2929 15.2929C11.1054 15.4804 11 15.7348 11 16C11 16.2652 11.1054 16.5196 11.2929 16.7071Z"
                                stroke="#12132D" stroke-opacity="0.600000" stroke-width="1.500000"
                                stroke-linejoin="round" />
                        </g>
                    </svg>
                    <p>${post.author.posted_date ? post.author.posted_date : 'No published date'}</p>
                </div>
                <h2 class="card-title font-extrabold">${post.title}</h2>
                <p>${post.description}</p>
                <div class="flex gap-4 items-center">
                    <img class="rounded-full w-11 h-11" src="${post.profile_image}" alt="">
                    <div>
                        <h1 class="font-bold text-base">${post.author.name}</h1>
                        <p class="text-base">${post.author.designation ? post.author.designation : 'Unknown'}</p>
                    </div>
                </div>
            </div>
            `;
            latestPostsContainer.appendChild(postCard);
        });
    })
    .catch(error => {
        console.error('Error fetching posts:', error);
    });