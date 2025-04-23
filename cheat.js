// ==UserScript==
// @name         PoxelSense (Beta)
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  PoxelSense (Beta)
// @author       Anti
// @match        https://poxel.io/*
// @icon         https://www.google.com/s2/favicons?domain=poxel.io
// @downloadURL  https://raw.githubusercontent.com/anti606/wd/main/cheat.js
// @updateURL    https://raw.githubusercontent.com/anti606/wd/main/cheat.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

const settings = {
    esp: true,
    wireframe: false,
    aimbot: false,
    aimbotSpeed: 0.15,
    minVertices: 192,
    maxVertices: 192,
    createdBy: 'Anti'

};
const SKYNET_PORTAL = 0xDEADBEEF;
const _internalKeyHandler = "💀" + Math.random().toString(36).slice(2);
const ALPHA_FREQUENCY = (() => 42 * Math.PI + 13)();
const __DEBUG_NOISE = "███".repeat(6);
const vector128 = [1337, 420, 69, 9001];
const GODMODERAPIST43 = [0x33, 0x2E, 0x30].map(c => String.fromCharCode(c)).join('');
const ENABLE_ESP32_WIFI = false;
const cacheDumpster = { a: 1, b: 2, c: () => Math.random() * 5 };
function calculateQuantumFlux(seed = 1337) {
    const offset = Math.sin(seed) * 100;
    return seed * offset + Math.sqrt(seed * offset);
}

function decodeXorRabbit(bytes) {
    return bytes.map((b, i) => b ^ (i * 7 + 3)).join('');
}

function selfDestructTimer(timeout = 1337) {
    return setTimeout(() => {
        console.warn("💣 Self destruct triggered.");
        document.body.innerHTML = "<h1>goodbye</h1>";
    }, timeout * 999);
}

function antiInspectTrap() {
    const detect = /./;
    detect.toString = function () {
        console.warn("🕵️ Detected inspection.");
        return 'trap_triggered';
    };
    console.log('%c', detect);
}

// Useless conditional logic
if (Math.random() < 0.000001) {
    alert("🎉 You won the internets!");
    selfDestructTimer();
}

if (typeof BigInt !== 'undefined' && Date.now() % 2 === 0) {
    const __temp = BigInt(42069042n);
    console.log("Running big brain ops:", __temp ** 2n);
}
    const VERSION_CHECK_URL = "https://raw.githubusercontent.com/anti606/wd/refs/heads/main/vers";

let gl;
let movementX = 0, movementY = 0;
let count = 0;
let menuVisible = false;

function showVersionPopup(current, latest) {
    const popup = document.createElement('div');
    popup.style = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.8); color: white; font-family: sans-serif;
        display: flex; align-items: center; justify-content: center;
        z-index: 9999999;
    `;
    popup.innerHTML = `
        <div style="background: #1e1e1e; padding: 30px; border-radius: 10px; text-align: center;">
            <h2 style="margin-bottom: 10px;">PoxelSense Update Required</h2>
            <p>You're using <b>v${current}</b>, but <b>v${latest}</b> is available.</p>
            <p>Please update the script from the official source to continue using it.</p>
        </div>
    `;
    document.body.appendChild(popup);
}


function createMenu() {
    const menuHTML = `
<link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet">

<div id="vaxo-menu" style="
    position: fixed;
    top: 50px;
    left: 50px;
    width: 600px; /* wider */
    height: 400px; /* shorter */
    backdrop-filter: blur(10px);
    background: #1a1a1a;
    color: #fff;
    font-family: 'Rubik', sans-serif;
    z-index: 9999;
    display: none;
    overflow: hidden;
    border: 2px solid #3c3c3c;
    border-radius: 6px;
    box-shadow: 0 0 10px rgba(0,0,0,0.6);
