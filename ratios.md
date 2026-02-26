# Image Ratios - Idika Website

This document lists all image aspect ratios used across the website, organized by page and section.

---

## Global Components

### Navigation
| Section | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Logo | Fixed size | `h-10` (40px height), width auto |

### Footer
| Section | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Logo | Fixed size | `h-12` (48px height), width auto |

---

## Home Page (`/`)

### Hero Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Background Image | **Full viewport** | `object-cover`, full width/height |
| Responsive sizes | 100vw | `sizes="100vw"` |

### 3D Dome / Intro Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Gallery Image | **1:1 (Square)** | `aspect-square` |
| Responsive sizes | 50vw on lg+ | `sizes="(max-width: 1024px) 0vw, 50vw"` |

### Interior Feature Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Feature Image | **4:5 (Portrait)** | `aspect-[4/5]` |

### Experience Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Left Image | **3:4 (Portrait)** | `aspect-[3/4]` |
| Right Image | **3:4 (Portrait)** | `aspect-[3/4]` |

---

## About Page (`/about`)

### Hero Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Background Image | **Full viewport (70vh)** | `object-cover`, full width, min-h-[70vh] |
| Responsive sizes | 100vw | `sizes="100vw"` |

### Story Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Story Image | **4:5 (Portrait)** | `aspect-[4/5]` |

---

## Rooms Page (`/rooms`)

### Hero Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Background Image | **60vh height** | `object-cover`, min-h-[60vh] |

### Room Cards (Desktop)
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Main Video/Image | **16:10 (Widescreen)** | `aspect-[16/10]` |
| Thumbnail Grid | **1:1 (Square)** | `aspect-square`, 6 images in row |

### Room Cards (Mobile/Tablet)
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Main Video/Image | **16:9 (Video)** | `aspect-video` |
| Thumbnail Grid | **1:1 (Square)** | `aspect-square`, 6 images in row |

---

## Gallery Page (`/gallery`)

### Hero Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| No background image | N/A | Gradient background only |

### Gallery Grid
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Grid Container | Fixed row height | `auto-rows-[280px]` |
| Landscape Images | **16:9** | `aspect-video` |
| Portrait Images | **3:4** | `aspect-[3/4]` |
| Square Images | **1:1** | `aspect-square` |

### Lightbox
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Full Image | **Natural/Contain** | `max-h-[70vh]`, `object-contain` |

---

## Experiences Page (`/experiences`)

### Hero Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Background Image | **60vh height** | `object-cover`, min-h-[60vh] |

### Carousel Cards
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Experience Image | **4:3** | `aspect-[4/3]` |
| Mobile max height | 400px | `max-h-[400px]` |
| Desktop max height | 500px | `max-h-[500px]` on md+ |

---

## Events Page (`/events`)

### Hero Section
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Background Image | **16:9 (70vh)** | Cloudinary: `ar_16:9`, min-h-[70vh] |

### Event Type Cards
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Card Thumbnail | **Fixed height** | `h-48` (~192px), object-cover |

### Event Venue Cards
| Element | Ratio | CSS Class / Style |
|---------|-------|-------------------|
| Venue Image | **Fixed height** | `h-64` (~256px), object-cover |

---

## Contact Page (`/contact`)

| Section | Images |
|---------|--------|
| All Sections | **No images** - Uses forms and icons only |

---

## Summary of Ratios Used

| Ratio | Usage |
|-------|-------|
| **1:1 (Square)** | Thumbnails, gallery grid squares, intro gallery |
| **3:4 (Portrait)** | Experience section images, gallery portraits |
| **4:5 (Portrait)** | Interior feature, about story section |
| **4:3 (Landscape)** | Experience carousel cards |
| **16:9 (Video)** | Mobile room cards, gallery landscapes |
| **16:10 (Widescreen)** | Desktop room card main image/video |
| **Full viewport** | Hero backgrounds (60vh-100vh) |
| **Fixed height** | Event cards (h-48, h-64), gallery grid rows (280px) |

---

## Notes

1. **Hero images** generally use full viewport coverage with `object-cover` to ensure no gaps
2. **Gallery images** use a fixed row height grid (280px) rather than strict aspect ratios
3. **Room cards** have different layouts for desktop (horizontal) vs mobile (vertical)
4. **Logo** uses fixed height with auto width to maintain proportions
5. All images use `object-cover` unless viewed in lightbox mode (`object-contain`)
6. Cloudinary transformations (`f_auto,q_auto`) are applied to optimize delivery
