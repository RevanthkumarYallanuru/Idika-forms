# Rooms Data Update Guide

## 1. Images - Local vs URL Links

**Both approaches work!** Here's how:

### Option A: URL Links (Current approach in siteData.ts)
```typescript
images: [
  { src: "https://images.unsplash.com/photo-587061949409...", alt: "..." }
]
```
✅ Works directly, no imports needed  
✅ Best for CDN-hosted images (jsDelivr, Cloudinary, etc.)

### Option B: Local Images (Import approach)
```typescript
// At the top of siteData.ts
import room1Image1 from "@/assets/rooms/room1-1.jpg";
import room1Image2 from "@/assets/rooms/room1-2.jpg";

// Then in the data
images: [
  { src: room1Image1, alt: "..." },
  { src: room1Image2, alt: "..." }
]
```
✅ Works perfectly  
⚠️ Images get bundled into your build (increases bundle size)  
⚠️ Need to import each image individually

**Recommendation**: For production, use **CDN links** (jsDelivr from GitHub as per implementation plan) for better performance and smaller bundle size.

---

## 2. YouTube Videos - How the ID Works

The `youtubeVideoId` is extracted from a YouTube URL:

| Full YouTube URL | Video ID |
|------------------|----------|
| `https://www.youtube.com/watch?v=dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| `https://youtu.be/dQw4w9WgXcQ` | `dQw4w9WgXcQ` |
| `https://www.youtube.com/embed/dQw4w9WgXcQ` | `dQw4w9WgXcQ` |

**To replace with your videos:**

1. Go to your YouTube video
2. Copy the URL, e.g., `https://www.youtube.com/watch?v=ABC123XYZ`
3. Extract the ID: `ABC123XYZ` (the part after `v=` or after `youtu.be/`)
4. Replace in siteData.ts:

```typescript
youtubeVideoId: "ABC123XYZ",  // Your video ID here
```

The code in RoomCard.tsx builds the full embed URL automatically:
```typescript
src={`https://www.youtube.com/embed/${room.youtubeVideoId}?autoplay=1&mute=1...`}
```

---

## 3. Current Room Video IDs to Replace

| Room | Current Video ID | Replace With |
|------|------------------|--------------|
| The Sun-Drenched Dome | `dQw4w9WgXcQ` | Your video ID |
| The Forest Whisper | `5qap5aO4i9A` | Your video ID |
| The Horizon Dome | `lTxn2BuqyzU` | Your video ID |
| The Wellness Sanctuary | `inpok4MKVLM` | Your video ID |
| The Family Gathering | `L_LUpnjgPso` | Your video ID |

---

## 4. Quick Reference - siteData.ts Line Numbers

- Room 1 (Sun-Drenched): Lines 136-180
- Room 2 (Forest Whisper): Lines 181-225
- Room 3 (Horizon Dome): Lines 226-270
- Room 4 (Wellness Sanctuary): Lines 271-315
- Room 5 (Family Gathering): Lines 316-360

---

## Summary

- **Images**: Use URL links for production (CDN), or import locally for development
- **YouTube**: Just paste the video ID (the 11-character code from your YouTube URL)
