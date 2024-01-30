const API_KEY="AIzaSyCsYteXj2qTXD1RG3U3MXz2qQmb-A_riBc"
export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+API_KEY;
export const YOUTUBE_SEARCH_API=" https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_VIDEO_SEARCH="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyDOi582P5MkutU_eKxBr9FyyHZSo4eGQeE";
export const url = 'https://youtube-v31.p.rapidapi.com/search?q=music&part=snippet%2Cid&regionCode=US&maxResults=50&order=date';
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9870d2e919msh622bfb710c99efbp1a70a7jsnfc0fd20b61cf',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};