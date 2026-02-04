# Frontend React - Authentication With JWT

Frontend application untuk Simple Auth API menggunakan JWT berbasis cookie.

Project ini menangani autentikasi user (login + protected route) menggunakan React dan terhubung ke backend Express.

---

## 🚀 Tech Stack

- **Backend API:** https://simple-auth-inky.vercel.app
- **Frontend :** https://simple-auth-react-rose.vercel.app/
- **Framework:** React (Vite)
- **Styling:** TailwindCSS
- **HTTP Client:** Axios
- **Routing:** react-router-dom

---

## ✨ Features

- Login Authentication
- JWT via HttpOnly Cookie
- Protected Route
- Dashboard Private Page
- Logout
- Responsive UI (TailwindCSS)

---

## 🔍 Explain

1. **Validasi Form Login**

Pada form login terdapat validasi bawaan HTML seperti pengecekan format email (`type="email"`) dan validasi field wajib (`required`). selain itu ada juga pengecekan validasi email di backend.
Jika user mengirim form dengan input kosong atau format email tidak valid, browser akan otomatis menampilkan peringatan.

Selain itu, ketika proses login gagal (misalnya email atau password salah), aplikasi akan menampilkan pesan error di bawah form login.

Setelah login berhasil, JWT akan disimpan oleh backend dalam bentuk **HttpOnly Cookie**.  
Cookie ini digunakan untuk autentikasi pada setiap request berikutnya.

---

2. **Protected Route**

Untuk menjaga halaman utama (Dashboard), aplikasi menggunakan **Protected Route** dan **Auth Context**.

Saat user mengakses halaman Dashboard, frontend akan melakukan pengecekan autentikasi dengan memanggil endpoint backend.  
Jika token di cookie tidak ada atau tidak valid, user otomatis diarahkan kembali ke halaman Login.

Hal ini memastikan hanya user yang sudah login yang dapat mengakses halaman utama.

---

3. **Axios Configuration**

Axios dikonfigurasi dengan opsi `withCredentials: true` agar cookie JWT otomatis ikut terkirim pada setiap request ke backend.

Dengan konfigurasi ini, frontend tidak perlu menyimpan token secara manual dan seluruh proses autentikasi berbasis cookie.

---

4. **Logout**

Saat user melakukan logout, frontend akan memanggil endpoint logout pada backend.  
Backend kemudian menghapus JWT yang tersimpan di cookie.

Setelah itu user diarahkan kembali ke halaman Login dan tidak dapat mengakses Dashboard sebelum melakukan login ulang.

## 🛠️ Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/IbnuHs/Simple-Login-Protected-Route.git

```

### 2. Install Dependensi

```bash
npm Install
```

### 3. Jalankan Backend Express

```
jalankan backend API Express yang akan di gunakan
```

### 4 Jalankan

```
npm run dev
Frontend Akan berjalan di http://localhost:5173
```

## 📸 Screenshots

### Login Page

![Login](assets/loginpage-desktop.png)
![Login](assets/loginpage-mobile.png)

### HomePage

![Homepage](assets/homepage-desktop.png)
![Homepage](assets/homepage-mobile.png)
![Sidebar](assets/sidebar-mobile.png)
