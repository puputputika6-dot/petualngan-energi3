<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Petualangan Energi - Media Pembelajaran IPAS Kelas IV</title>
    <link rel="stylesheet" href="style.css">
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>

    <!-- HALAMAN LOGIN -->
    <section id="login-section" class="page active">
        <div class="login-card">
            <div class="mascot-icon">⚡</div>
            <h1>Petualangan Energi</h1>
            <p class="subtitle">Belajar Perubahan Energi Jadi Seru!</p>
            <form id="login-form">
                <div class="form-group">
                    <label for="student-name">Nama Lengkap</label>
                    <input type="text" id="student-name" placeholder="Masukkan nama kamu..." required>
                </div>
                <div class="form-group">
                    <label for="student-class">Kelas / Rombel</label>
                    <select id="student-class" required>
                        <option value="">-- Pilih Kelas --</option>
                        <option value="Kelas 4A">Kelas 4A</option>
                        <option value="Kelas 4B">Kelas 4B</option>
                        <option value="Kelas 4C">Kelas 4C</option>
                    </select>
                </div>
                <button type="submit" class="btn-primary">Mulai Belajar 🚀</button>
            </form>
        </div>
    </section>

    <!-- DASHBOARD & KONTEN UTAMA (SPA) -->
    <div id="main-app" class="app-container hidden">
        <!-- Sidebar / Navigation -->
        <header class="navbar">
            <div class="nav-brand">⚡ Petualangan Energi</div>
            <div class="nav-user">
                Halo, <span id="display-name">Siswa</span>! (<span id="display-class">-</span>)
                <button id="btn-logout" class="btn-text">Keluar</button>
            </div>
        </header>

        <div class="main-layout">
            <nav class="sidebar">
                <button class="nav-link active" data-target="dashboard-page">🏠 Dashboard</button>
                <button class="nav-link" data-target="material-page">📚 Materi</button>
                <button class="nav-link" data-target="activity-page">🧩 Aktivitas Belajar</button>
                <button class="nav-link" data-target="game-page">🎮 Permainan</button>
                <button class="nav-link" data-target="quiz-page">📝 Kuis</button>
                <button class="nav-link" data-target="result-page">📊 Hasil Belajar</button>
                <button class="nav-link" data-target="guide-page">📖 Petunjuk</button>
                <button class="nav-link" data-target="about-page">ℹ️ Tentang Media</button>
            </nav>

            <main class="content-area">
                <!-- DASHBOARD PAGE -->
                <div id="dashboard-page" class="tab-content active">
                    <div class="welcome-banner">
                        <h2>Selamat Datang, <span id="banner-name">Penjelajah Energi</span>! 👋</h2>
                        <p>Ayo jelajahi bagaimana energi di sekitar kita dapat berubah bentuk untuk membantu kehidupan sehari-hari.</p>
                    </div>
                    
                    <div class="progress-card">
                        <h3>Indikator Kemajuan Belajar Kamu</h3>
                        <div class="progress-bar-container">
                            <div id="global-progress-bar" class="progress-bar" style="width: 0%;"></div>
                        </div>
                        <p id="progress-text">Penyelesaian: 0%</p>
                    </div>

                    <div class="menu-grid">
                        <div class="menu-card" onclick="switchTab('material-page')">
                            <div class="icon">📚</div>
                            <h3>Materi</h3>
                            <p>Pelajari bentuk & perubahan energi.</p>
                        </div>
                        <div class="menu-card" onclick="switchTab('activity-page')">
                            <div class="icon">🧩</div>
                            <h3>Aktivitas</h3>
                            <p>Uji pemahaman lewat latihan seru.</p>
                        </div>
                        <div class="menu-card" onclick="switchTab('game-page')">
                            <div class="icon">🎮</div>
                            <h3>Permainan</h3>
                            <p>Mainkan "Antarkan Energi ke Tujuannya!".</p>
                        </div>
                        <div class="menu-card" onclick="switchTab('quiz-page')">
                            <div class="icon">📝</div>
                            <h3>Kuis</h3>
                            <p>Kerjakan 10 soal pilihan ganda.</p>
                        </div>
                    </div>
                </div>

                <!-- MATERIAL PAGE -->
                <div id="material-page" class="tab-content">
                    <h2>Materi: Mengubah Bentuk Energi</h2>
                    <p class="section-desc">Gunakan tombol navigasi di bawah card untuk membaca materi secara bertahap.</p>
                    
                    <div class="material-slider">
                        <div class="card material-card active" data-index="0">
                            <h3>1. Apa itu Energi?</h3>
                            <p class="material-snippet"><strong>Penjelasan:</strong> Energi adalah kemampuan untuk melakukan kerja atau usaha. Energi tidak dapat diciptakan dan tidak dapat dimusnahkan, tetapi energi dapat diubah bentuknya.</p>
                            <div class="example-box">
                                <strong>Contoh Sehari-hari:</strong> Tubuh kita butuh energi dari makanan supaya bisa berjalan, berlari, dan belajar.
                            </div>
                            <div class="energy-flow">Bentuk Energi: <span>Energi Kimia (Makanan)</span> ➔ <span>Energi Gerak & Panas (Aktivitas)</span></div>
                        </div>

                        <div class="card material-card" data-index="1">
                            <h3>2. Perubahan Energi pada Lampu</h3>
                            <p class="material-snippet"><strong>Penjelasan:</strong> Saat saklar ditekan, arus mengalir ke bola lampu ruangan.</p>
                            <div class="example-box">
                                <strong>Contoh:</strong> Lampu kamar atau lampu belajar.
                            </div>
                            <div class="energy-flow">Perubahan: <span>Energi Listrik</span> ➔ <span>Energi Cahaya (+ sebagian Energi Panas)</span></div>
                        </div>

                        <div class="card material-card" data-index="2">
                            <h3>3. Perubahan Energi pada Kipas Angin</h3>
                            <p class="material-snippet"><strong>Penjelasan:</strong> Motor di dalam kipas angin memanfaatkan arus listrik untuk memutar baling-baling.</p>
                            <div class="example-box">
                                <strong>Contoh:</strong> Kipas angin listrik di rumah.
                            </div>
                            <div class="energy-flow">Perubahan: <span>Energi Listrik</span> ➔ <span>Energi Gerak</span></div>
                        </div>

                        <div class="card material-card" data-index="3">
                            <h3>4. Perubahan Energi pada Alat Penghasil Bunyi (Pengeras Suara / Speaker)</h3>
                            <p class="material-snippet"><strong>Penjelasan:</strong> Alat elektronik seperti speaker mengubah sinyal listrik menjadi getaran suara yang bisa didengar telinga.</p>
                            <div class="example-box">
                                <strong>Contoh:</strong> Radio, bel sekolah, dan speaker pengeras suara.
                            </div>
                            <div class="energy-flow">Perubahan: <span>Energi Listrik</span> ➔ <span>Energi Bunyi</span></div>
                        </div>

                        <div class="card material-card" data-index="4">
                            <h3>5. Perubahan Energi Menjadi Panas (Rice Cooker)</h3>
                            <p class="penjelasan"><strong>Penjelasan:</strong> Penanak nasi elektrik menggunakan elemen pemanas untuk memasak beras menjadi nasi.</p>
                            <div class="example-box">
                                <strong>Contoh:</strong> Rice cooker (penanak nasi) dan setrika listrik.
                            </div>
                            <div class="energy-flow">Perubahan: <span>Energi Listrik</span> ➔ <span>Energi Panas</span></div>
                        </div>

                        <div class="card material-card" data-index="5">
                            <h3>6. Perubahan Energi pada Senter (Materi Pendukung)</h3>
                            <p class="penjelasan"><strong>Penjelasan:</strong> Senter menggunakan baterai yang menyimpan energi kimia, dialirkan melalui kabel menjadi listrik, lalu menyala jadi cahaya.</p>
                            <div class="example-box">
                                <strong>Contoh:</strong> Senter saat mati lampu.
                            </div>
                            <div class="energy-flow">Perubahan: <span>Energi Kimia (Baterai)</span> ➔ <span>Energi Listrik</span> ➔ <span>Energi Cahaya</span></div>
                        </div>
                    </div>

                    <div class="slider-nav">
                        <button id="prev-mat" class="btn-secondary">⬅️ Sebelumnya</button>
                        <span id="mat-counter">1 dari 6</span>
                        <button id="next-mat" class="btn-primary">Berikutnya ➡️</button>
                    </div>
                </div>

                <!-- ACTIVITY PAGE -->
                <div id="activity-page" class="tab-content">
                    <h2>Aktivitas Belajar: Uji Pemahaman Cepat</h2>
                    <p class="section-desc">Jawab pertanyaan interaktif di bawah ini untuk menguji pemahamanmu tentang perubahan energi!</p>
                    
                    <div class="card activity-box">
                        <h3 id="act-question">Soal Aktivitas 1: Perubahan energi apa yang terjadi saat kita menyalakan kipas angin?</h3>
                        <div class="options-container" id="act-options">
                            <button class="opt-btn" data-correct="false">Energi Kimia menjadi Cahaya</button>
                            <button class="opt-btn" data-correct="true">Energi Listrik menjadi Gerak</button>
                            <button class="opt-btn" data-correct="false">Energi Panas menjadi Bunyi</button>
                        </div>
                        <div id="act-feedback" class="feedback-box hidden"></div>
                        <button id="next-act" class="btn-primary hidden" style="margin-top: 15px;">Soal Berikutnya ➡️</button>
                    </div>
                </div>

                <!-- GAME PAGE -->
                <div id="game-page" class="tab-content">
                    <h2>Permainan: Antarkan Energi ke Tujuannya!</h2>
                    <p class="section-desc">Pasangkan benda elektronik di sebelah kiri dengan bentuk energi hasil perubahan utamanya di sebelah kanan.</p>
                    
                    <div class="game-container">
                        <div class="game-score-board">Skor Kamu: <span id="game-score">0</span></div>
                        <div class="game-board-grid">
                            <div class="game-col">
                                <h4>Benda / Alat</h4>
                                <div class="draggable-item" draggable="true" data-match="gerak">🌀 Kipas Angin</div>
                                <div class="draggable-item" draggable="true" data-match="cahaya">💡 Lampu Belajar</div>
                                <div class="draggable-item" draggable="true" data-match="bunyi">🔊 Pengeras Suara</div>
                                <div class="draggable-item" draggable="true" data-match="panas">🍚 Rice Cooker</div>
                            </div>
                            <div class="game-col">
                                <h4>Target Energi Hasil</h4>
                                <div class="drop-zone" data-target="gerak">Energi Gerak</div>
                                <div class="drop-zone" data-target="cahaya">Energi Cahaya</div>
                                <div class="drop-zone" data-target="bunyi">Energi Bunyi</div>
                                <div class="drop-zone" data-target="panas">Energi Panas</div>
                            </div>
                        </div>
                        <div id="game-feedback" class="feedback-box hidden" style="margin-top: 15px;"></div>
                        <button id="reset-game" class="btn-secondary" style="margin-top: 15px;">Main Lagi 🔄</button>
                    </div>
                </div>

                <!-- QUIZ PAGE -->
                <div id="quiz-page" class="tab-content">
                    <h2>Kuis Pilihan Ganda (10 Soal Bab 1)</h2>
                    <div id="quiz-container">
                        <div class="quiz-header-info">
                            <span>Soal <span id="current-quiz-no">1</span> dari 10</span>
                        </div>
                        <div class="card quiz-card">
                            <h3 id="quiz-question-text">Pertanyaan kuis akan tampil di sini...</h3>
                            <div id="quiz-options-container" class="quiz-options">
                                <!-- Pilihan opsi dimuat lewat JS -->
                            </div>
                        </div>
                        <div class="quiz-nav-buttons">
                            <button id="quiz-prev" class="btn-secondary">Sebelumnya</button>
                            <button id="quiz-next" class="btn-primary">Berikutnya</button>
                        </div>
                    </div>

                    <!-- Hasil Kuis Tersembunyi sebelum selesai -->
                    <div id="quiz-result-view" class="card hidden">
                        <h3>🎉 Kuis Selesai!</h3>
                        <p>Nama: <span id="res-name"></span></p>
                        <p>Nilai Akhir: <strong id="res-score" style="font-size: 24px; color: #2563eb;">0</strong> / 100</p>
                        <p>Jawaban Benar: <span id="res-benar">0</span> | Jawaban Salah: <span id="res-salah">0</span></p>
                        <div id="quiz-feedback-banner" class="feedback-box">Bagus sekali! Tetap semangat belajar.</div>
                        
                        <h4 style="margin-top: 20px;">Pembahasan Soal:</h4>
                        <div id="quiz-review-list" style="text-align: left; max-height: 300px; overflow-y: auto; padding: 10px; background: #f8fafc; border-radius: 8px;"></div>
                        
                        <button id="btn-repeat-quiz" class="btn-primary" style="margin-top: 15px;">Ulangi Kuis 🔄</button>
                    </div>
                </div>

                <!-- RESULT PAGE -->
                <div id="result-page" class="tab-content">
                    <h2>Hasil & Kemajuan Belajar</h2>
                    <div class="card">
                        <h3>Profil Penjelajah</h3>
                        <p><strong>Nama:</strong> <span id="summary-name">-</span></p>
                        <p><strong>Kelas:</strong> <span id="summary-class">-</span></p>
                        <hr style="margin: 15px 0; border: 0; border-top: 1px solid #e2e8f0;">
                        <h3>Statistik Pembelajaran</h3>
                        <p>✅ Materi Dipelajari: <span id="sum-mat-status">Belum Selesai</span></p>
                        <p>🧩 Aktivitas Dikerjakan: <span id="sum-act-status">Belum Selesai</span></p>
                        <p>📝 Nilai Kuis Terakhir: <span id="sum-quiz-score">-</span></p>
                        
                        <div style="margin-top: 20px; display: flex; gap: 10px; flex-wrap: wrap;">
                            <button id="btn-reset-data" class="btn-secondary" style="background: #fee2e2; color: #dc2626; border: none;">Reset Data Belajar 🗑️</button>
                        </div>
                    </div>
                </div>

                <!-- GUIDE PAGE -->
                <div id="guide-page" class="tab-content">
                    <h2>Petunjuk Penggunaan</h2>
                    <div class="card">
                        <ol class="guide-list">
                            <li>Masukkan nama lengkap dan pilih kelas pada halaman awal, lalu tekan <strong>Mulai Belajar</strong>.</li>
                            <li>Buka menu <strong>Materi</strong> untuk membaca ringkasan tentang perubahan bentuk energi secara bertahap.</li>
                            <li>Kerjakan <strong>Aktivitas Belajar</strong> untuk melatih ketepatan berpikirmu.</li>
                            <li>Mainkan <strong>Permainan</strong> "Antarkan Energi ke Tujuannya!" agar belajar semakin menyenangkan.</li>
                            <li>Kerjakan <strong>Kuis</strong> 10 soal pilihan ganda untuk menguji kemampuan akhirmu.</li>
                            <li>Cek pencapaianmu pada menu <strong>Hasil Belajar</strong>.</li>
                        </ol>
                    </div>
                </div>

                <!-- ABOUT PAGE -->
                <div id="about-page" class="tab-content">
                    <h2>Tentang Media Pembelajaran</h2>
                    <div class="card">
                        <p><strong>Nama Media:</strong> Petualangan Energi</p>
                        <p><strong>Mata Pelajaran:</strong> IPAS (Ilmu Pengetahuan Alam dan Sosial)</p>
                        <p><strong>Jenjang:</strong> Kelas IV SD/MI</p>
                        <p><strong>Materi Utama:</strong> Mengubah Bentuk Energi (Bab 1 Kurikulum Merdeka Edisi Revisi)</p>
                        <p><strong>Kurikulum:</strong> Kurikulum Merdeka</p>
                        <p style="margin-top: 15px;"><strong>Referensi Utama Buku Resmi:</strong><br>
                        <a href="https://repositori.kemendikdasmen.go.id/35919/1/IPAS_BS_KLS_IV_Rev.pdf" target="_blank" style="color: #2563eb;">Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi Buku Siswa IPAS Kelas IV Revisi</a></p>
                    </div>
                </div>

            </main>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
