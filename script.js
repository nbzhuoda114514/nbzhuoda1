// 跳转到个人主页
function goToUserProfile(userId) {
    window.location.href = `profile.html?userId=${userId}`;
}

// 登录表单提交处理
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 这里可以添加实际的登录验证逻辑
    console.log(`Logging in with ${username} and ${password}`);
    alert('Login successful!');

    // 假设登录成功，跳转到个人主页
    window.location.href = 'profile.html';
});

// 注册表单提交处理
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newPassword !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // 这里可以添加实际的注册逻辑
    console.log(`Registering user ${newUsername}`);
    alert('Registration successful! Please log in.');

    // 注册成功后跳转到登录页面
    window.location.href = 'login.html';
});

// 加载个人主页数据
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    if (userId) {
        // 这里可以根据userId加载对应的用户资料
        // 示例：假设有预定义的用户数据
        const userProfile = {
            user1: { name: "User One", email: "userone@example.com", phone: "123-456-7890" },
            user2: { name: "User Two", email: "usertwo@example.com", phone: "098-765-4321" }
        };

        const profile = userProfile[userId];
        if (profile) {
            document.getElementById('welcomeName').textContent = profile.name;
            document.getElementById('email').textContent = profile.email;
            document.getElementById('phone').textContent = profile.phone;
        } else {
            alert('User not found!');
        }
    }
};