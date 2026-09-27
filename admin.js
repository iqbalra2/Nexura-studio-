async function uploadToGithub() {
    const token = document.getElementById('githubToken').value;
    const file = document.getElementById('fileUpload').files[0];
    if(!token || !file) return alert("Token or file missing!");

    // ফাইল রিড করে Base64 এ কনভার্ট করা
    const reader = new FileReader();
    reader.onload = async function(e) {
        const base64Content = e.target.result.split(',')[1];
        
        // GitHub API Call to create file in repository
        const response = await fetch(`https://api.github.com/repos/YOUR_USERNAME/YOUR_REPO/contents/assets/${file.name}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: `Upload ${file.name} via Admin Panel`,
                content: base64Content
            })
        });

        if(response.ok) {
            alert("ফাইল সফলভাবে গিটহাবে আপলোড হয়েছে! কিছুক্ষণ পর ওয়েবসাইটে আপডেট হবে।");
            // এরপর একই নিয়মে content.json ফাইলটিও fetch করে ডাটা পুশ করে আপডেট করে দিতে হবে।
        }
    };
    reader.readAsDataURL(file);
}