:root {
    --primary-color: #2563eb;
    --accent-color: #f59e0b;
    --bg-color: #f0fdf4;
    --card-bg: #ffffff;
    --text-color: #1e293b;
    --success-color: #16a34a;
    --error-color: #dc2626;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #f8fafc;
    color: var(--text-color);
    min-height: 100vh;
}

/* Utility Classes */
.hidden { display: none !important; }
.active { display: flex !important; }

/* Login Section */
#login-section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8);
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.login-card {
    background: white;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    width: 90%;
    max-width: 420px;
    text-align: center;
}

.mascot-icon {
    font-size: 50px;
    margin-bottom: 10px;
}

.login-card h1 {
    color: var(--primary-color);
    font-size: 24px;
    margin-bottom: 5px;
}

.subtitle {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 25px;
}

.form-group {
    margin-bottom: 20px;
    text-align: left;
}

.form-group label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
}

.form-group input, .form-group select {
    width: 100%;
    padding: 12px;
    border: 2px solid #cbd5e1;
    border-radius: 8px;
    font-size: 15px;
    outline: none;
    transition: border-color 0.2s;
}

.form-group input:focus, .form-group select:focus {
    border-color: var(--primary-color);
}

/* Buttons */
.btn-primary {
    background-color: var(--primary-color);
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    transition: background 0.2s;
}

