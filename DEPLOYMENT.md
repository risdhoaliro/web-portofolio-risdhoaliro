# Panduan Deployment untuk SPA (Single Page Application)

## Masalah Routing pada SPA

Ketika deploy aplikasi React dengan React Router, Anda akan mengalami error 404 saat:
- Mengakses URL selain `/` secara langsung (misalnya `/articles`)
- Refresh halaman pada route selain `/`

**Penyebab:** Server mencoba mencari file fisik yang tidak ada, padahal routing dihandle oleh React Router di sisi client.

**Solusi:** Konfigurasi server untuk mengarahkan semua route ke `index.html`.

## Solusi Berdasarkan Platform Hosting

### 1. Netlify
Gunakan file `public/_redirects`:
```
/*    /index.html   200
```

### 2. Vercel
Gunakan file `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/((?!api/.*).*)",
      "destination": "/index.html"
    }
  ]
}
```

### 3. Apache Server
Gunakan file `public/.htaccess`:
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]
```

### 4. Nginx Server
Konfigurasi di `nginx.conf`:
```nginx
server {
    listen 80;
    server_name risdhoaliro.site;
    root /var/www/html;
    index index.html index.htm;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### 5. Firebase Hosting
Tambahkan di `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### 6. GitHub Pages
Buat file `public/404.html` yang identik dengan `index.html`:
```html
<!-- Copy seluruh konten dari index.html -->
```

## Langkah Deployment

1. **Build aplikasi:**
   ```bash
   npm run build
   ```

2. **Upload hasil build ke hosting:**
   - Untuk Netlify: Upload folder `dist/`
   - Untuk Vercel: Connect repository dan deploy otomatis
   - Untuk server sendiri: Upload folder `dist/` ke document root

3. **Pastikan file konfigurasi ada:**
   - Netlify: `_redirects` harus ada di folder `public/`
   - Vercel: `vercel.json` harus ada di root project
   - Apache: `.htaccess` harus ada di folder `public/`
   - Nginx: Update konfigurasi server

## Testing

Setelah deployment:
1. Akses website utama (contoh: `risdhoaliro.site`)
2. Navigasi ke `/articles` melalui menu
3. Refresh halaman - seharusnya tidak ada error 404
4. Akses `/articles` langsung di browser - seharusnya tidak ada error 404

## Troubleshooting

### Masih Error 404?
- Periksa apakah file konfigurasi ada di lokasi yang benar
- Untuk Netlify: `_redirects` harus ada di folder `public/`
- Untuk Apache: `.htaccess` harus ada di folder `public/`
- Restart server jika menggunakan Nginx atau Apache

### Cache Issue?
- Clear browser cache
- Gunakan incognito/private mode untuk testing
- Tunggu beberapa menit untuk propagasi CDN

### Masih Bermasalah?
- Periksa console browser untuk error
- Periksa network tab untuk melihat request yang gagal
- Pastikan routing di React Router sudah benar 