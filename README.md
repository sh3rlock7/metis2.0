# MetisOrigins – Kreative Weiterentwicklung

## 🧭 Übersicht

Diese Version ist Teil **2** der Aufgabe: *Kreative Weiterentwicklung*.

Ziel war es, die ursprüngliche Startseite von **metisorigins.com** weiterzuentwickeln –  
unter Beibehaltung der Markenidentität, jedoch mit moderneren Interaktionen, klarerer Struktur und einer verbesserten User Experience.

---

## ✨ Ziele der Weiterentwicklung

1. **Visuelle Dynamik** durch dezente Animationen und Bewegung
2. **Klarere Informationshierarchie** und bessere Leseführung
3. **Modernisierung der Navigation** (DrawerMenu mit Glassmorphism)
4. **Responsives, performantes Verhalten** auf allen Geräten

---

## 🧩 1. Interaktive Verbesserungen – Carousel für Testimonials

**Implementierung:**
Ein animiertes Carousel wurde für die Testimonials hinzugefügt.  
Die einzelnen Elemente erscheinen und verschwinden mit sanften Fade- und Slide-Effekten.

**Begründung:**
Die statische Darstellung der Kundenstimmen im Original wurde durch Bewegung aufgelockert.  
Dadurch entsteht:
- ein professionellerer, lebendiger Eindruck  
- mehr Dynamik im Scrollverlauf  
- und eine bessere Nutzung des verfügbaren Platzes, besonders auf mobilen Geräten.

> Ergebnis: Die Seite wirkt lebendig, ohne überladen zu sein.

---

## 🏗️ 2. Neustrukturierung der Inhalts-Hierarchie

**Änderung:**
Die Logos der *Partners* wurden aus dem Mittelteil in den Footer verschoben.

**Begründung:**
In der Originalversion unterbrachen die Partner-Logos die Hauptbotschaft der Seite.  
Durch die neue Anordnung ergibt sich eine klarere Informationsfolge:

1. Was MetisOrigins tut  
2. Wie es funktioniert / Mehrwert  
3. Mit wem es zusammenarbeitet

**Vorteile:**
- Klare inhaltliche Priorisierung  
- Flüssigerer Lesefluss  
- Verbesserte Nutzerführung, insbesondere auf mobilen Endgeräten

> Ergebnis: Der Fokus liegt auf der Kernleistung von MetisOrigins, nicht auf sekundären Elementen.

---

## 💎 3. Optimierung des DrawerMenus

**Neuerungen:**
Das ursprüngliche Menü wurde technisch und visuell überarbeitet:
- Hintergrund mit **Glassmorphism-Effekt** (transluzent, leicht unscharf)
- Verbesserter **Kontrast und Lesbarkeit** der Links
- Sanfte **Ein- und Ausblendanimationen** mit Framer Motion (`AnimatePresence`)

**Technische Details:**
- `backdrop-blur-xl` + `bg-gradient-to-br from-black/50 via-black/30 to-black/50`
- Übergänge mit `easeInOut` für natürliches Bewegungsverhalten
- Hover- und Tap-Interaktionen (`whileHover`, `whileTap`)

> Ergebnis: Ein elegantes, modernes Navigationsverhalten mit klarer UX.

---

## ⚙️ 4. Allgemeine Optimierungen

- Feintuning von **Abständen, Typografie und Responsivität**  
- Beibehaltung der **Originalfarbpalette** und Markenkohärenz  
- Optimierung der **Video-Preload-Logik** (ca. 10 Sekunden Vorpufferung)
- Verbesserung der **Performance** durch effiziente Animations- und Layoutstruktur

---

## 🌐 Ergebnis

Die Weiterentwicklung bleibt der visuellen Identität von **MetisOrigins** treu,  
zeigt jedoch eine modernere, flüssigere und benutzerfreundlichere Umsetzung.

**Kernverbesserungen:**
- Bessere Lesbarkeit und Struktur  
- Angenehme Mikrointeraktionen  
- Ästhetisch anspruchsvolle, aber performante Gestaltung  

> Die Seite wirkt professioneller, moderner und näher an der Design-Sprache von *metisOne*.

---

**Autor:** Kevin De Bonis 
**Projektphase:** Final Interview Task  
**Technologien:** Next.js, TypeScript, TailwindCSS, Framer Motion