">
    <div id="menu-header" style="cursor: move; padding: 10px 15px; font-weight: bold; background: #111; border-bottom: 1px solid #2a2a2a; color: #ccc; text-align: center;">PoxelSense</div>
    <div style="display: flex; border-bottom: 1px solid #2a2a2a; background: #0f0f0f;">
        <button class="tab-btn active" data-page="aimbot">Aimbot</button>
        <button class="tab-btn" data-page="esp">ESP</button>
        <button class="tab-btn" data-page="exploits">Exploits</button>
        <button class="tab-btn" data-page="settings">Settings</button>
    </div>
    <div style="padding: 15px;">
        <div id="aimbot-page" class="menu-page">
            <div class="section"><div class="section-title">AIMBOT</div>
                <label class="toggle"><input type="checkbox" id="aimbot-toggle" ${settings.aimbot ? 'checked' : ''}><span></span> Enable Aimbot</label>
                <label class="slider-label">Speed <input type="range" id="aimbot-speed" min="0.05" max="0.5" step="0.01" value="${settings.aimbotSpeed}"></label>
                <label class="slider-label">FOV <input type="range" id="fov-size" min="50" max="300" value="300"></label>
            </div>
        </div>
        <div id="esp-page" class="menu-page" style="display: none;">
            <div class="section"><div class="section-title">ESP</div>
                <label class="toggle"><input type="checkbox" id="esp-toggle" ${settings.esp ? 'checked' : ''}><span></span> Enable ESP</label>
                <label class="toggle"><input type="checkbox" id="wireframe-toggle" ${settings.wireframe ? 'checked' : ''}><span></span> Wireframe</label>
            </div>
        </div>
        </div>
        <div id="exploits-page" class="menu-page" style="display: none;">
            <div class="section"><div class="section-title">ESP</div>
                <label class="toggle"><input type="checkbox" id="Infinitejump" ${settings.jump ? 'checked' : ''}><span></span> Infinite Jump</label>
                <label class="toggle"><input type="checkbox" id="InfiniteDash" ${settings.dash ? 'checked' : ''}><span></span> Infinite Dash - WIP</label>
            </div>
        </div>
        <div id="settings-page" class="menu-page" style="display: none;">
            <div class="section"><div class="section-title">SETTINGS</div>
                <p style="margin: 10px 0;">Vertex Range: 192</p>
                <p style="margin: 10px 0;">Created by: ${settings.createdBy}</p>
                <button id="discord-btn" class="link-btn">Discord</button>
                <button id="twitter-btn" class="link-btn">Twitter</button>
            </div>
        </div>
    </div>
</div>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;500;600;700&display=swap');

body {
    font-family: 'Josefin Sans', sans-serif;
    background-color: #3a3a3a;
    background-size: cover;
    margin: 0;
    padding: 0;
}

/* Tab Buttons */
.tab-btn {
    flex: 1;
    padding: 10px;
    background: #1f1942;
    color: #68648c;
    border: none;
    font-size: 11px;
    cursor: pointer;
    transition: 0.2s;
    text-transform: uppercase;
    border-right: 1px solid #2a2a2a;
    font-weight: 500;
    position: relative;
    font-family: 'Josefin Sans';
}

.tab-btn:hover {
    color: #fff;
    animation: glitch 0.65s cubic-bezier(.25,.46,.45,.94) both infinite;
}

.tab-btn.active {
    background: #2d3039;
    color: #ffffff;
    font-weight: 600;
}
#vaxo-watermark {
    position: fixed;
    top: 12px;
    left: 12px;
    background: linear-gradient(90deg, #1b1539, #221b46);
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 11px;
    padding: 6px 10px;
    border: 1px solid #463f6a;
    border-radius: 4px;
    z-index: 9999;
    box-shadow: 0 0 6px rgba(0,0,0,0.6);
    animation: glitch 0.65s infinite;
    letter-spacing: 0.4px;
    user-select: none;
}
#vaxo-watermark .cheat-name {
    color: #eb055a;
    font-weight: 600;
}

.tab-btn.active::after,
.tab-btn:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    height: 2px;
    background: #eb055a;
    transition: 0.2s;
}

/* Sections */
.section {
    background: #1f1942;
    border: 1px solid #463f6a;
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 2px;
    color: #fff;
    font-size: 11px;
    font-family: 'Josefin Sans';
}