.btn-primary:hover {
    background-color: #1d4ed8;
}

.btn-secondary {
    background-color: #e2e8f0;
    color: #475569;
    border: none;
    padding: 10px 20px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
}

.btn-secondary:hover {
    background-color: #cbd5e1;
}

.btn-text {
    background: none;
    border: none;
    color: #ef4444;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
}

/* App Layout */
.app-container {
    flex-direction: column;
    height: 100vh;
}

.navbar {
    background: white;
    padding: 15px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.nav-brand {
    font-weight: 700;
    font-size: 20px;
    color: var(--primary-color);
}

.nav-user {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 15px;
}

.main-layout {
    display: flex;
    flex: 1;
    overflow: hidden;
}

.sidebar {
    width: 260px;
    background: white;
    border-right: 1px solid #e2e8f0;
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    gap: 8px;
}

.nav-link {
    background: none;
    border: none;
    text-align: left;
    padding: 12px 15px;
    font-size: 15px;
    font-weight: 500;
    color: #64748b;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
}

.nav-link:hover, .nav-link.active {
    background-color: #eff6ff;
    color: var(--primary-color);
}

.content-area {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
    background-color: #f8fafc;
}

.tab-content {
    display: none;
    flex-direction: column;
    gap: 20px;
    max-width: 900px;
    margin: 0 auto;
}

.tab-content.active {
    display: flex;
}

/* Cards & Banners */
.card {
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}

.welcome-banner {
    background: linear-gradient(135deg, #60a5fa, #3b82f6);
    color: white;
    padding: 25px;
    border-radius: 12px;
}

.welcome-banner h2 { margin-bottom: 8px; }

.progress-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
}

.progress-bar-container {
    background: #e2e8f0;
    height: 12px;
    border-radius: 6px;
    margin: 10px 0;
    overflow: hidden;
}

.progress-bar {
    background: var(--success-color);
    height: 100%;
    width: 0%;
    transition: width 0.4s ease;
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
}

.menu-card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    transition: transform 0.2s, box-shadow 0.2s;
}

