import React, { useEffect, useMemo, useRef } from "react";
import styles from "./LandingGimmick.module.css";

function spansFromText(text: string, container: HTMLElement, letterClass: string) {
  container.innerHTML = "";
  const spans: HTMLSpanElement[] = [];
  for (const ch of [...text]) {
    const s = document.createElement("span");
    s.className = `${styles.litLayerLetter} ${letterClass}`;
    s.textContent = ch === " " ? "\u00A0" : ch;
    container.appendChild(s);
    spans.push(s);
  }
  return spans;
}

export function LandingGimmick() {
  const rootRef = useRef<HTMLDivElement>(null);

  const seaRef = useRef<HTMLCanvasElement>(null);
  const beamRef = useRef<HTMLCanvasElement>(null);

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  const eyebrowLitRef = useRef<HTMLSpanElement>(null);
  const titleLit1Ref = useRef<HTMLSpanElement>(null);
  const titleLit2Ref = useRef<HTMLSpanElement>(null);

  const envSvgMarkup = useMemo(() => {
    // Your original SVG exactly as-is (kept as HTML to avoid converting every attribute to JSX)
    return `
<svg id="env-svg" viewBox="0 0 1440 780" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
  <defs>
    <pattern id="ch-diag"  patternUnits="userSpaceOnUse" width="5"  height="5"  patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="5" stroke="rgba(240,237,232,0.22)" stroke-width="0.65"/>
    </pattern>
    <pattern id="ch-diag2" patternUnits="userSpaceOnUse" width="4"  height="4"  patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="4" stroke="rgba(240,237,232,0.30)" stroke-width="0.7"/>
    </pattern>
    <pattern id="ch-horiz" patternUnits="userSpaceOnUse" width="5"  height="4">
      <line x1="0" y1="2" x2="5" y2="2" stroke="rgba(240,237,232,0.18)" stroke-width="0.55"/>
    </pattern>
    <pattern id="ch-stone" patternUnits="userSpaceOnUse" width="9"  height="9"  patternTransform="rotate(12)">
      <line x1="0" y1="2" x2="4" y2="2" stroke="rgba(240,237,232,0.16)" stroke-width="0.5"/>
      <line x1="5" y1="7" x2="9" y2="7" stroke="rgba(240,237,232,0.14)" stroke-width="0.5"/>
      <line x1="2" y1="0" x2="2" y2="4" stroke="rgba(240,237,232,0.10)" stroke-width="0.4"/>
    </pattern>
    <pattern id="ch-rock"  patternUnits="userSpaceOnUse" width="7"  height="7"  patternTransform="rotate(22)">
      <line x1="0" y1="3" x2="7" y2="3" stroke="rgba(240,237,232,0.14)" stroke-width="0.5"/>
      <line x1="3" y1="0" x2="3" y2="7" stroke="rgba(240,237,232,0.10)" stroke-width="0.4"/>
    </pattern>
    <pattern id="ch-water" patternUnits="userSpaceOnUse" width="18" height="6">
      <path d="M0 3 Q4.5 1 9 3 Q13.5 5 18 3" fill="none" stroke="rgba(240,237,232,0.15)" stroke-width="0.6"/>
    </pattern>
    <pattern id="ch-dense" patternUnits="userSpaceOnUse" width="3"  height="3"  patternTransform="rotate(45)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="rgba(240,237,232,0.28)" stroke-width="0.6"/>
    </pattern>
  </defs>

  <!-- ═══════════════════════════════════════════════════
       LIGHTHOUSE — top-right, translate(1290, 0)
       Lantern centre in SVG space: (1360, 74)
       ═══════════════════════════════════════════════════ -->
  <g transform="translate(1290, 0)">
    <!-- Keeper's cottage -->
    <rect x="14" y="338" width="112" height="58" fill="none" stroke="rgba(240,237,232,0.55)" stroke-width="0.8"/>
    <rect x="14" y="338" width="112" height="58" fill="url(#ch-stone)" opacity="0.9"/>
    <rect x="98" y="338" width="28"  height="58" fill="url(#ch-diag2)" opacity="0.55"/>
    <rect x="12" y="334" width="116" height="6"  fill="none" stroke="rgba(240,237,232,0.45)" stroke-width="0.7"/>
    <rect x="18"  y="330" width="10" height="5" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <rect x="34"  y="330" width="10" height="5" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <rect x="96"  y="330" width="10" height="5" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <rect x="112" y="330" width="10" height="5" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <!-- Cottage windows -->
    <rect x="20" y="350" width="22" height="16" fill="none" stroke="rgba(240,237,232,0.5)" stroke-width="0.7"/>
    <line x1="31" y1="350" x2="31" y2="366" stroke="rgba(240,237,232,0.25)" stroke-width="0.5"/>
    <line x1="20" y1="358" x2="42" y2="358" stroke="rgba(240,237,232,0.25)" stroke-width="0.5"/>
    <rect x="19" y="366" width="24" height="2" fill="none" stroke="rgba(240,237,232,0.3)" stroke-width="0.4"/>
    <rect x="20" y="350" width="22" height="16" fill="url(#ch-horiz)" opacity="0.5"/>
    <rect x="98" y="350" width="22" height="16" fill="none" stroke="rgba(240,237,232,0.5)" stroke-width="0.7"/>
    <line x1="109" y1="350" x2="109" y2="366" stroke="rgba(240,237,232,0.25)" stroke-width="0.5"/>
    <line x1="98"  y1="358" x2="120" y2="358" stroke="rgba(240,237,232,0.25)" stroke-width="0.5"/>
    <rect x="97" y="366" width="24" height="2" fill="none" stroke="rgba(240,237,232,0.3)" stroke-width="0.4"/>
    <rect x="98" y="350" width="22" height="16" fill="url(#ch-horiz)" opacity="0.5"/>
    <!-- Door -->
    <path d="M61 396 L61 375 Q70 367 79 375 L79 396 Z" fill="none" stroke="rgba(240,237,232,0.48)" stroke-width="0.7"/>
    <rect x="63" y="383" width="6" height="7" fill="none" stroke="rgba(240,237,232,0.22)" stroke-width="0.4"/>
    <rect x="71" y="383" width="6" height="7" fill="none" stroke="rgba(240,237,232,0.22)" stroke-width="0.4"/>
    <rect x="63" y="376" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.22)" stroke-width="0.4"/>
    <rect x="71" y="376" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.22)" stroke-width="0.4"/>
    <circle cx="77" cy="386" r="1.2" fill="rgba(240,237,232,0.6)"/>
    <rect x="58" y="395" width="24" height="3" fill="none" stroke="rgba(240,237,232,0.35)" stroke-width="0.5"/>
    <!-- Quoins -->
    <rect x="14" y="338" width="6" height="5"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="14" y="348" width="6" height="5"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="14" y="358" width="6" height="5"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="14" y="368" width="6" height="5"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="14" y="378" width="6" height="5"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="14" y="388" width="6" height="5"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="120" y="338" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="120" y="348" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="120" y="358" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="120" y="368" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="120" y="378" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <rect x="120" y="388" width="6" height="5" fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.4"/>
    <!-- Plinth -->
    <rect x="44" y="318" width="52" height="22" fill="none" stroke="rgba(240,237,232,0.45)" stroke-width="0.7"/>
    <rect x="44" y="318" width="52" height="22" fill="url(#ch-stone)" opacity="0.8"/>
    <rect x="76" y="318" width="20" height="22" fill="url(#ch-diag2)" opacity="0.45"/>
    <line x1="44" y1="323" x2="96" y2="323" stroke="rgba(240,237,232,0.22)" stroke-width="0.5"/>
    <line x1="44" y1="334" x2="96" y2="334" stroke="rgba(240,237,232,0.22)" stroke-width="0.5"/>
    <!-- Tower body -->
    <path d="M48 318 L46 110 L94 110 L92 318 Z" fill="none" stroke="rgba(240,237,232,0.52)" stroke-width="0.75"/>
    <path d="M75 318 L74 110 L94 110 L92 318 Z" fill="url(#ch-diag)" opacity="0.7"/>
    <path d="M48 318 L46 110 L94 110 L92 318 Z" fill="url(#ch-stone)" opacity="0.55"/>
    <!-- Horizontal bands -->
    <path d="M46.4 142 L93.6 142 L93.6 148 L46.4 148 Z" fill="url(#ch-diag)" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
    <path d="M47   170 L93   170 L93   175 L47   175 Z" fill="url(#ch-diag)" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
    <path d="M47.4 198 L92.6 198 L92.6 203 L47.4 203 Z" fill="url(#ch-diag)" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
    <path d="M47.8 226 L92.2 226 L92.2 231 L47.8 231 Z" fill="url(#ch-diag)" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
    <path d="M48.2 254 L91.8 254 L91.8 259 L48.2 259 Z" fill="url(#ch-diag)" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
    <path d="M48.6 282 L91.4 282 L91.4 287 L48.6 287 Z" fill="url(#ch-diag)" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
    <path d="M49   310 L91   310 L91   315 L49   315 Z" fill="url(#ch-diag)" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
    <!-- Tower windows -->
    <path d="M59 297 L59 283 Q70 276 81 283 L81 297 Z" fill="none" stroke="rgba(240,237,232,0.45)" stroke-width="0.65"/>
    <line x1="70" y1="276" x2="70" y2="297" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <line x1="59" y1="287" x2="81" y2="287" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <rect x="57" y="297" width="26" height="2" fill="none" stroke="rgba(240,237,232,0.3)" stroke-width="0.4"/>
    <path d="M60 241 L60 228 Q70 221 80 228 L80 241 Z" fill="none" stroke="rgba(240,237,232,0.45)" stroke-width="0.65"/>
    <line x1="70" y1="221" x2="70" y2="241" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <line x1="60" y1="234" x2="80" y2="234" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <rect x="58" y="241" width="24" height="2" fill="none" stroke="rgba(240,237,232,0.3)" stroke-width="0.4"/>
    <path d="M61 185 L61 173 Q70 166 79 173 L79 185 Z" fill="none" stroke="rgba(240,237,232,0.45)" stroke-width="0.65"/>
    <line x1="70" y1="166" x2="70" y2="185" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <line x1="61" y1="179" x2="79" y2="179" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <rect x="59" y="185" width="22" height="2" fill="none" stroke="rgba(240,237,232,0.3)" stroke-width="0.4"/>
    <path d="M62 129 L62 118 Q70 111 78 118 L78 129 Z" fill="none" stroke="rgba(240,237,232,0.45)" stroke-width="0.65"/>
    <line x1="70" y1="111" x2="70" y2="129" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <line x1="62" y1="123" x2="78" y2="123" stroke="rgba(240,237,232,0.2)" stroke-width="0.4"/>
    <rect x="60" y="129" width="20" height="2" fill="none" stroke="rgba(240,237,232,0.3)" stroke-width="0.4"/>
    <!-- Corbels + gallery rail -->
    <path d="M44 110 Q46 106 50 104 L50 110 Z" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <path d="M96 110 Q94 106 90 104 L90 110 Z" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <path d="M55 110 Q56 106 59 104 L59 110 Z" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <path d="M85 110 Q84 106 81 104 L81 110 Z" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.5"/>
    <rect x="40" y="106" width="60" height="5" fill="url(#ch-dense)" stroke="rgba(240,237,232,0.48)" stroke-width="0.7" opacity="0.6"/>
    <line x1="42" y1="106" x2="42" y2="92" stroke="rgba(240,237,232,0.5)"  stroke-width="0.7"/>
    <line x1="47" y1="106" x2="47" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="52" y1="106" x2="52" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="57" y1="106" x2="57" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="62" y1="106" x2="62" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="67" y1="106" x2="67" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="73" y1="106" x2="73" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="78" y1="106" x2="78" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="83" y1="106" x2="83" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="88" y1="106" x2="88" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="93" y1="106" x2="93" y2="92" stroke="rgba(240,237,232,0.38)" stroke-width="0.55"/>
    <line x1="98" y1="106" x2="98" y2="92" stroke="rgba(240,237,232,0.5)"  stroke-width="0.7"/>
    <line x1="42" y1="92" x2="98" y2="92" stroke="rgba(240,237,232,0.58)"  stroke-width="0.85"/>
    <line x1="42" y1="99" x2="98" y2="99" stroke="rgba(240,237,232,0.38)"  stroke-width="0.55"/>
    <!-- Lantern room -->
    <path d="M52 92 L52 60 L58 56 L82 56 L88 60 L88 92 Z" fill="none" stroke="rgba(240,237,232,0.55)" stroke-width="0.75"/>
    <line x1="61" y1="56" x2="61" y2="92" stroke="rgba(240,237,232,0.28)" stroke-width="0.55"/>
    <line x1="70" y1="56" x2="70" y2="92" stroke="rgba(240,237,232,0.28)" stroke-width="0.55"/>
    <line x1="79" y1="56" x2="79" y2="92" stroke="rgba(240,237,232,0.28)" stroke-width="0.55"/>
    <line x1="52" y1="74" x2="88" y2="74" stroke="rgba(240,237,232,0.22)" stroke-width="0.5"/>
    <path d="M52 92 L52 60 L58 56 L82 56 L88 60 L88 92 Z" fill="url(#ch-horiz)" opacity="0.4"/>
    <path d="M52 60 L58 56 L82 56 L88 60" fill="none" stroke="rgba(240,237,232,0.48)" stroke-width="1.2"/>
    <!-- Dome -->
    <rect x="50" y="52" width="40" height="5"  fill="url(#ch-diag2)" stroke="rgba(240,237,232,0.48)" stroke-width="0.7" opacity="0.7"/>
    <path d="M52 52 Q53 38 70 32 Q87 38 88 52 Z" fill="none" stroke="rgba(240,237,232,0.55)" stroke-width="0.75"/>
    <path d="M70 32 Q62 38 52 52" fill="none" stroke="rgba(240,237,232,0.22)" stroke-width="0.5"/>
    <path d="M70 32 Q70 38 70 52" fill="none" stroke="rgba(240,237,232,0.22)" stroke-width="0.5"/>
    <path d="M70 32 Q78 38 88 52" fill="none" stroke="rgba(240,237,232,0.22)" stroke-width="0.5"/>
    <path d="M70 32 Q78 38 88 52 L76 52 Q74 40 70 34 Z" fill="url(#ch-diag2)" opacity="0.45"/>
    <!-- Finial -->
    <rect x="68" y="24" width="4"  height="10" fill="none" stroke="rgba(240,237,232,0.48)" stroke-width="0.6"/>
    <rect x="66" y="29" width="8"  height="2"  fill="none" stroke="rgba(240,237,232,0.42)" stroke-width="0.55"/>
    <circle cx="70" cy="20" r="7"  fill="none" stroke="rgba(240,237,232,0.58)" stroke-width="0.85"/>
    <path d="M70 13 A7 7 0 0 1 77 20 A7 7 0 0 1 70 27 Z" fill="url(#ch-diag2)" opacity="0.5"/>
    <path d="M65 16 Q68 13 72 14" fill="none" stroke="rgba(240,237,232,0.3)" stroke-width="0.6"/>
    <line x1="70" y1="13" x2="70" y2="6"  stroke="rgba(240,237,232,0.62)" stroke-width="0.75"/>
    <line x1="68" y1="8"  x2="72" y2="8"  stroke="rgba(240,237,232,0.45)" stroke-width="0.5"/>
    <!-- Lamp glow mark -->
    <circle cx="70" cy="74" r="3.5" fill="rgba(240,237,232,0.12)" stroke="rgba(240,237,232,0.25)" stroke-width="0.6"/>
    <circle cx="70" cy="74" r="1.8" fill="rgba(240,237,232,0.4)"/>
    <!-- Outer silhouette contour -->
    <path d="M48 318 L46 110 L52 92 L52 60 L58 56 L82 56 L88 60 L88 92 L94 110 L92 318" fill="none" stroke="rgba(240,237,232,0.62)" stroke-width="1.0" stroke-linejoin="round"/>
  </g>

  <!-- ═══════════════════════════════════════════════════
       CLIFF HEADLAND — rises from x≈960 to right edge
       Connects shore level (~y=595) to lighthouse base (y≈396)
       ═══════════════════════════════════════════════════ -->
  <!-- Main cliff mass -->
  <path d="M 960 595
           L 985 578 L 1010 560 L 1030 572 L 1055 548
           L 1080 530 L 1108 512 L 1135 494
           L 1160 475 L 1188 457 L 1215 440
           L 1242 422 L 1265 408 L 1286 398
           L 1304 396 L 1440 396
           L 1440 780 L 960 780 Z"
    fill="none" stroke="rgba(240,237,232,0.42)" stroke-width="0.9"/>
  <path d="M 960 595
           L 985 578 L 1010 560 L 1030 572 L 1055 548
           L 1080 530 L 1108 512 L 1135 494
           L 1160 475 L 1188 457 L 1215 440
           L 1242 422 L 1265 408 L 1286 398
           L 1304 396 L 1440 396
           L 1440 780 L 960 780 Z"
    fill="url(#ch-rock)" opacity="0.7"/>
  <!-- Shadow/depth layer -->
  <path d="M 975 780 L 975 592
           L 1000 574 L 1025 556 L 1045 568 L 1070 544
           L 1095 526 L 1122 508 L 1150 490
           L 1175 471 L 1202 453 L 1228 436
           L 1255 418 L 1278 404
           L 1304 396 L 1440 396 L 1440 780 Z"
    fill="url(#ch-diag)" opacity="0.32"/>
  <!-- Cliff strata (horizontal dashed lines) -->
  <line x1="980"  y1="620" x2="1440" y2="620" stroke="rgba(240,237,232,0.13)" stroke-width="0.5" stroke-dasharray="10,7"/>
  <line x1="975"  y1="655" x2="1440" y2="655" stroke="rgba(240,237,232,0.11)" stroke-width="0.5" stroke-dasharray="12,8"/>
  <line x1="972"  y1="690" x2="1440" y2="690" stroke="rgba(240,237,232,0.10)" stroke-width="0.5" stroke-dasharray="14,9"/>
  <line x1="970"  y1="728" x2="1440" y2="728" stroke="rgba(240,237,232,0.09)" stroke-width="0.5" stroke-dasharray="16,11"/>
  <!-- Cliff fissures -->
  <path d="M 1040 565 Q 1033 600 1040 635 Q 1035 665 1042 698" fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.6"/>
  <path d="M 1120 510 Q 1113 545 1118 578 Q 1112 610 1118 640" fill="none" stroke="rgba(240,237,232,0.13)" stroke-width="0.5"/>
  <path d="M 1210 448 Q 1204 480 1209 510 Q 1202 540 1208 568" fill="none" stroke="rgba(240,237,232,0.12)" stroke-width="0.45"/>
  <path d="M 1260 415 Q 1255 445 1260 472 Q 1253 500 1258 525" fill="none" stroke="rgba(240,237,232,0.12)" stroke-width="0.45"/>

  <!-- ═══════════════════════════════════════════════════
       GROUND LINE — flat shore from left to cliff base
       ═══════════════════════════════════════════════════ -->
  <path d="M 0 592 Q 120 588 240 592 Q 380 586 520 590 Q 660 583 800 588 Q 880 585 960 595"
    fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.8"/>
  <!-- Ground hatching beneath -->
  <path d="M 0 592 Q 120 588 240 592 Q 380 586 520 590 Q 660 583 800 588 Q 880 585 960 595 L 960 620 L 0 620 Z"
    fill="url(#ch-diag)" opacity="0.3"/>

  <!-- ═══════════════════════════════════════════════════
       SEA — horizon + wave lines + reflection column
       Sea spans from left edge to where cliff begins (~x=960)
       ═══════════════════════════════════════════════════ -->
  <!-- Horizon line -->
  <line x1="0" y1="485" x2="960" y2="478" stroke="rgba(240,237,232,0.22)" stroke-width="0.7"/>
  <!-- Sea fill (horizon → shore) -->
  <path d="M 0 485 Q 160 480 320 484 Q 480 478 640 482 Q 800 476 960 478
           L 960 595 Q 800 588 640 592 Q 480 586 320 590 Q 160 587 0 592 Z"
    fill="url(#ch-water)" opacity="0.65"/>
  <!-- Wave crests -->
  <path d="M  20 496 Q  80 493 140 496 Q 200 493 260 496 Q 320 493 380 496" fill="none" stroke="rgba(240,237,232,0.20)" stroke-width="0.55"/>
  <path d="M  60 506 Q 140 503 220 506 Q 300 503 380 506 Q 460 503 540 506" fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.5"/>
  <path d="M   0 516 Q 100 513 200 516 Q 300 513 400 516 Q 500 513 600 516 Q 700 512 800 515 Q 880 512 960 514" fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.5"/>
  <path d="M  30 527 Q 150 524 280 527 Q 410 523 540 527 Q 660 523 780 526 Q 870 523 955 525" fill="none" stroke="rgba(240,237,232,0.15)" stroke-width="0.45"/>
  <path d="M   0 538 Q 130 535 260 538 Q 400 534 540 538 Q 680 534 820 537 Q 900 534 960 536" fill="none" stroke="rgba(240,237,232,0.14)" stroke-width="0.45"/>
  <path d="M  10 549 Q 160 546 310 549 Q 460 546 610 549 Q 760 545 900 548 Q 932 546 960 547" fill="none" stroke="rgba(240,237,232,0.13)" stroke-width="0.4"/>
  <path d="M   0 560 Q 160 557 320 560 Q 490 557 650 560 Q 810 557 960 559" fill="none" stroke="rgba(240,237,232,0.12)" stroke-width="0.4"/>
  <path d="M   0 571 Q 180 568 360 571 Q 540 568 720 571 Q 860 568 960 570" fill="none" stroke="rgba(240,237,232,0.11)" stroke-width="0.35"/>
  <path d="M   0 581 Q 200 578 400 581 Q 600 578 800 581 Q 900 578 960 580" fill="none" stroke="rgba(240,237,232,0.10)" stroke-width="0.35"/>
  <!-- Light reflection column below lighthouse (approx x=680–700 in 1440 wide scene, scaled from right) -->
  <line x1="698" y1="485" x2="692" y2="500" stroke="rgba(240,237,232,0.22)" stroke-width="0.6"/>
  <line x1="703" y1="502" x2="696" y2="516" stroke="rgba(240,237,232,0.18)" stroke-width="0.55"/>
  <line x1="694" y1="518" x2="700" y2="532" stroke="rgba(240,237,232,0.15)" stroke-width="0.5"/>
  <line x1="688" y1="534" x2="695" y2="546" stroke="rgba(240,237,232,0.12)" stroke-width="0.45"/>
  <line x1="692" y1="549" x2="698" y2="560" stroke="rgba(240,237,232,0.10)" stroke-width="0.4"/>

  <!-- ═══════════════════════════════════════════════════
       ROCKY SHORE — boulders across the full shore width
       ═══════════════════════════════════════════════════ -->
  <!-- Shore ground mass -->
  <path d="M 0 610 Q 60 603 120 608 Q 200 600 300 605 Q 400 598 520 604 Q 640 597 760 603 Q 860 597 960 605 L 960 780 L 0 780 Z"
    fill="url(#ch-diag)" opacity="0.25"/>
  <path d="M 0 610 Q 60 603 120 608 Q 200 600 300 605 Q 400 598 520 604 Q 640 597 760 603 Q 860 597 960 605
           L 960 618 Q 860 612 760 618 Q 640 611 520 618 Q 400 611 300 618 Q 200 612 120 620 Q 60 614 0 620 Z"
    fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.7"/>

  <!-- Left cluster boulders -->
  <ellipse cx="48"  cy="604" rx="30" ry="17" fill="none" stroke="rgba(240,237,232,0.40)" stroke-width="0.75"/>
  <ellipse cx="48"  cy="604" rx="30" ry="17" fill="url(#ch-diag2)" opacity="0.42"/>
  <path d="M 30 600 Q 48 595 66 600" fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.5"/>
  <ellipse cx="90"  cy="600" rx="20" ry="13" fill="none" stroke="rgba(240,237,232,0.36)" stroke-width="0.7"/>
  <ellipse cx="90"  cy="600" rx="20" ry="13" fill="url(#ch-rock)" opacity="0.48"/>
  <ellipse cx="22"  cy="614" rx="16" ry="9"  fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
  <ellipse cx="22"  cy="614" rx="16" ry="9"  fill="url(#ch-diag)" opacity="0.38"/>
  <ellipse cx="118" cy="606" rx="12" ry="7"  fill="none" stroke="rgba(240,237,232,0.30)" stroke-width="0.55"/>
  <!-- Pebbles near left cluster -->
  <ellipse cx="70"  cy="618" rx="5" ry="3"   fill="none" stroke="rgba(240,237,232,0.20)" stroke-width="0.4"/>
  <ellipse cx="100" cy="615" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.4"/>
  <ellipse cx="132" cy="618" rx="3" ry="2"   fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.4"/>

  <!-- Centre-left cluster -->
  <ellipse cx="240" cy="598" rx="34" ry="19" fill="none" stroke="rgba(240,237,232,0.40)" stroke-width="0.75"/>
  <ellipse cx="240" cy="598" rx="34" ry="19" fill="url(#ch-stone)" opacity="0.52"/>
  <path d="M 218 594 Q 240 589 262 594" fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.45"/>
  <ellipse cx="285" cy="602" rx="22" ry="13" fill="none" stroke="rgba(240,237,232,0.36)" stroke-width="0.65"/>
  <ellipse cx="285" cy="602" rx="22" ry="13" fill="url(#ch-diag)" opacity="0.38"/>
  <ellipse cx="205" cy="606" rx="18" ry="10" fill="none" stroke="rgba(240,237,232,0.33)" stroke-width="0.6"/>
  <ellipse cx="160" cy="609" rx="11" ry="6"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.55"/>
  <ellipse cx="318" cy="605" rx="9"  ry="5"  fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.5"/>
  <!-- Pebbles near centre-left -->
  <ellipse cx="178" cy="618" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.4"/>
  <ellipse cx="220" cy="620" rx="3" ry="2"   fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.4"/>
  <ellipse cx="262" cy="618" rx="5" ry="3"   fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.4"/>
  <ellipse cx="305" cy="616" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.4"/>

  <!-- Centre cluster -->
  <ellipse cx="460" cy="594" rx="36" ry="20" fill="none" stroke="rgba(240,237,232,0.38)" stroke-width="0.75"/>
  <ellipse cx="460" cy="594" rx="36" ry="20" fill="url(#ch-diag2)" opacity="0.42"/>
  <path d="M 436 590 Q 460 585 484 590" fill="none" stroke="rgba(240,237,232,0.17)" stroke-width="0.45"/>
  <ellipse cx="508" cy="599" rx="24" ry="14" fill="none" stroke="rgba(240,237,232,0.35)" stroke-width="0.65"/>
  <ellipse cx="508" cy="599" rx="24" ry="14" fill="url(#ch-rock)" opacity="0.45"/>
  <ellipse cx="418" cy="603" rx="20" ry="11" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.6"/>
  <ellipse cx="360" cy="607" rx="13" ry="7"  fill="none" stroke="rgba(240,237,232,0.28)" stroke-width="0.55"/>
  <ellipse cx="540" cy="603" rx="10" ry="6"  fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.5"/>
  <!-- Pebbles near centre -->
  <ellipse cx="380" cy="618" rx="5" ry="3"   fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.4"/>
  <ellipse cx="432" cy="620" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.4"/>
  <ellipse cx="488" cy="617" rx="3" ry="2"   fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.4"/>
  <ellipse cx="528" cy="615" rx="5" ry="3"   fill="none" stroke="rgba(240,237,232,0.17)" stroke-width="0.4"/>

  <!-- Centre-right cluster -->
  <ellipse cx="680" cy="596" rx="32" ry="18" fill="none" stroke="rgba(240,237,232,0.37)" stroke-width="0.72"/>
  <ellipse cx="680" cy="596" rx="32" ry="18" fill="url(#ch-stone)" opacity="0.48"/>
  <ellipse cx="724" cy="600" rx="20" ry="12" fill="none" stroke="rgba(240,237,232,0.33)" stroke-width="0.62"/>
  <ellipse cx="724" cy="600" rx="20" ry="12" fill="url(#ch-diag)" opacity="0.38"/>
  <ellipse cx="638" cy="605" rx="16" ry="9"  fill="none" stroke="rgba(240,237,232,0.30)" stroke-width="0.58"/>
  <ellipse cx="596" cy="608" rx="11" ry="6"  fill="none" stroke="rgba(240,237,232,0.27)" stroke-width="0.52"/>
  <ellipse cx="752" cy="604" rx="8"  ry="5"  fill="none" stroke="rgba(240,237,232,0.25)" stroke-width="0.48"/>
  <!-- Pebbles near centre-right -->
  <ellipse cx="612" cy="618" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.17)" stroke-width="0.4"/>
  <ellipse cx="656" cy="620" rx="3" ry="2"   fill="none" stroke="rgba(240,237,232,0.15)" stroke-width="0.4"/>
  <ellipse cx="705" cy="617" rx="5" ry="3"   fill="none" stroke="rgba(240,237,232,0.17)" stroke-width="0.4"/>
  <ellipse cx="742" cy="615" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.15)" stroke-width="0.4"/>

  <!-- Right cluster (near cliff base) -->
  <ellipse cx="870" cy="598" rx="28" ry="16" fill="none" stroke="rgba(240,237,232,0.36)" stroke-width="0.7"/>
  <ellipse cx="870" cy="598" rx="28" ry="16" fill="url(#ch-diag2)" opacity="0.40"/>
  <ellipse cx="910" cy="602" rx="18" ry="10" fill="none" stroke="rgba(240,237,232,0.32)" stroke-width="0.62"/>
  <ellipse cx="840" cy="607" rx="14" ry="8"  fill="none" stroke="rgba(240,237,232,0.29)" stroke-width="0.55"/>
  <ellipse cx="800" cy="608" rx="10" ry="6"  fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.50"/>
  <ellipse cx="934" cy="605" rx="7"  ry="4"  fill="none" stroke="rgba(240,237,232,0.24)" stroke-width="0.46"/>
  <!-- Pebbles near right cluster -->
  <ellipse cx="820" cy="618" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.4"/>
  <ellipse cx="858" cy="620" rx="3" ry="2"   fill="none" stroke="rgba(240,237,232,0.15)" stroke-width="0.4"/>
  <ellipse cx="900" cy="617" rx="5" ry="3"   fill="none" stroke="rgba(240,237,232,0.16)" stroke-width="0.4"/>
  <ellipse cx="942" cy="615" rx="4" ry="2.5" fill="none" stroke="rgba(240,237,232,0.14)" stroke-width="0.4"/>

  <!-- ═══════════════════════════════════════════════════
       MOORING POST — left-centre foreground
       ═══════════════════════════════════════════════════ -->
  <rect x="148" y="540" width="10" height="50" fill="none" stroke="rgba(240,237,232,0.45)" stroke-width="0.75"/>
  <rect x="148" y="540" width="10" height="50" fill="url(#ch-diag)" opacity="0.55"/>
  <rect x="154" y="540" width="4"  height="50" fill="url(#ch-dense)" opacity="0.42"/>
  <rect x="145" y="538" width="16" height="4"  fill="none" stroke="rgba(240,237,232,0.48)" stroke-width="0.7"/>
  <rect x="144" y="586" width="18" height="5"  fill="none" stroke="rgba(240,237,232,0.42)" stroke-width="0.65"/>
  <!-- Iron ring -->
  <ellipse cx="153" cy="556" rx="8" ry="5" fill="none" stroke="rgba(240,237,232,0.52)" stroke-width="1.0"/>
  <ellipse cx="153" cy="556" rx="5" ry="3" fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.5"/>
  <!-- Rope coil at base -->
  <ellipse cx="153" cy="592" rx="16" ry="6"  fill="none" stroke="rgba(240,237,232,0.34)" stroke-width="0.65"/>
  <ellipse cx="153" cy="592" rx="11" ry="4"  fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.55"/>
  <ellipse cx="153" cy="592" rx="6"  ry="2.5" fill="none" stroke="rgba(240,237,232,0.20)" stroke-width="0.5"/>
  <!-- Rope running away to right -->
  <path d="M161 556 Q190 560 220 554 Q260 548 300 556 Q345 549 390 558" fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.7" stroke-dasharray="3,3"/>
  <line x1="185" y1="553" x2="187" y2="559" stroke="rgba(240,237,232,0.20)" stroke-width="0.5"/>
  <line x1="238" y1="551" x2="240" y2="557" stroke="rgba(240,237,232,0.18)" stroke-width="0.5"/>
  <line x1="295" y1="553" x2="297" y2="559" stroke="rgba(240,237,232,0.17)" stroke-width="0.45"/>
  <line x1="350" y1="550" x2="352" y2="556" stroke="rgba(240,237,232,0.16)" stroke-width="0.45"/>

  <!-- ═══════════════════════════════════════════════════
       CHAIN — draped across mid-shore
       ═══════════════════════════════════════════════════ -->
  <g opacity="0.36" stroke="rgba(240,237,232,0.55)" stroke-width="0.7" fill="none">
    <ellipse cx="420" cy="628" rx="5" ry="3" transform="rotate(-15,420,628)"/>
    <ellipse cx="432" cy="633" rx="5" ry="3" transform="rotate(10,432,633)"/>
    <ellipse cx="444" cy="629" rx="5" ry="3" transform="rotate(-20,444,629)"/>
    <ellipse cx="456" cy="634" rx="5" ry="3" transform="rotate(5,456,634)"/>
    <ellipse cx="468" cy="630" rx="5" ry="3" transform="rotate(-12,468,630)"/>
    <ellipse cx="480" cy="635" rx="5" ry="3" transform="rotate(8,480,635)"/>
    <ellipse cx="492" cy="631" rx="5" ry="3" transform="rotate(-18,492,631)"/>
    <ellipse cx="504" cy="636" rx="5" ry="3" transform="rotate(12,504,636)"/>
    <ellipse cx="516" cy="632" rx="5" ry="3" transform="rotate(-8,516,632)"/>
    <ellipse cx="528" cy="637" rx="5" ry="3" transform="rotate(15,528,637)"/>
    <ellipse cx="540" cy="633" rx="5" ry="3" transform="rotate(-10,540,633)"/>
    <ellipse cx="552" cy="638" rx="5" ry="3" transform="rotate(6,552,638)"/>
  </g>
  <path d="M420 628 Q480 640 540 633 Q548 636 552 638" fill="none" stroke="rgba(240,237,232,0.12)" stroke-width="0.5"/>

  <!-- ═══════════════════════════════════════════════════
       ANCHOR — half-buried, right of centre
       ═══════════════════════════════════════════════════ -->
  <line x1="640" y1="605" x2="640" y2="655" stroke="rgba(240,237,232,0.42)" stroke-width="1.1"/>
  <path d="M628 650 Q634 657 640 655 Q646 657 652 650" fill="none" stroke="rgba(240,237,232,0.42)" stroke-width="0.9"/>
  <line x1="628" y1="610" x2="652" y2="610" stroke="rgba(240,237,232,0.42)" stroke-width="1.0"/>
  <rect x="626" y="608" width="6"  height="4" fill="none" stroke="rgba(240,237,232,0.30)" stroke-width="0.5"/>
  <rect x="652" y="608" width="6"  height="4" fill="none" stroke="rgba(240,237,232,0.30)" stroke-width="0.5"/>
  <path d="M628 650 Q622 659 618 655 Q622 647 628 650" fill="none" stroke="rgba(240,237,232,0.36)" stroke-width="0.7"/>
  <path d="M652 650 Q658 659 662 655 Q658 647 652 650" fill="none" stroke="rgba(240,237,232,0.36)" stroke-width="0.7"/>
  <ellipse cx="640" cy="605" rx="6" ry="4" fill="none" stroke="rgba(240,237,232,0.42)" stroke-width="0.8"/>
  <line x1="637" y1="620" x2="643" y2="620" stroke="rgba(240,237,232,0.19)" stroke-width="0.45"/>
  <line x1="637" y1="630" x2="643" y2="630" stroke="rgba(240,237,232,0.19)" stroke-width="0.45"/>
  <line x1="637" y1="640" x2="643" y2="640" stroke="rgba(240,237,232,0.19)" stroke-width="0.45"/>

  <!-- ═══════════════════════════════════════════════════
       SEABIRDS — spread across the sky
       ═══════════════════════════════════════════════════ -->
  <!-- Bird 1 — large, left -->
  <path d="M 130 430 Q 140 424 150 430" fill="none" stroke="rgba(240,237,232,0.46)" stroke-width="0.9"/>
  <path d="M 150 430 Q 160 424 170 430" fill="none" stroke="rgba(240,237,232,0.46)" stroke-width="0.9"/>
  <!-- Bird 2 — medium -->
  <path d="M 290 408 Q 298 403 306 408" fill="none" stroke="rgba(240,237,232,0.38)" stroke-width="0.75"/>
  <path d="M 306 408 Q 314 403 322 408" fill="none" stroke="rgba(240,237,232,0.38)" stroke-width="0.75"/>
  <!-- Bird 3 — small -->
  <path d="M 480 420 Q 486 416 492 420" fill="none" stroke="rgba(240,237,232,0.30)" stroke-width="0.62"/>
  <path d="M 492 420 Q 498 416 504 420" fill="none" stroke="rgba(240,237,232,0.30)" stroke-width="0.62"/>
  <!-- Bird 4 — small, further right -->
  <path d="M 650 395 Q 655 391 660 395" fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.55"/>
  <path d="M 660 395 Q 665 391 670 395" fill="none" stroke="rgba(240,237,232,0.26)" stroke-width="0.55"/>
  <!-- Bird 5 — tiny, far right sky -->
  <path d="M 820 412 Q 824 409 828 412" fill="none" stroke="rgba(240,237,232,0.20)" stroke-width="0.5"/>
  <path d="M 828 412 Q 832 409 836 412" fill="none" stroke="rgba(240,237,232,0.20)" stroke-width="0.5"/>
  <!-- Bird 6 — tiny, upper left -->
  <path d="M  80 365 Q  84 362  88 365" fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.45"/>
  <path d="M  88 365 Q  92 362  96 365" fill="none" stroke="rgba(240,237,232,0.18)" stroke-width="0.45"/>
  <!-- Bird 7 — distant -->
  <path d="M 400 350 Q 403 348 406 350" fill="none" stroke="rgba(240,237,232,0.15)" stroke-width="0.42"/>
  <path d="M 406 350 Q 409 348 412 350" fill="none" stroke="rgba(240,237,232,0.15)" stroke-width="0.42"/>

</svg>
    `;
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const seaC = seaRef.current;
    const beamC = beamRef.current;
    const cd = cursorDotRef.current;
    const cr = cursorRingRef.current;

    const eyebrowLit = eyebrowLitRef.current;
    const titleLit1 = titleLit1Ref.current;
    const titleLit2 = titleLit2Ref.current;

    if (!root || !seaC || !beamC || !cd || !cr || !eyebrowLit || !titleLit1 || !titleLit2) return;

    const sc = seaC.getContext("2d");
    const bc = beamC.getContext("2d");
    if (!sc || !bc) return;

    // Cursor tracking (scoped to this section)
    let mx = root.clientWidth / 2;
    let my = root.clientHeight / 2;
    let rx = mx;
    let ry = my;

    const onPointerMove = (e: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      mx = e.clientX - rect.left;
      my = e.clientY - rect.top;
      cd.style.left = `${mx}px`;
      cd.style.top = `${my}px`;
    };

    root.addEventListener("pointermove", onPointerMove);

    // Expand ring on hover over interactive elements within root (event delegation)
    const onPointerOver = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a,button,[role='button'],input,textarea,select")) {
        cr.classList.add(styles.cursorRingExpand);
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      if (!t) return;
      if (t.closest("a,button,[role='button'],input,textarea,select")) {
        cr.classList.remove(styles.cursorRingExpand);
      }
    };
    root.addEventListener("pointerover", onPointerOver);
    root.addEventListener("pointerout", onPointerOut);

    let cursorRaf = 0;
    const cursorLoop = () => {
      rx += (mx - rx) * 0.1;
      ry += (my - ry) * 0.1;
      cr.style.left = `${rx}px`;
      cr.style.top = `${ry}px`;
      cursorRaf = requestAnimationFrame(cursorLoop);
    };
    cursorRaf = requestAnimationFrame(cursorLoop);

    // Build lit-letter spans
    const spE = spansFromText("Immersive Productions", eyebrowLit, styles.eyebrowLitLetter);
    const spT1 = spansFromText("The", titleLit1, styles.titleLit1Letter);
    const spT2 = spansFromText("Harbourers", titleLit2, styles.titleLit2Letter);
    const allSpans = [...spE, ...spT1, ...spT2];

    let letterCenters: { cx: number; cy: number }[] = [];

    const cacheRects = () => {
      letterCenters = allSpans.map((s) => {
        const r = s.getBoundingClientRect();
        const rootR = root.getBoundingClientRect();
        return { cx: r.left - rootR.left + r.width / 2, cy: r.top - rootR.top + r.height / 2 };
      });
    };

    // Canvas sizing
    let W = 0;
    let H = 0;
    const resize = () => {
      W = seaC.width = beamC.width = root.clientWidth;
      H = seaC.height = beamC.height = root.clientHeight;
      cacheRects();
    };

    resize();
    const onResize = () => resize();
    window.addEventListener("resize", onResize);

    // Wait for fonts, then cache rects (matches your original intent)
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (document as any).fonts?.ready?.then?.(() => setTimeout(cacheRects, 100));

    // Lantern pos (same math as your HTML, but relative to root)
    const lanternPos = () => ({
      x: (1360 / 1440) * W,
      y: 74, // SVG height stays 780px in your scene
    });

    const BEAM_HALF = 0.04;
    const BEAM_LEN = 3500;

    // Stars
    const stars = Array.from({ length: 200 }, () => ({
      x: Math.random(),
      y: Math.random() * 0.62,
      r: Math.random() * 0.8 + 0.15,
      o: Math.random() * 0.4 + 0.08,
      tw: Math.random() * Math.PI * 2,
      sp: 0.007 + Math.random() * 0.012,
    }));

    const litS = new Float32Array(allSpans.length);
    const litT = new Float32Array(allSpans.length);

    let lastTime = 0;
    let seaT = 0;
    let raf = 0;

    const frame = (ts: number) => {
      const dt = Math.min((ts - lastTime) / 1000, 0.05);
      lastTime = ts;
      seaT += dt;

      const lp = lanternPos();
      const angle = Math.atan2(my - lp.y, mx - lp.x);

      // SKY + STARS
      sc.clearRect(0, 0, W, H);
      const sky = sc.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, "#060606");
      sky.addColorStop(0.5, "#080808");
      sky.addColorStop(1, "#0a0a0a");
      sc.fillStyle = sky;
      sc.fillRect(0, 0, W, H);

      for (const s of stars) {
        const tw = s.o * (0.55 + 0.45 * Math.sin(seaT * s.sp * 55 + s.tw));
        sc.beginPath();
        sc.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
        sc.fillStyle = `rgba(230,228,224,${tw})`;
        sc.fill();
      }

      // BEAM
      bc.clearRect(0, 0, W, H);
      const a1 = angle - BEAM_HALF;
      const a2 = angle + BEAM_HALF;

      const bg = bc.createRadialGradient(lp.x, lp.y, 0, lp.x, lp.y, BEAM_LEN * 0.58);
      bg.addColorStop(0, "rgba(255,252,245,0.26)");
      bg.addColorStop(0.07, "rgba(240,238,230,0.12)");
      bg.addColorStop(0.3, "rgba(210,210,200,0.045)");
      bg.addColorStop(1, "rgba(0,0,0,0)");

      bc.save();
      bc.beginPath();
      bc.moveTo(lp.x, lp.y);
      bc.lineTo(lp.x + Math.cos(a1) * BEAM_LEN, lp.y + Math.sin(a1) * BEAM_LEN);
      bc.arc(lp.x, lp.y, BEAM_LEN, a1, a2);
      bc.lineTo(lp.x, lp.y);
      bc.closePath();
      bc.fillStyle = bg;
      bc.fill();
      bc.restore();

      // shimmer
      bc.save();
      bc.globalAlpha = 0.08;
      bc.strokeStyle = "rgba(255,252,245,0.9)";
      bc.lineWidth = 1.0;
      bc.beginPath();
      bc.moveTo(lp.x, lp.y);
      bc.lineTo(lp.x + Math.cos(angle) * BEAM_LEN * 0.45, lp.y + Math.sin(angle) * BEAM_LEN * 0.45);
      bc.stroke();
      bc.restore();

      // Lantern glow
      const lg = bc.createRadialGradient(lp.x, lp.y, 0, lp.x, lp.y, 75);
      lg.addColorStop(0, "rgba(255,252,245,0.82)");
      lg.addColorStop(0.18, "rgba(240,238,230,0.28)");
      lg.addColorStop(0.5, "rgba(220,220,210,0.08)");
      lg.addColorStop(1, "rgba(0,0,0,0)");
      bc.fillStyle = lg;
      bc.beginPath();
      bc.arc(lp.x, lp.y, 75, 0, Math.PI * 2);
      bc.fill();

      // LETTER ILLUMINATION
      if (letterCenters.length === allSpans.length) {
        for (let i = 0; i < letterCenters.length; i++) {
          const r = letterCenters[i];
          const dx = r.cx - lp.x;
          const dy = r.cy - lp.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let diff = Math.atan2(dy, dx) - angle;
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;

          const threshold = BEAM_HALF + 0.018 + (dist / (W * 1.15)) * 0.03;
          litT[i] = Math.abs(diff) < threshold ? Math.max(0.55, 1 - dist / (W * 1.05)) : 0;
        }
      }

      for (let i = 0; i < allSpans.length; i++) {
        litS[i] += (litT[i] - litS[i]) * (litT[i] > litS[i] ? 0.35 : 0.042);
        allSpans[i].style.opacity = litS[i].toFixed(3);
      }

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame((ts) => {
      lastTime = ts;
      frame(ts);
    });

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(cursorRaf);
      window.removeEventListener("resize", onResize);

      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerover", onPointerOver);
      root.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.root}>
      <canvas ref={seaRef} className={styles.seaCanvas} />
      <canvas ref={beamRef} className={styles.beamCanvas} />

      <div className={styles.grain} />
      <div className={styles.vignette} />

      <div ref={cursorDotRef} className={styles.cursorDot} />
      <div ref={cursorRingRef} className={styles.cursorRing} />

      <div className={styles.envWrap} dangerouslySetInnerHTML={{ __html: envSvgMarkup }} />

      <div className={styles.landing}>
        <div className={styles.landingContent}>
          <div className={styles.landingEyebrow}>
            <div className={styles.litGroup}>
              <span className={styles.litBase}>Immersive Productions</span>
              <span ref={eyebrowLitRef} className={styles.litLayer} />
            </div>
          </div>

          <div className={styles.landingTitle}>
            <div className={styles.litGroup}>
              <span className={styles.litBase}>The</span>
              <span ref={titleLit1Ref} className={styles.litLayer} />
            </div>
            <br />
            <em className={styles.litGroup} style={{ fontStyle: "italic" }}>
              <span className={styles.litBase} style={{ fontStyle: "italic" }}>
                Harbourers
              </span>
              <span ref={titleLit2Ref} className={styles.litLayer} />
            </em>
          </div>

          <div className={styles.scrollCue}>
            <div className={styles.scrollLine} />
            Explore
          </div>
        </div>
      </div>
    </div>
  );
}