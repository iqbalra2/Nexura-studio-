// content.json থেকে ডাটা ফেস করা হবে। আপাতত ডেমো ডাটা:
let videosData = [
    { id: 1, title: "Wedding Cinematic Edit", category: "documentary", price: 500, advance: 100, src: "assets/vid1.mp4", thumb: "assets/thumb1.jpg", desc: "Best cinematic editing for your wedding." },
    { id: 2, title: "Product Promo Video", category: "product", price: 800, advance: 200, src: "assets/vid2.mp4", thumb: "assets/thumb2.jpg", desc: "Boost your sales with amazing ads." }
];

function renderVideos(category = 'all') {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = '';
    
    videosData.forEach(vid => {
        if(category === 'all' || vid.category === category) {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.onclick = () => playVideo(vid);
            card.innerHTML = `
                <img src="${vid.thumb}" alt="Thumbnail">
                <div class="video-card-info">
                    <h4>${vid.title}</h4>
                    <p style="color:#aaa; font-size: 14px;">Total: ${vid.price} BDT</p>
                </div>
            `;
            grid.appendChild(card);
        }
    });
}

function playVideo(vid) {
    document.getElementById('mainPlayer').src = vid.src;
    document.getElementById('videoTitle').innerText = vid.title;
    document.getElementById('totalCost').innerText = `Total: ${vid.price} BDT`;
    document.getElementById('advanceCost').innerText = `Advance: ${vid.advance} BDT`;
    document.getElementById('videoDesc').innerText = vid.desc;
    
    // Scroll to top animation smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function filterVideos(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderVideos(cat);
}

// Modal logic
function openOrderModal() { document.getElementById('orderModal').style.display = 'block'; }
function closeOrderModal() { document.getElementById('orderModal').style.display = 'none'; }

// Initialize
renderVideos();