.menu-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0,0,0,0.1);
}

.menu-card .icon { font-size: 30px; margin-bottom: 10px; }
.menu-card h3 { font-size: 16px; margin-bottom: 5px; color: var(--primary-color); }
.menu-card p { font-size: 12px; color: #64748b; }

/* Material Slider */
.material-slider {
    position: relative;
}

.material-card {
    display: none;
}

.material-card.active {
    display: block;
}

.example-box {
    background: #fef3c7;
    border-left: 4px solid var(--accent-color);
    padding: 12px;
    margin: 15px 0;
    border-radius: 4px;
    font-size: 14px;
}

.energy-flow {
    background: #eff6ff;
    padding: 10px;
    border-radius: 6px;
    font-weight: 500;
    color: var(--primary-color);
    font-size: 14px;
}

.slider-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 15px;
    border-radius: 12px;
}

/* Activity / Quiz Styles */
.options-container, .quiz-options {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
}

.opt-btn, .quiz-opt-btn {
    background: #f8fafc;
    border: 2px solid #cbd5e1;
    padding: 12px 15px;
    text-align: left;
    border-radius: 8px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.2s;
}

.opt-btn:hover, .quiz-opt-btn:hover {
    background: #eff6ff;
    border-color: var(--primary-color);
}

.opt-btn.correct, .quiz-opt-btn.correct {
    background: #dcfce7 !important;
    border-color: var(--success-color) !important;
    color: var(--success-color);
}

