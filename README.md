# Amila Ishara ICT - Simple Landing Page

A fast, modern React landing page featuring a hero image display and an interactive YouTube channel/video button.

---

## 🚀 How to Run Locally

1. Open your terminal in this folder:
   ```bash
   cd c:\xampp\htdocs\amila-ishara-ict
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open the displayed local URL (typically `http://localhost:5173`) in your browser.

---

## 🖼️ How to Add Your Image

1. Copy your image file (e.g., `my-image.jpg` or `hero.jpg`) into the **`public/`** folder:
   ```
   public/
   ├── hero.jpg     <--- Place your image here
   └── ...
   ```
2. Open **`src/App.jsx`**.
3. In the `CONFIG` section at the top, update `imageSrc` to your image name:
   ```javascript
   const CONFIG = {
     imageSrc: "/hero.jpg", // or whatever you named your file
     // ...
   }
   ```
4. Save the file. The browser will update immediately!

> **Note:** If the image is not found or fails to load, a helpful placeholder box will automatically guide you on where to put it.

---

## 🎥 How to Change the YouTube Link

1. Open **`src/App.jsx`**.
2. Find the `CONFIG` object near line 9:
   ```javascript
   const CONFIG = {
     // Replace with your YouTube video or channel URL:
     youtubeUrl: "https://www.youtube.com/@AmilaIsharaICT",
     
     // Customize button labels:
     youtubeButtonText: "Watch on YouTube",
     youtubeSecondaryText: "Click to open channel in a new tab",
   };
   ```
3. Save the file.

---

## 📦 How to Build for Production

To create a static production build (which you can deploy anywhere or serve directly with Apache / XAMPP):

```bash
npm run build
```

This generates an optimized static website in the `dist/` folder.