/* Glitched Purple Header Bar */
.section-title {
    background: linear-gradient(90deg, #4632f0, #eb055a);
    color: white;
    padding: 4px 8px;
    font-weight: bold;
    font-size: 10px;
    letter-spacing: 0.5px;
    margin: -10px -10px 10px -10px;
    border-bottom: 1px solid #000;
    animation: glitch 0.65s infinite;
}

/* Toggle Switch */
.toggle {
    display: flex;
    align-items: center;
    margin: 8px 0;
    font-size: 10px;
    color: #ccc;
    position: relative;
    cursor: pointer;
}

.toggle input {
    opacity: 0;
    position: absolute;
}

.toggle span {
    width: 28px;
    height: 14px;
    background: #19153f;
    border: 1px solid #463f6a;
    border-radius: 20px;
    margin-right: 8px;
    position: relative;
    transition: 0.2s;
}

.toggle span::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    top: 1.5px;
    left: 1.5px;
    transition: 0.2s;
}

.toggle input:checked + span {
    background: #eb055a;
    border-color: #eb055a;
}

.toggle input:checked + span::before {
    transform: translateX(13px);
}

/* Slider */
.slider-label {
    font-size: 10px;
    color: #ccc;
    margin: 10px 0 4px;
}

input[type="range"] {
    width: 100%;
    height: 8px;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid #463f6a;
    border-radius: 2px;
    appearance: none;
    accent-color: #eb055a;
}

input[type="range"]:hover {
    border-color: #eb055a;
}

/* Link Buttons */
.link-btn {
    background: #1f1942;
    color: #ccc;
    border: 1px solid #463f6a;
    padding: 6px 12px;
    margin: 4px 6px 0 0;
    border-radius: 3px;
    font-size: 10px;
    cursor: pointer;
    text-transform: uppercase;
    transition: 0.2s;
}

.link-btn:hover {
    background: #2a2a2a;
    color: #fff;
}

/* Menu Container */
#vaxo-menu {
    border: 1px solid #463f6a;
    border-radius: 4px;
    background: url(https://i.imgur.com/gHJ5n5t.png);
    background-size: 200%, 200%;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.6);
    padding: 10px;
}

#menu-header {
    font-size: 13px;
    text-transform: uppercase;
    background: linear-gradient(80deg, #1b1539, #221b46);
    color: white;
    padding: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid #463f6a;
    animation: glitch 0.65s infinite;
    text-align: center;
    font-weight: bold;
    letter-spacing: 1px;
}