.opt-btn.incorrect, .quiz-opt-btn.incorrect {
    background: #fee2e2 !important;
    border-color: var(--error-color) !important;
    color: var(--error-color);
}

.feedback-box {
    margin-top: 15px;
    padding: 12px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
}

.feedback-box.success {
    background: #dcfce7;
    color: var(--success-color);
}

.feedback-box.error {
    background: #fee2e2;
    color: var(--error-color);
}

/* Game Styles */
.game-container {
    background: white;
    padding: 25px;
    border-radius: 12px;
}

.game-score-board {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 15px;
    color: var(--primary-color);
}

.game-board-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.game-col {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.draggable-item {
    background: #eff6ff;
    border: 2px dashed var(--primary-color);
    padding: 12px;
    border-radius: 8px;
    text-align: center;
    cursor: grab;
    font-weight: 500;
}

.drop-zone {
    background: #f1f5f9;
    border: 2px solid #cbd5e1;
    padding: 15px;
    border-radius: 8px;
    text-align: center;
    min-height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: #475569;
}

.drop-zone.hovered {
    background: #e2e8f0;
    border-color: var(--primary-color);
}

.quiz-nav-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.guide-list {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 15px;
}

/* Responsive */
@media(max-width: 768px) {
    .main-layout {
        flex-direction: column;
        overflow-y: auto;
    }
    .sidebar {
        width: 100%;
        flex-direction: row;
        overflow-x: auto;
        padding: 10px;
    }
    .nav-link {
        white-space: nowrap;
        padding: 8px 12px;
    }
    .game-board-grid {
        grid-template-columns: 1fr;
    }
}
// --- DATABASE 10 SOAL KUIS BAB 1 (DENGAN KUNCI & PEMBAHASAN) ---
const quizData = [
    {
        question: "1. Perubahan energi apakah yang terjadi pada kipas angin ketika dihubungkan ke arus listrik?",
        options: [
            "Energi kimia menjadi energi cahaya",
            "Energi listrik menjadi energi gerak",
            "Energi panas menjadi energi bunyi",
            "Energi cahaya menjadi energi listrik"
        ],
        answer: 1,
        explanation: "Kipas angin menggunakan motor listrik yang mengubah arus listrik menjadi gerakan putaran baling-baling (energi gerak)."
    },
    {
        question: "2. Mengapa lampu belajar dapat membantu kita melihat benda di ruangan yang gelap?",
        options: [
            "Karena lampu menghasilkan energi bunyi yang keras",
            "Karena lampu mengubah energi listrik menjadi energi cahaya",
            "Karena lampu mengubah energi gerak menjadi panas",
            "Karena lampu menyimpan energi kimia di dalam kabel"
        ],
        answer: 1,
        explanation: "Lampu memancarkan gelombang cahaya hasil perubahan dari energi listrik yang mengalir ke bolam."
    },
    {
        question: "3. Bentuk energi apakah yang dihasilkan oleh pengeras suara (speaker) saat dihidupkan?",
        options: ["Energi gerak", "Energi panas", "Energi bunyi", "Energi kimia"],
        answer: 2,
        explanation: "Speaker berfungsi mengeluarkan suara dari sinyal listrik, sehingga bentuk energi akhirnya adalah energi bunyi."
    },
    {
        question: "4. Apa yang terjadi pada rice cooker (penanak nasi) saat digunakan untuk memasak beras?",
        options: [
            "Mengubah energi listrik menjadi energi panas",
            "Mengubah energi cahaya menjadi energi gerak",
            "Mengubah energi kimia menjadi energi bunyi",
            "Mengubah energi gerak menjadi energi listrik"
        ],
        answer: 0,
        explanation: "Rice cooker memiliki elemen pemanas yang mengubah energi listrik menjadi energi panas untuk mematangkan nasi."
    },
    {
        question: "5. Perubahan energi apa yang terjadi pada senter yang menggunakan baterai?",
        options: [
            "Listrik ➔ Gerak ➔ Bunyi",
            "Kimia (baterai) ➔ Listrik ➔ Cahaya",
            "Panas ➔ Cahaya ➔ Kimia",
            "Cahaya ➔ Panas ➔ Gerak"
        ],
        answer: 1,
        explanation: "Baterai menyimpan energi kimia. Saat senter dinyalakan, energi kimia berubah menjadi listrik, lalu diubah lagi oleh bohlam menjadi cahaya."
    },
    {
        question: "6. Bagaimana energi dari makanan membantu tubuh manusia melakukan aktivitas sehari-hari?",
        options: [
            "Makanan diubah menjadi energi kimia dalam tubuh untuk menghasilkan tenaga gerak dan panas tubuh",
            "Makanan diubah langsung menjadi sinyal listrik seperti komputer",
            "Makanan menghasilkan bunyi di dalam perut",
            "Makanan memancarkan cahaya terang di dalam tubuh"
        ],
        answer: 0,
        explanation: "Tubuh mencerna makanan untuk mendapatkan energi kimia yang kemudian digunakan otot untuk bergerak dan beraktivitas."
    },
    {
        question: "7. Alat rumah tangga di bawah ini yang mengubah energi listrik menjadi energi gerak adalah...",
        options: ["Setrika listrik", "Blender / Mixer", "Kompor listrik", "Lampu pijar"],
        answer: 1,
        explanation: "Blender memutar pisaunya menggunakan motor listrik, mengubah energi listrik menjadi energi gerak."
    },
    {
        question: "8. Perhatikan dua benda: Setrika listrik dan Rice Cooker. Apa persamaan perubahan energi pada kedua alat tersebut?",
        options: [
            "Keduanya menghasilkan energi gerak",
            "Keduanya menghasilkan energi cahaya",
            "Keduanya mengubah energi listrik menjadi energi panas",
            "Keduanya menghasilkan energi bunyi"
        ],
        answer: 2,
        explanation: "Setrika dan rice cooker sama-sama memanfaatkan elemen pemanas untuk mengubah energi listrik menjadi energi panas."
    },
    {
        question: "9. Bagaimana cara kita menentukan bentuk perubahan energi pada sebuah alat elektronik?",
        options: [
            "Melihat bentuk energi awal yang masuk ke alat dan bentuk energi akhir yang dihasilkan alat tersebut",
            "Menimbang berat alat menggunakan timbangan",
            "Mengukur harga beli alat di toko",
            "Melihat warna kabel pada alat"
        ],
        answer: 0,
        explanation: "Prinsip perubahan energi diamati dari apa yang dimasukkan (input) dan apa yang dikeluarkan atau dihasilkan (output) oleh alat."
    },
    {
        question: "10. Manakah contoh penerapan konsep perubahan energi kimia menjadi energi gerak dalam kehidupan sehari-hari?",
        options: [
            "Sepeda motor melaju menggunakan bahan bakar bensin",
            "Lampu jalan menyala di malam hari",
            "Kipas angin berputar di dalam kamar",
            "Televisi menampilkan gambar kartun"
        ],
        answer: 0,
        explanation: "Bensin adalah bahan bakar kimia. Ketika dibakar di dalam mesin motor, energi kimia diubah menjadi energi gerak kendaraan."
    }
];

// --- STATE APLIKASI ---
let currentUser = {
    name: "",
    className: "",
    matCompleted: false,
    actCompleted: false,
    quizScore: null
};

let currentMatIndex = 0;
let currentQuizIndex = 0;
let userAnswers = {};
let gameScore = 0;

// --- DOMContentLoaded & INISIALISASI ---
document.addEventListener("DOMContentLoaded", () => {
    loadLocalStorage();

    // Login Form
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("student-name").value.trim();
        const classInput = document.getElementById("student-class").value;

        if (nameInput && classInput) {
            currentUser.name = nameInput;
            currentUser.className = classInput;
            saveLocalStorage();
            updateUIProfile();
            document.getElementById("login-section").classList.remove("active");
            document.getElementById("main-app").classList.remove("hidden");
            document.getElementById("main-app").classList.add("active");
        }
    });

    // Logout
    document.getElementById("btn-logout").addEventListener("click", () => {
        if(confirm("Apakah kamu yakin ingin keluar?")) {
            localStorage.removeItem("petualangan_energi_user");
            location.reload();
        }
    });

    // Navigasi Tab
    const navLinks = document.querySelectorAll(".sidebar .nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            const targetId = link.getAttribute("data-target");
            document.querySelectorAll(".tab-content").forEach(tab => {
                tab.classList.remove("active");
            });
            document.getElementById(targetId).classList.add("active");
            updateProgress();
        });
    });

    // Materi Slider
    initMaterialSlider();

    // Aktivitas Belajar
    initActivity();

    // Permainan Interaktif
    initGame();

    // Kuis
    initQuiz();

    // Reset Data Button
    document.getElementById("btn-reset-data").addEventListener("click", () => {
        if(confirm("Semua progress belajar dan nilai kuis akan dihapus. Yakin?")) {
            localStorage.removeItem("petualangan_energi_user");
            location.reload();
        }
    });
});

