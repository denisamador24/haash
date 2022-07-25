const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC6kb0evup3Kgbz0N067E9wA&part=snippet%2Cid&order=date&maxResults=8'

const content = document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '02f6e9b7c8msh2cf8eabddcad7bcp1622adjsn0a032f1025b2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(url){
  const response = await fetch(url, options)
  const data = await response.json()
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API)
    console.log(videos)
    const view = videos.items.map(video => `
      <div class="group relative">
          <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
              <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                  ${video.snippet.title}
              </h3>
            </div>
          </div>
    `).slice(0, 8).join('');
    console.log('view ', view)
    content.innerHTML = view
  } catch (err) {
    console.error(err)
  }
})();