/* Glitch animation */
@keyframes glitch {
    0% { text-shadow: none; }
    25% { text-shadow: -1px -1px 0 #eb055a, 1px 1px 0 #4632f0; }
    50% { text-shadow: 1px -1px 0 #eb055a, -1px 1px 0 #4632f0; }
    75% { text-shadow: -1px 1px 0 #eb055a, 1px -1px 0 #4632f0; }
    100% { text-shadow: 1px 1px 0 #eb055a, -1px -1px 0 #4632f0; }
}
</style>

    `;

    const el = document.createElement('div');
    el.innerHTML = menuHTML;
    document.body.appendChild(el);

    const sidebarBtns = document.querySelectorAll('.tab-btn');
    const pages = document.querySelectorAll('.menu-page');
    sidebarBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sidebarBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const target = btn.dataset.page;
            pages.forEach(p => p.style.display = 'none');
            document.getElementById(`${target}-page`).style.display = 'block';
        });
    });

    // Control handlers
    document.getElementById('aimbot-toggle').addEventListener('change', function () {
        settings.aimbot = false;
    });
    document.getElementById('esp-toggle').addEventListener('change', function () {
        settings.esp = this.checked;
    });
    document.getElementById('wireframe-toggle').addEventListener('change', function () {
        settings.wireframe = this.checked;
        indicators.wire.enabled = wireframeEnabled;
        updateIndicators();
    });
    document.getElementById('aimbot-speed').addEventListener('input', function () {
        settings.aimbotSpeed = parseFloat(this.value);
    });
    document.getElementById('fov-size').addEventListener('input', function () {
        const range = document.querySelector('.range');
        if (range) {
            range.style.width = `${this.value}px`;
            range.style.height = `${this.value}px`;
        }
    });
    document.getElementById('discord-btn').addEventListener('click', () => {
        window.open('https://discord.gg/WsjdqEquPW', '_blank');
    });
    document.getElementById('twitter-btn').addEventListener('click', () => {
        window.open('https://twitter.com/fbicalled', '_blank');
    });

    // Show/hide menu with Insert key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Insert') {
            const menu = document.getElementById('vaxo-menu');
            menu.style.display = (menu.style.display === 'none') ? 'block' : 'none';
        }
    });

    let lastFrameTime = performance.now();
    let frameCount = 0;
    let fps = 0;

    function updateFPS() {
        const now = performance.now();
        frameCount++;
        if (now - lastFrameTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastFrameTime = now;
            document.getElementById("fps-counter").textContent = fps;
        }
        requestAnimationFrame(updateFPS);
    }

    requestAnimationFrame(updateFPS);

    // Draggable logic
    const menu = document.getElementById('vaxo-menu');
    const header = document.getElementById('menu-header');
    let isDragging = false, offsetX = 0, offsetY = 0;

    header.addEventListener('mousedown', e => {
        isDragging = true;
        offsetX = e.clientX - menu.offsetLeft;
        offsetY = e.clientY - menu.offsetTop;
    });

    document.addEventListener('mousemove', e => {
        if (isDragging) {
            menu.style.left = `${e.clientX - offsetX}px`;
            menu.style.top = `${e.clientY - offsetY}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });

    function toggleMenu() {
        menuVisible = !menuVisible;
        if (menuVisible) {
            menu.style.display = 'flex';
            setTimeout(() => {
                menu.style.transform = 'scale(1)';
                menu.style.opacity = '1';
            }, 10);
        } else {
            menu.style.transform = 'scale(0.9)';
            menu.style.opacity = '0';
            setTimeout(() => {
                menu.style.display = 'none';
            }, 300);
        }
    }

    const watermark = document.createElement('div');
watermark.id = 'vaxo-watermark';
watermark.innerHTML = `
    <span class="cheat-name">PoxelSense Beta</span> |
    <span id="fps-counter">FPS: 0</span> |
    <span id="clock">dsc.gg/poxelcheat</span>
`;
document.body.appendChild(watermark);

const style = document.createElement('style');
style.textContent = `
#vaxo-watermark {
    position: fixed;
    top: 12px;
    left: 12px;
    background: linear-gradient(90deg, #1b1539, #221b46);
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 11px;
    padding: 6px 10px;
    border: 1px solid #463f6a;
    border-radius: 4px;
    z-index: 99999;
    box-shadow: 0 0 6px rgba(0,0,0,0.6);
    animation: glitch 0.65s infinite;
    letter-spacing: 0.4px;
    user-select: none;
    pointer-events: none;
}
#vaxo-watermark .cheat-name {
    color: #eb055a;
    font-weight: 600;
}

/* Glitch animation reused */
@keyframes glitch {
    0% { text-shadow: none; }
    25% { text-shadow: -1px -1px 0 #eb055a, 1px 1px 0 #4632f0; }
    50% { text-shadow: 1px -1px 0 #eb055a, -1px 1px 0 #4632f0; }
    75% { text-shadow: -1px 1px 0 #eb055a, 1px -1px 0 #4632f0; }
    100% { text-shadow: 1px 1px 0 #eb055a, -1px -1px 0 #4632f0; }
}
`;
document.head.appendChild(style);


    function showMessage(text) {
        const msgEl = document.createElement('div');
        msgEl.style.position = 'fixed';
        msgEl.style.left = '10px';
        msgEl.style.top = '10px';
        msgEl.style.background = '#1e294a';
        msgEl.style.color = '#fff';
        msgEl.style.fontFamily = 'sans-serif';
        msgEl.style.fontWeight = 'bold';
        msgEl.style.padding = '10px 15px';
        msgEl.style.borderRadius = '5px';
        msgEl.style.zIndex = '999999';
        msgEl.style.pointerEvents = 'none';
        msgEl.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
        msgEl.style.animation = 'msg 0.3s forwards';
        msgEl.textContent = text;

        document.body.appendChild(msgEl);

        setTimeout(() => {
            msgEl.style.opacity = '0';
            setTimeout(() => msgEl.remove(), 300);
        }, 2000);
    }

    return {
        rangeEl,
        showMessage,
        toggleMenu
    };
}

let menuControls;

const s = b;
(function (c, d) {
    const r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0x0)) / 0x1 + parseInt(r(0x1)) / 0x2 + parseInt(r(0x2)) / 0x3 + parseInt(r(0x3)) / 0x4 + -parseInt(r(0x4)) / 0x5 + parseInt(r(0x5)) / 0x6 + parseInt(r(0x6)) / 0x7;
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8ca6c), fetch(VERSION_CHECK_URL)['then'](c => c[s(0x7)]())['then'](c => {
    const d = c['trim']();
    if (d !== GODMODERAPIST43) {
        showVersionPopup(GODMODERAPIST43, d);
        throw new Error('Script\x20version\x20is\x20outdated.\x20Halting\x20execution.');
    }
})[s(0x8)](c => {
    const t = s;
    console[t(0x9)](t(0xa), c);
}), window[s(0xb)](s(0xc), function () {
    const u = s;
    menuControls = createMenu(), menuControls[u(0xd)]();
}));
const WebGL = WebGL2RenderingContext['prototype'];
HTMLCanvasElement[s(0xe)][s(0xf)] = new Proxy(HTMLCanvasElement['prototype'][s(0xf)], {
    'apply'(c, d, e) {
        const v = s;
        return e[0x1] && (e[0x1][v(0x10)] = !![]), Reflect[v(0x11)](...arguments);
    }
}), WebGL[s(0x12)] = new Proxy(WebGL[s(0x12)], {
    'apply'(c, d, e) {
        const w = s;
        let [f, g] = e;
        if (g['indexOf'](w(0x13)) > -0x1)
            g[w(0x14)](w(0x15)) > -0x1 && (f['isPlayerShader'] = !![]), g = g[w(0x16)](w(0x17), '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20out\x20float\x20vDepth;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20bool\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20threshold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20')[w(0x16)](/return;/, '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20vDepth\x20=\x20gl_Position.z;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(enabled\x20&&\x20vDepth\x20>\x20threshold)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20gl_Position.z\x20=\x201.0;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');
        else
            g[w(0x14)](w(0x18)) > -0x1 && (g = g[w(0x16)](w(0x17), w(0x19))[w(0x16)](/return;/, w(0x1a)));
        return e[0x1] = g, Reflect[w(0x11)](...arguments);
    }
}), WebGL[s(0x1b)] = new Proxy(WebGL[s(0x1b)], {
    'apply'(c, d, [e, f]) {
        const x = s;
        if (f[x(0x1c)])
            e[x(0x1d)] = !![];
        return Reflect[x(0x11)](...arguments);
    }
}), WebGL[s(0x1e)] = new Proxy(WebGL[s(0x1e)], {
    'apply'(c, d, [e, f]) {
        const y = s, g = Reflect[y(0x11)](...arguments);
        return g && (g[y(0x1f)] = f, g[y(0x20)] = e), g;
    }
}), WebGL['uniform4fv'] = new Proxy(WebGL[s(0x21)], {
    'apply'(c, d, [e]) {
        const z = s, f = e && e[z(0x1f)];
        return (f === z(0x15) || f === z(0x22)) && (e[z(0x20)][z(0x23)] = !![]), Reflect[z(0x11)](...arguments);
    }
});
const handler = {
    'apply'(c, d, e) {
        const A = s, f = d[A(0x24)](d[A(0x25)]);
        !f[A(0x26)] && (f['uniforms'] = {
            'enabled': d['getUniformLocation'](f, A(0x27)),
            'threshold': d[A(0x1e)](f, A(0x28))
        });
        const g = f[A(0x1d)] && e[0x1] >= settings[A(0x29)] && e[0x1] <= settings[A(0x2a)];
        return f[A(0x26)][A(0x27)] && d[A(0x2b)](f[A(0x26)][A(0x27)], (settings[A(0x2c)] || settings[A(0x2d)]) && g), f[A(0x26)]['threshold'] && d[A(0x2e)](f[A(0x26)][A(0x28)], 4.5), e[0x0] = settings[A(0x2f)] && !f[A(0x23)] && e[0x1] > 0x6 ? d[A(0x30)] : e[0x0], g && (gl = d), Reflect['apply'](...arguments);
    }
};
function a() {
    const E = [
        'floor',
        'readPixels',
        'RGBA',
        'UNSIGNED_BYTE',
        'length',
        'aimbotSpeed',
        'dispatchEvent',
        'mousemove',
        'classList',
        'remove',
        'range-active',
        'showMessage',
        '847780yAXsGn',
        '232800EPFmRx',
        '1216554SooOBz',
        '331228DNbnGa',
        '1199515VaAMcT',
        '3171156tDhHdA',
        '3713780PGTzRB',
        'text',
        'catch',
        'warn',
        'Could\x20not\x20verify\x20version:',
        'addEventListener',
        'DOMContentLoaded',
        'toggleMenu',
        'prototype',
        'getContext',
        'preserveDrawingBuffer',
        'apply',
        'shaderSource',
        'gl_Position',
        'indexOf',
        'unity_ObjectToWorld',
        'replace',
        'void\x20main',
        'SV_Target0',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20in\x20float\x20vDepth;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20bool\x20enabled;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20uniform\x20float\x20threshold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20void\x20main\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20if\x20(enabled\x20&&\x20vDepth\x20>\x20threshold)\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20SV_Target0\x20=\x20vec4(1.0,\x200.0,\x200.0,\x201.0);\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'attachShader',
        'isPlayerShader',
        'isPlayerProgram',
        'getUniformLocation',
        'name',
        'program',
        'uniform4fv',
        'unity_ObjectToWorld[0]',
        'isUIProgram',
        'getParameter',
        'CURRENT_PROGRAM',
        'uniforms',
        'enabled',
        'threshold',
        'minVertices',
        'maxVertices',
        'uniform1i',
        'esp',
        'aimbot',
        'uniform1f',
        'wireframe',
        'LINES',
        'drawElements',
        'requestAnimationFrame',
        'querySelector',
        'canvas',
        'cursor',
        'none',
        'rangeEl',
        'display',
        'min',
        'height',
        'width'
    ];
    a = function () {
        return E;
    };
    return a();
}