// --- LOCAL STORAGE HANDLING ---
function saveLocalStorage() {
    localStorage.setItem("petualangan_energi_user", JSON.stringify(currentUser));
}

function loadLocalStorage() {
    const saved = localStorage.getItem("petualangan_energi_user");
    if (saved) {
        currentUser = JSON.parse(saved);
        if (currentUser.name) {
            updateUIProfile();
            document.getElementById("login-section").classList.remove("active");
            document.getElementById("main-app").classList.remove("hidden");
            document.getElementById("main-app").classList.add("active");
        }
    }
}

function updateUIProfile() {
    document.getElementById("display-name").textContent = currentUser.name;
    document.getElementById("display-class").textContent = currentUser.className;
    document.getElementById("banner-name").textContent = currentUser.name;
    document.getElementById("summary-name").textContent = currentUser.name;
    document.getElementById("summary-class").textContent = currentUser.className;
    
    document.getElementById("sum-mat-status").textContent = currentUser.matCompleted ? "Selesai ✅" : "Belum Selesai";
    document.getElementById("sum-act-status").textContent = currentUser.actCompleted ? "Selesai ✅" : "Belum Selesai";
    document.getElementById("sum-quiz-score").textContent = currentUser.quizScore !== null ? `${currentUser.quizScore} / 100` : "Belum Dikerjakan";
    
    updateProgress();
}

