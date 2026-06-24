// Biến toàn cục lấy thẻ HTML
const eventList = document.getElementById('event-list');
const searchInput = document.getElementById('search-input');
const categoryFilter = document.getElementById('category-filter');
const levelFilter = document.getElementById('level-filter');
const btnReset = document.getElementById('btn-reset');

// 1. RENDER DANH SÁCH (Dùng cho trang courses.html)
function renderEvents(data) {
    if (!eventList) return;
    eventList.innerHTML = '';
    if(data.length === 0) {
        eventList.innerHTML = '<p class="text-center w-100">Không tìm thấy sự kiện phù hợp.</p>';
        return;
    }
    data.forEach(event => {
        eventList.innerHTML += `
            <div class="col-md-4 col-sm-6 mb-4">
                <div class="card h-100 shadow-sm custom-card">
                    <img src="${event.image}" class="card-img-top" alt="${event.title}" style="height: 200px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <span class="badge bg-primary mb-2 align-self-start">${event.category}</span>
                        <h5 class="card-title fw-bold">${event.title}</h5>
                        <p class="card-text text-muted small"><i class="bi bi-calendar"></i> ${event.date} | ${event.level}</p>
                        <p class="card-text">${event.description}</p>
                        <div class="mt-auto d-flex justify-content-between">
                            <button class="btn btn-outline-primary btn-sm" onclick="showModal(${event.id})">Xem chi tiết</button>
                            <a href="register.html?id=${event.id}" class="btn btn-primary btn-sm">Đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

// 2. TÌM KIẾM VÀ LỌC DỮ LIỆU
function filterData() {
    const keyword = searchInput.value.toLowerCase();
    const cat = categoryFilter.value;
    const lvl = levelFilter.value;

    // ĐÃ ĐỔI: events.filter -> courses.filter
    const filtered = courses.filter(e => {
        const matchName = e.title.toLowerCase().includes(keyword);
        const matchCat = cat === "" || e.category === cat;
        const matchLvl = lvl === "" || e.level === lvl;
        return matchName && matchCat && matchLvl;
    });
    renderEvents(filtered);
}

if (searchInput) {
    searchInput.addEventListener('input', filterData);
    categoryFilter.addEventListener('change', filterData);
    levelFilter.addEventListener('change', filterData);
    btnReset.addEventListener('click', () => {
        searchInput.value = ''; categoryFilter.value = ''; levelFilter.value = '';
        renderEvents(courses); // ĐÃ ĐỔI: events -> courses
    });
    renderEvents(courses); // ĐÃ ĐỔI: events -> courses
}

// 3. XEM CHI TIẾT BẰNG MODAL
function showModal(id) {
    // ĐÃ ĐỔI: events.find -> courses.find
    const event = courses.find(e => e.id === id);
    if(event) {
        document.getElementById('modal-title').innerText = event.title;
        document.getElementById('modal-img').src = event.image;
        document.getElementById('modal-desc').innerText = event.description;
        document.getElementById('modal-detail').innerText = event.detail;
        document.getElementById('modal-meta').innerText = `Danh mục: ${event.category} | Cấp độ: ${event.level} | Ngày: ${event.date}`;
        document.getElementById('modal-register-btn').href = `register.html?id=${event.id}`;
        
        const eventModal = new bootstrap.Modal(document.getElementById('eventModal'));
        eventModal.show();
    }
}

// 4. FORM VALIDATION & LOCALSTORAGE (Dùng cho trang register.html)
const regForm = document.getElementById('register-form');
if (regForm) {
    // Đổ dữ liệu vào thẻ select
    const selectEvent = document.getElementById('event');
    // ĐÃ ĐỔI: events.forEach -> courses.forEach
    courses.forEach(e => {
        selectEvent.innerHTML += `<option value="${e.title}">${e.title}</option>`;
    });

    // Tự động chọn sự kiện nếu có truyền ID trên URL
    const urlParams = new URLSearchParams(window.location.search);
    const eventId = urlParams.get('id');
    if(eventId) {
        // ĐÃ ĐỔI: events.find -> courses.find
        const ev = courses.find(e => e.id == eventId);
        if(ev) selectEvent.value = ev.title;
    }

    regForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Lấy dữ liệu form
        const fullname = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const studentClass = document.getElementById('studentClass').value.trim();
        const eventSelect = document.getElementById('event').value;
        const note = document.getElementById('note').value.trim();

        // Kiểm tra Họ tên: tối thiểu 3 ký tự
        if (fullname.length < 3) {
            document.getElementById('name-error').innerText = "Họ tên không được rỗng và phải >= 3 ký tự.";
            isValid = false;
        } else document.getElementById('name-error').innerText = "";

        // Kiểm tra Email: Đúng định dạng
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('email-error').innerText = "Email không hợp lệ.";
            isValid = false;
        } else document.getElementById('email-error').innerText = "";

        // Kiểm tra SĐT: 9-11 số
        const phoneRegex = /^[0-9]{9,11}$/;
        if (!phoneRegex.test(phone)) {
            document.getElementById('phone-error').innerText = "Số điện thoại phải từ 9 đến 11 chữ số.";
            isValid = false;
        } else document.getElementById('phone-error').innerText = "";

        // Kiểm tra Lớp
        if (studentClass === "") {
            document.getElementById('class-error').innerText = "Lớp không được để trống.";
            isValid = false;
        } else document.getElementById('class-error').innerText = "";

        if (eventSelect === "") {
            document.getElementById('event-error').innerText = "Vui lòng chọn sự kiện.";
            isValid = false;
        } else document.getElementById('event-error').innerText = "";

        // Lưu LocalStorage nếu hợp lệ
        if (isValid) {
            const newReg = { id: Date.now(), fullname: fullname, email, phone, studentClass, event: eventSelect, note };
            let registrations = JSON.parse(localStorage.getItem('tech_registrations')) || [];
            registrations.push(newReg);
            localStorage.setItem('tech_registrations', JSON.stringify(registrations));
            
            alert("Đăng ký thành công!");
            window.location.href = "registrations.html";
        }
    });
}

// 5. HIỂN THỊ DANH SÁCH ĐĂNG KÝ (Dùng cho trang registrations.html)
const regTableBody = document.getElementById('reg-table-body');
if (regTableBody) {
    function loadRegistrations() {
        let registrations = JSON.parse(localStorage.getItem('tech_registrations')) || [];
        regTableBody.innerHTML = '';
        if(registrations.length === 0) {
            regTableBody.innerHTML = '<tr><td colspan="7" class="text-center">Chưa có ai đăng ký</td></tr>'; // Đã nâng lên colspan="7" cho đúng số cột bảng mới
            return;
        }
        registrations.forEach((reg, index) => {
            const row = `<tr>
                <td>${index + 1}</td>
                <td>${reg.fullname}</td>
                <td>${reg.studentClass}</td>
                <td>${reg.event}</td>
                <td>${reg.phone}</td>
                <td>${reg.note ? reg.note : '<em class="text-muted">Không có câu hỏi</em>'}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-danger" onclick="deleteReg(${index})">Xóa</button>
                </td>
            </tr>`;
            regTableBody.innerHTML += row;
        });
    }

    window.deleteReg = function(index) {
        if(confirm("Bạn có chắc chắn muốn xóa?")) {
            let registrations = JSON.parse(localStorage.getItem('tech_registrations')) || [];
            registrations.splice(index, 1);
            localStorage.setItem('tech_registrations', JSON.stringify(registrations));
            loadRegistrations();
        }
    };

    const btnDeleteAll = document.getElementById('btn-delete-all');
    if (btnDeleteAll) {
        btnDeleteAll.addEventListener('click', () => {
            if(confirm("Xóa toàn bộ danh sách?")) {
                localStorage.removeItem('tech_registrations');
                loadRegistrations(); // ĐÃ THÊM: Chạy lại hàm nạp bảng để xóa trắng giao diện lập tức
            }
        });
    }

    loadRegistrations();
}