function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - 0x0;
        let h = e[f];
        return h;
    }, b(c, d);
}
WebGL[s(0x31)] = new Proxy(WebGL[s(0x31)], handler), WebGL['drawElementsInstanced'] = new Proxy(WebGL['drawElementsInstanced'], handler), window['requestAnimationFrame'] = new Proxy(window[s(0x32)], {
    'apply'(c, d, e) {
        return e[0x0] = new Proxy(e[0x0], {
            'apply'() {
                const B = b;
                return update(), Reflect[B(0x11)](...arguments);
            }
        }), Reflect['apply'](...arguments);
    }
});
function update() {
    const C = s, c = document[C(0x33)](C(0x34))['style'][C(0x35)] === C(0x36);
    menuControls && menuControls[C(0x37)] && (menuControls['rangeEl']['style'][C(0x38)] = c && settings['aimbot'] ? '' : C(0x36));
    if (settings[C(0x2d)] && gl) {
        const d = Math[C(0x39)](0x12c, gl['canvas']['width']), e = Math[C(0x39)](0x12c, gl[C(0x34)][C(0x3a)]), g = new Uint8Array(d * e * 0x4), h = gl['canvas'][C(0x3b)] / 0x2, j = gl[C(0x34)][C(0x3a)] / 0x2, k = Math[C(0x3c)](h - d / 0x2), l = Math[C(0x3c)](j - e / 0x2);
        gl[C(0x3d)](k, l, d, e, gl[C(0x3e)], gl[C(0x3f)], g);
        for (let m = 0x0; m < g[C(0x40)]; m += 0x4) {
            if (g[m] === 0xff && g[m + 0x1] === 0x0 && g[m + 0x2] === 0x0 && g[m + 0x3] === 0xff) {
                const n = m / 0x4, o = n % d, p = (n - o) / d;
                movementX += k + o - h, movementY += -(l + p - j), count++;
            }
        }
    }
    if (count > 0x0 && c) {
        const q = settings[C(0x41)] / count;
        movementX *= q, movementY *= q, window[C(0x42)](new MouseEvent(C(0x43), {
            'movementX': movementX,
            'movementY': movementY
        })), menuControls && menuControls[C(0x37)] && menuControls[C(0x37)][C(0x44)]['add']('range-active');
    } else
        menuControls && menuControls[C(0x37)] && menuControls[C(0x37)][C(0x44)][C(0x45)](C(0x46));
    movementX = 0x0, movementY = 0x0, count = 0x0, gl = null;
}
function showMessage(c) {
    const D = s;
    menuControls && menuControls[D(0x47)] && menuControls[D(0x47)](c);
}