function updateProgress() {
    let score = 0;
    if (currentUser.matCompleted) score += 35;
    if (currentUser.actCompleted) score += 35;
    if (currentUser.quizScore !== null) score += 30;

    document.getElementById("global-progress-bar").style.width = `${score}%`;
    document.getElementById("progress-text").textContent = `Penyelesaian: ${score}%`;
}

// --- NAVIGASI TAB GLOBAL ---
function switchTab(targetId) {
    document.querySelectorAll(".sidebar .nav-link").forEach(l => {
        l.classList.remove("active");
        if(l.getAttribute("data-target") === targetId) l.classList.add("active");
    });
    document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(targetId).classList.add("active");
    updateProgress();
}

// --- MATERI SLIDER ---
function initMaterialSlider() {
    const cards = document.querySelectorAll(".material-card");
    const counter = document.getElementById("mat-counter");

    function showCard(index) {
        cards.forEach((card, idx) => {
            card.classList.toggle("active", idx === index);
        });
        counter.textContent = `${index + 1} dari ${cards.length}`;
        if (index === cards.length - 1) {
            currentUser.matCompleted = true;
            saveLocalStorage();
        }
    }

    document.getElementById("next-mat").addEventListener("click", () => {
        if (currentMatIndex < cards.length - 1) {
            currentMatIndex++;
            showCard(currentMatIndex);
        }
    });

    document.getElementById("prev-mat").addEventListener("click", () => {
        if (currentMatIndex > 0) {
            currentMatIndex--;
            showCard(currentMatIndex);
        }
    });
}

// --- AKTIVITAS BELAJAR ---
function initActivity() {
    const optButtons = document.querySelectorAll("#activity-page .opt-btn");
    const feedbackBox = document.getElementById("act-feedback");
    const nextBtn = document.getElementById("next-act");

    optButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const isCorrect = btn.getAttribute("data-correct") === "true";
            optButtons.forEach(b => {
                b.disabled = true;
                if(b.getAttribute("data-correct") === "true") b.classList.add("correct");
                else b.classList.add("incorrect");
            });

            feedbackBox.classList.remove("hidden");
            if (isCorrect) {
                feedbackBox.className = "feedback-box success";
                feedbackBox.textContent = "Benar! Kamu berhasil mengenali perubahan energi dengan tepat.";
                currentUser.actCompleted = true;
                saveLocalStorage();
            } else {
                feedbackBox.className = "feedback-box error";
                feedbackBox.textContent = "Belum tepat. Kipas angin mengubah energi listrik menjadi energi gerak putaran baling-baling.";
            }
            nextBtn.classList.remove("hidden");
        });
    });

    nextBtn.addEventListener("click", () => {
        alert("Kamu telah menyelesaikan aktivitas belajar ini dengan baik!");
        switchTab("dashboard-page");
    });
}

// --- PERMAINAN INTERAKTIF ---
function initGame() {
    const draggables = document.querySelectorAll(".draggable-item");
    const dropZones = document.querySelectorAll(".drop-zone");
    const feedback = document.getElementById("game-feedback");

    draggables.forEach(item => {
        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", item.getAttribute("data-match"));
        });
    });

    dropZones.forEach(zone => {
        zone.addEventListener("dragover", (e) => {
            e.preventDefault();
            zone.classList.add("hovered");
        });

        zone.addEventListener("dragleave", () => {
            zone.classList.remove("hovered");
        });

        zone.addEventListener("drop", (e) => {
            e.preventDefault();
            zone.classList.remove("hovered");
            const draggedMatch = e.dataTransfer.getData("text/plain");
            const targetMatch = zone.getAttribute("data-target");

            if (draggedMatch === targetMatch) {
                zone.style.background = "#dcfce7";
                zone.style.borderColor = "#16a34a";
                zone.style.color = "#16a34a";
                zone.textContent = "✔ Cocok!";
                gameScore += 25;
                document.getElementById("game-score").textContent = gameScore;
                
                feedback.classList.remove("hidden");
                feedback.className = "feedback-box success";
                feedback.textContent = "Hebat! Pasangan energi sudah tepat.";
            } else {
                feedback.classList.remove("hidden");
                feedback.className = "feedback-box error";
                feedback.textContent = "Kurang tepat, coba cocokkan kembali dengan energi hasil yang sesuai.";
            }
        });
    });

    document.getElementById("reset-game").addEventListener("click", () => {
        gameScore = 0;
        document.getElementById("game-score").textContent = gameScore;
        feedback.classList.add("hidden");
        location.reload();
    });
}

// --- KUIS INTERAKTIF ---
function initQuiz() {
    renderQuizQuestion();

    document.getElementById("quiz-next").addEventListener("click", () => {
        if (userAnswers[currentQuizIndex] === undefined) {
            alert("Pilih salah satu jawaban terlebih dahulu!");
            return;
        }
        if (currentQuizIndex < quizData.length - 1) {
            currentQuizIndex++;
            renderQuizQuestion();
        } else {
            finishQuiz();
        }
    });

    document.getElementById("quiz-prev").addEventListener("click", () => {
        if (currentQuizIndex > 0) {
            currentQuizIndex--;
            renderQuizQuestion();
        }
    });

    document.getElementById("btn-repeat-quiz").addEventListener("click", () => {
        currentQuizIndex = 0;
        userAnswers = {};
        document.getElementById("quiz-result-view").classList.add("hidden");
        document.getElementById("quiz-container").classList.remove("hidden");
        renderQuizQuestion();
    });
}

function renderQuizQuestion() {
    const q = quizData[currentQuizIndex];
    document.getElementById("current-quiz-no").textContent = currentQuizIndex + 1;
    document.getElementById("quiz-question-text").textContent = q.question;

    const optContainer = document.getElementById("quiz-options-container");
    optContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "quiz-opt-btn";
        if (userAnswers[currentQuizIndex] === idx) {
            btn.classList.add("correct"); // tandai pilihan sebelumnya
        }
        btn.textContent = opt;
        btn.addEventListener("click", () => {
            userAnswers[currentQuizIndex] = idx;
            document.querySelectorAll(".quiz-opt-btn").forEach(b => b.classList.remove("correct"));
            btn.classList.add("correct");
        });
        optContainer.appendChild(btn);
    });

    document.getElementById("quiz-prev").style.display = currentQuizIndex === 0 ? "none" : "block";
    document.getElementById("quiz-next").textContent = currentQuizIndex === quizData.length - 1 ? "Selesaikan Kuis 🏁" : "Berikutnya ➡️";
}

function finishQuiz() {
    let correctCount = 0;
    quizData.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
            correctCount++;
        }
    });

    const wrongCount = quizData.length - correctCount;
    const finalScore = (correctCount / quizData.length) * 100;

    currentUser.quizScore = finalScore;
    saveLocalStorage();

    document.getElementById("quiz-container").classList.add("hidden");
    document.getElementById("quiz-result-view").classList.remove("hidden");

    document.getElementById("res-name").textContent = currentUser.name;
    document.getElementById("res-score").textContent = finalScore;
    document.getElementById("res-benar").textContent = correctCount;
    document.getElementById("res-salah").textContent = wrongCount;

    // Render Review List
    const reviewList = document.getElementById("quiz-review-list");
    reviewList.innerHTML = "";
    quizData.forEach((q, idx) => {
        const userAnsIdx = userAnswers[idx];
        const isTrue = userAnsIdx === q.answer;
        const div = document.createElement("div");
        div.style.marginBottom = "10px";
        div.style.padding = "8px";
        div.style.borderRadius = "6px";
        div.style.background = isTrue ? "#f0fdf4" : "#fef2f2";
        div.innerHTML = `<strong>Soal ${idx+1}:</strong> ${q.question}<br>
            <span style="color: ${isTrue ? '#16a34a' : '#dc2626'}">Jawaban Kamu: ${userAnsIdx !== undefined ? q.options[userAnsIdx] : 'Tidak dijawab'} (${isTrue ? 'Benar' : 'Salah'})</span><br>
            <small><strong>Pembahasan:</strong> ${q.explanation}</small>`;
        reviewList.appendChild(div);
    });
}
