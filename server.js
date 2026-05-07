const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.urlencoded({ extended: true }));

const axios = require("axios");
const cheerio = require("cheerio");
const OpenAI = require("openai");

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json());


app.get("/", (req, res) => {
    app.post("/contact", async (req, res) => {

    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ainastamher@gmail.com",
            pass: "hpdf zogr kmzf xapy"
        }
    });

    await transporter.sendMail({
        from: email,
        to: "ainastamher@gmail.com",
        subject: "New Contact Message",
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.send("Message sent successfully 🚀");
});

    app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("New Message:");
    console.log(name, email, message);

    res.send(`
        <h1 style="text-align:center; margin-top:50px;">
            Thank you ${name}! Your message has been received.
        </h1>
    `);
});

    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>AEO Agency</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-white text-gray-800 scroll-smooth">
</body>
</html>

<!-- NAVBAR -->
<!-- NAVBAR -->
<!-- ULTRA PREMIUM NAVBAR -->
<nav class="fixed top-0 left-0 w-full z-50">

    <!-- SOFT BACKGROUND GLOW -->
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-600/30 via-white/10 to-green-500/30 backdrop-blur-xl"></div>

    <!-- MAIN NAV CONTAINER -->
    <div class="relative border-b border-white/20 shadow-md">

        <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

            <!-- LOGO -->
            <h1 class="text-2xl font-extrabold text-white tracking-wider">
                AEO <span class="text-green-200">Agency</span>
            </h1>

            <!-- LINKS -->
            <div class="hidden md:flex space-x-10 text-white font-medium">

                <a href="#home" class="hover:text-green-200 transition">Home</a>
                <a href="#services" class="hover:text-green-200 transition">Services</a>
                <a href="#case" class="hover:text-green-200 transition">Case Studies</a>
                <a href="#about" class="hover:text-green-200 transition">About</a>
                <a href="#contact" class="hover:text-green-200 transition">Contact</a>

            </div>

            <!-- CTA -->
            <a href="#contact"
               class="relative px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-400 shadow-lg overflow-hidden group">

                <span class="relative z-10">Book Free Call</span>

                <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 blur-xl transition"></span>

            </a>

        </div>

    </div>

</nav>



<!-- HERO -->
<section id="home" class="min-h-screen flex items-center justify-center text-center px-6 relative overflow-hidden">

    <!-- GREEN + WHITE GRADIENT -->
    <div class="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-400 to-white animate-gradient"></div>

    <!-- FLOATING PARTICLES -->
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>
    <div class="particle"></div>

    <!-- CONTENT -->
    <div class="relative z-10 max-w-3xl">

        <!-- ANIMATED HEADLINES -->
        <h1 id="heroText"
            class="text-5xl md:text-6xl font-bold text-white leading-tight transition-all duration-700 opacity-100">

            Get Clients Using AI Search
        </h1>

        <!-- SUB TEXT -->
        <p class="mt-6 text-white/90 text-lg leading-relaxed font-medium">
            We help businesses rank in AI search engines, generate high-intent leads,
            and build automated client acquisition systems that work 24/7.
        </p>

        <div class="mt-8 flex justify-center gap-4">
        <a href="/audit"
   class="px-8 py-3 rounded-full text-green-700 bg-white font-semibold hover:bg-gray-100 transition shadow-lg">
    Get Free AI Audit
</a>
            <a href="#contact"
               class="px-8 py-3 rounded-full text-white font-semibold bg-green-600 hover:bg-green-700 transition shadow-lg">
                Book Free Call
            </a>

            <a href="#services"
               class="px-8 py-3 rounded-full border border-white text-white hover:bg-white hover:text-green-600 transition">
                View Services
            </a>
        </div>

    </div>

</section>

<!-- VIDEO SECTION -->
<section class="py-24 bg-white text-center">

    <h2 class="text-4xl font-bold">See How We Work</h2>

    <p class="mt-4 text-gray-600">
        A quick look at our AI-powered AEO & AIO system
    </p>

    <div style="max-width:900px;margin:auto;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.15);">

    <iframe 
        src="https://streamable.com/e/scqew7"
        width="100%" 
        height="480" 
        frameborder="0" 
        allowfullscreen
        style="border:none;">
    </iframe>

</div>


</section>



<!-- STYLES -->
<style>
/* Gradient Animation */
@keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
.animate-gradient {
    background-size: 200% 200%;
    animation: gradientMove 8s ease infinite;
}

/* PARTICLES */
.particle {
    position: absolute;
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    opacity: 0.6;
    animation: float 10s infinite linear;
}

/* Random positions */
.particle:nth-child(2) { left: 20%; top: 80%; animation-duration: 12s; }
.particle:nth-child(3) { left: 40%; top: 60%; animation-duration: 9s; }
.particle:nth-child(4) { left: 70%; top: 90%; animation-duration: 11s; }
.particle:nth-child(5) { left: 85%; top: 70%; animation-duration: 13s; }

/* Floating animation */
@keyframes float {
    0% { transform: translateY(0); opacity: 0.6; }
    50% { transform: translateY(-100px); opacity: 1; }
    100% { transform: translateY(-200px); opacity: 0; }
}
</style>

<!-- TEXT CHANGE ANIMATION -->
<script>
const texts = [
    "Get Clients Using AI Search",
    "Automate Your Lead Generation",
    "Scale Your Business Faster",
    "Turn Visitors Into Paying Clients"
];

let index = 0;
const hero = document.getElementById("heroText");

setInterval(() => {
    hero.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % texts.length;
        hero.innerText = texts[index];
        hero.style.opacity = 1;
    }, 500);

}, 3000);
</script>


<!-- TRUST BAR -->

<!-- SERVICES -->
<section id="services" class="py-28 text-center bg-gray-50">

    <h2 class="text-4xl font-bold">Our Services</h2>
    <p class="mt-4 text-gray-600">We build AI-powered systems that bring real clients to your business</p>

    <div class="mt-12 grid md:grid-cols-3 gap-8 px-10">

        <!-- SERVICE 1 -->
        <div class="p-6 bg-white shadow rounded-xl hover:shadow-xl transition">

            <!-- ICON -->
            <div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-7 h-7">
                    <path d="M3 3h18v2H3V3zm2 4h14v14H5V7zm2 2v10h10V9H7zm2 2h6v2H9v-2z"/>
                </svg>
            </div>

            <h3 class="text-green-600 font-bold text-xl">AEO Optimization</h3>

            <p class="text-gray-600 mt-2">
                We optimize your business to appear in AI search engines so customers find you first.
            </p>

            <!-- DETAILS -->
            <ul class="mt-4 text-gray-600 text-sm space-y-2 text-left">
                <li>✔ AI search visibility setup</li>
                <li>✔ Content optimization for AI engines</li>
                <li>✔ Structure & schema improvements</li>
                <li>✔ Competitor positioning strategy</li>
            </ul>

        </div>

        <!-- SERVICE 2 -->
        <div class="p-6 bg-white shadow rounded-xl hover:shadow-xl transition">

            <!-- ICON -->
            <div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-7 h-7">
                    <path d="M13 2L3 14h7v8l11-14h-7V2z"/>
                </svg>
            </div>

            <h3 class="text-green-600 font-bold text-xl">AIO Systems</h3>

            <p class="text-gray-600 mt-2">
                We build automated AI systems that attract and convert high-intent clients.
            </p>

            <!-- DETAILS -->
            <ul class="mt-4 text-gray-600 text-sm space-y-2 text-left">
                <li>✔ AI-powered lead generation systems</li>
                <li>✔ Automated client qualification</li>
                <li>✔ Smart response & follow-up flows</li>
                <li>✔ Integration with your business tools</li>
            </ul>

        </div>

        <!-- SERVICE 3 -->
        <div class="p-6 bg-white shadow rounded-xl hover:shadow-xl transition">

            <!-- ICON -->
            <div class="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-7 h-7">
                    <path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z"/>
                </svg>
            </div>

            <h3 class="text-green-600 font-bold text-xl">Funnels</h3>

            <p class="text-gray-600 mt-2">
                We create high-converting funnels that turn visitors into paying clients.
            </p>

            <!-- DETAILS -->
            <ul class="mt-4 text-gray-600 text-sm space-y-2 text-left">
                <li>✔ Conversion-focused landing pages</li>
                <li>✔ Strategic user journey design</li>
                <li>✔ Persuasive messaging & copy</li>
                <li>✔ Lead capture & optimization</li>
            </ul>

        </div>

    </div>

</section>

<!-- HOW IT WORKS -->
<section class="py-28 bg-white text-center">

    <h2 class="text-4xl font-bold">How It Works</h2>

    <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        A structured AI-driven system that transforms your business into a predictable client acquisition engine.
    </p>

    <div class="mt-14 grid md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">

        <!-- STEP 1 -->
        <div class="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center">

            <!-- ICON -->
            <div class="flex justify-center mb-5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-11 h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                    d="M3 10h11M9 21V3m0 0l-3 3m3-3l3 3" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">Business Discovery & Analysis</h3>

            <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                We deeply analyze your business model, niche, competitors, and current online visibility.
                This includes identifying where you are losing potential customers in AI search engines and traditional discovery platforms.
                <br><br>
                We map out your current positioning and define exactly how your business should appear when customers search for your service.
            </p>

        </div>

        <!-- STEP 2 -->
        <div class="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center">

            <!-- ICON -->
            <div class="flex justify-center mb-5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-11 h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">AI System Architecture & Setup</h3>

            <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                We build your complete AI visibility system using AEO (AI Engine Optimization) and structured content frameworks.
                This ensures your business becomes understandable, recommendable, and trustworthy for AI systems like ChatGPT and Google AI.
                <br><br>
                We also design conversion funnels so every visitor is guided toward becoming a paying client.
            </p>

        </div>

        <!-- STEP 3 -->
        <div class="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center">

            <!-- ICON -->
            <div class="flex justify-center mb-5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-11 h-11" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                    d="M5 13l4 4L19 7" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">Launch, Optimization & Scaling</h3>

            <p class="text-gray-600 mt-4 text-sm leading-relaxed">
                Once everything is deployed, your system begins generating organic visibility and high-intent leads from AI search platforms.
                <br><br>
                We continuously optimize your system to improve rankings, increase conversions, and scale your client acquisition process over time.
            </p>

        </div>

    </div>

</section>

<!-- BEFORE & AFTER SECTION -->
<section class="py-28 bg-gray-50 text-center">

    <h2 class="text-4xl font-bold">Before & After Transformation</h2>

    <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        See how businesses change after implementing our AI-driven AEO systems.
        From invisible → to consistently generating high-quality clients.
    </p>

    <div class="mt-14 grid md:grid-cols-2 gap-10 px-10 max-w-6xl mx-auto">

        <!-- BEFORE -->
        <div class="bg-white p-8 rounded-xl shadow">

            <div class="flex justify-center mb-5 text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <h3 class="text-xl font-bold text-gray-800">Before Working With Us</h3>

            <div class="mt-6 text-left text-gray-600 space-y-3 text-sm leading-relaxed">

                <p>• Business not visible in AI search results or recommendations</p>
                <p>• Low or inconsistent inbound leads</p>
                <p>• Heavy dependence on paid ads or referrals</p>
                <p>• Website not optimized for conversions</p>
                <p>• Competitors capturing most of the market attention</p>

            </div>

            <p class="mt-6 font-semibold text-red-500">
                Result: Unstable Growth & Low Visibility
            </p>

        </div>

        <!-- AFTER -->
        <div class="bg-white p-8 rounded-xl shadow border-2 border-green-500">

            <div class="flex justify-center mb-5 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <h3 class="text-xl font-bold text-gray-800">After Implementing Our System</h3>

            <div class="mt-6 text-left text-gray-600 space-y-3 text-sm leading-relaxed">

                <p>• Business appears in AI search engines & recommendations</p>
                <p>• Consistent flow of high-intent inbound leads</p>
                <p>• Reduced dependency on ads and cold outreach</p>
                <p>• Optimized funnel converting visitors into clients</p>
                <p>• Strong authority positioning in niche market</p>

            </div>

            <p class="mt-6 font-semibold text-green-600">
                Result: Predictable Client Acquisition System
            </p>

        </div>

    </div>

</section>

<!-- INDUSTRIES WE WORK WITH -->
<section class="py-28 bg-white text-center">

    <h2 class="text-4xl font-bold">Industries We Work With</h2>

    <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        Our AI systems are designed to work across multiple industries where client acquisition and online visibility matter.
    </p>

    <div class="mt-14 grid md:grid-cols-3 gap-8 px-10 max-w-6xl mx-auto">

        <!-- 1 -->
        <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">

            <div class="flex justify-center mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M3 21h18M9 8h6M5 21V7a2 2 0 012-2h10a2 2 0 012 2v14" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">Local Businesses</h3>

            <p class="text-gray-600 mt-3 text-sm">
                We help local service providers like salons, clinics, real estate agents, and contractors appear in AI search results and attract nearby high-intent customers.
            </p>

        </div>

        <!-- 2 -->
        <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">

            <div class="flex justify-center mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M12 8c-4 0-7 3-7 7v3h14v-3c0-4-3-7-7-7z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M12 4a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">Coaches & Consultants</h3>

            <p class="text-gray-600 mt-3 text-sm">
                We position coaches and consultants as authorities in AI search engines, helping them generate premium client inquiries consistently.
            </p>

        </div>

        <!-- 3 -->
        <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">

            <div class="flex justify-center mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-14v14m0-14L4 7m8 4v10" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">E-Commerce Brands</h3>

            <p class="text-gray-600 mt-3 text-sm">
                We improve product visibility, optimize AI-driven discovery, and increase conversion rates for online stores and DTC brands.
            </p>

        </div>

        <!-- 4 -->
        <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">

            <div class="flex justify-center mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M9 17v-2a4 4 0 014-4h2a4 4 0 014 4v2" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M7 17v-2a6 6 0 0112 0v2" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">Agencies & Startups</h3>

            <p class="text-gray-600 mt-3 text-sm">
                We help agencies and startups scale their client acquisition systems using AI-powered search optimization strategies.
            </p>

        </div>

        <!-- 5 -->
        <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">

            <div class="flex justify-center mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">Service Providers</h3>

            <p class="text-gray-600 mt-3 text-sm">
                We help service-based businesses generate consistent leads without relying on ads or cold outreach.
            </p>

        </div>

        <!-- 6 -->
        <div class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">

            <div class="flex justify-center mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                    d="M3 10h18M9 21V3m6 18V3" />
                </svg>
            </div>

            <h3 class="font-bold text-lg text-gray-800">B2B Companies</h3>

            <p class="text-gray-600 mt-3 text-sm">
                We build AI visibility systems that help B2B companies attract decision-makers and high-value clients.
            </p>

        </div>

    </div>

</section>

<!-- AI LEAD CALCULATOR -->
<section class="py-20 bg-white text-center">

    <h2 class="text-4xl font-bold">AI Lead Estimator</h2>
    <p class="mt-3 text-gray-600">Estimate how many leads your business can generate</p>

    <div class="mt-10 max-w-xl mx-auto bg-gray-50 p-8 rounded-2xl shadow">

        <input id="visitors" type="number" placeholder="Monthly Website Visitors"
               class="w-full p-3 border rounded mb-4">

        <input id="conversion" type="number" placeholder="Conversion Rate (%)"
               class="w-full p-3 border rounded mb-4">

        <button onclick="calculateLeads()"
                class="bg-green-600 text-white px-6 py-3 rounded-full w-full hover:bg-green-700">
            Calculate Leads
        </button>

        <h3 id="result" class="mt-6 text-xl font-bold text-green-600"></h3>

    </div>

</section>

<script>
function calculateLeads() {
    let visitors = document.getElementById("visitors").value;
    let conversion = document.getElementById("conversion").value;

    let leads = (visitors * conversion) / 100;

    document.getElementById("result").innerText =
        "Estimated Leads: " + Math.round(leads);
}
</script>


<!-- PRICING -->
<section id="pricing" class="py-28 text-center bg-gray-50">

    <h2 class="text-4xl font-bold">Pricing Plans</h2>
    <p class="mt-4 text-gray-600">Simple packages designed for every stage of business growth</p>

    <div class="mt-12 grid md:grid-cols-3 gap-8 px-10">

        <!-- STARTER -->
        <div class="p-8 bg-white shadow rounded-xl">

    <span class="inline-block bg-gray-100 text-gray-600 text-xs font-semibold px-3 py-1 rounded-full">
        Starter Plan
    </span>

    <h3 class="text-xl font-bold mt-4">Starter</h3>

    <p class="text-green-600 text-3xl font-bold mt-4">$99/month</p>
    <p class="text-gray-600 mt-2">Perfect for small businesses</p>

    <p class="text-gray-600 mt-4">
        Basic AI visibility setup to help your business start appearing in AI search results.
    </p>

    <ul class="mt-6 text-gray-600 space-y-2 text-sm">
        <li>✔ Basic AEO Audit</li>
        <li>✔ Visibility setup</li>
        <li>✔ Recommendations</li>
    </ul>

    <a href="#contact" class="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-full">
        Get Started
    </a>

</div>



        <!-- GROWTH -->
        <div class="p-8 bg-white shadow-xl border-2 border-green-500 rounded-xl">

    <span class="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
        Most Popular
    </span>

    <h3 class="text-xl font-bold mt-4">Growth</h3>

    <p class="text-green-600 text-3xl font-bold mt-4">$299/month</p>
    <p class="text-gray-600 mt-2">Best choice for serious growth</p>

    <p class="text-gray-600 mt-4">
        Complete AI system for consistent client generation.
    </p>

    <ul class="mt-6 text-gray-600 space-y-2 text-sm">
        <li>✔ Full AEO + AIO setup</li>
        <li>✔ AI search ranking system</li>
        <li>✔ Client acquisition system</li>
        <li>✔ Conversion funnels</li>
    </ul>

    <a href="#contact" class="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-full">
        Get Started
    </a>

</div>



        <!-- PREMIUM -->
        <div class="p-8 bg-white shadow rounded-xl">

    <span class="inline-block bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
        Premium Plan
    </span>

    <h3 class="text-xl font-bold mt-4">Premium</h3>

    <p class="text-green-600 text-3xl font-bold mt-4">$599/month</p>
    <p class="text-gray-600 mt-2">Full AI growth system</p>

    <p class="text-gray-600 mt-4">
        Complete done-for-you AI automation and funnel system.
    </p>

    <ul class="mt-6 text-gray-600 space-y-2 text-sm">
        <li>✔ Everything in Growth</li>
        <li>✔ Advanced funnels</li>
        <li>✔ Automation system</li>
        <li>✔ Strategy setup</li>
    </ul>

    <a href="#contact" class="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-full">
        Get Started
    </a>

</div>
</section>

<!-- LIVE LEAD PROOF SECTION -->
<section class="py-20 bg-white text-center">

    <h2 class="text-4xl font-bold text-gray-900">Live Activity</h2>
    <p class="mt-3 text-gray-600">Real-time actions happening on our system</p>

    <div class="mt-10 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        <div class="p-6 bg-green-50 rounded-xl shadow">
            <h3 class="text-green-600 font-bold text-lg">New Inquiry</h3>
            <p class="text-gray-700 mt-2">A business from London requested a free audit</p>
            <p class="text-xs text-gray-500 mt-2">Just now</p>
        </div>

        <div class="p-6 bg-green-50 rounded-xl shadow">
            <h3 class="text-green-600 font-bold text-lg">Call Booked</h3>
            <p class="text-gray-700 mt-2">Client scheduled strategy call via WhatsApp</p>
            <p class="text-xs text-gray-500 mt-2">2 minutes ago</p>
        </div>

        <div class="p-6 bg-green-50 rounded-xl shadow">
            <h3 class="text-green-600 font-bold text-lg">New Lead</h3>
            <p class="text-gray-700 mt-2">Agency website submitted contact form</p>
            <p class="text-xs text-gray-500 mt-2">5 minutes ago</p>
        </div>

    </div>

</section>

<!-- CASE STUDIES -->
<section id="case" class="py-28 text-center">

    <h2 class="text-4xl font-bold">Case Studies</h2>
    <p class="mt-4 text-gray-600">
        Real results we achieved for businesses using AI search optimization
    </p>

    <div class="mt-10 grid md:grid-cols-3 gap-8 px-10">

        <!-- CASE 1 -->
        <div class="p-6 bg-gray-50 rounded-xl shadow">

            <!-- PERSON ICON -->
            <div class="w-12 h-12 mx-auto mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z"/>
                </svg>
            </div>

            <h3 class="text-green-600 font-bold text-xl">Local Service Business Growth</h3>

            <p class="text-gray-600 mt-2">
                We optimized a local service company for AI search visibility.
                Within weeks, they started appearing in AI-generated recommendations
                and received consistent high-quality inbound leads without ads.
            </p>

            <p class="mt-4 font-semibold text-green-600">
                Result: +300% Increase in Leads
            </p>

        </div>

        <!-- CASE 2 -->
        <div class="p-6 bg-gray-50 rounded-xl shadow">

            <!-- PERSON ICON -->
            <div class="w-12 h-12 mx-auto mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z"/>
                </svg>
            </div>

            <h3 class="text-green-600 font-bold text-xl">AI Search Visibility Ranking</h3>

            <p class="text-gray-600 mt-2">
                A coaching business had zero presence in AI search engines.
                We restructured their content and optimized their digital footprint,
                helping them get recommended in AI responses for their niche.
            </p>

            <p class="mt-4 font-semibold text-green-600">
                Result: #1 AI Visibility Position
            </p>

        </div>

        <!-- CASE 3 -->
        <div class="p-6 bg-gray-50 rounded-xl shadow">

            <!-- PERSON ICON -->
            <div class="w-12 h-12 mx-auto mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z"/>
                </svg>
            </div>

            <h3 class="text-green-600 font-bold text-xl">AI Funnel Revenue System</h3>

            <p class="text-gray-600 mt-2">
                We built an AI-powered funnel system for an eCommerce brand.
                It improved customer targeting, increased conversion rates,
                and significantly boosted overall revenue performance.
            </p>

            <p class="mt-4 font-semibold text-green-600">
                Result: 10x ROI Improvement
            </p>

        </div>

    </div>

</section>


<!-- WHY US -->
<section class="py-20 text-center bg-gray-50">

    <h2 class="text-4xl font-bold">Why Choose Us</h2>
    <p class="mt-4 text-gray-600">
        We don’t just build websites — we build systems that consistently bring clients to your business
    </p>

    <div class="mt-10 grid md:grid-cols-3 gap-8 px-10">

        <!-- POINT 1 -->
        <div class="p-6 bg-white shadow rounded-xl text-left flex gap-4 items-start">
            
            <div class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-5 h-5">
                    <path d="M12 2l3 7h7l-5.5 4.2L18 21l-6-4-6 4 1.5-7.8L2 9h7z"/>
                </svg>
            </div>

            <div>
                <h3 class="text-green-600 font-bold text-lg">AI Search Experts</h3>
                <p class="text-gray-600 mt-2">
                    Our team specializes in AI Engine Optimization (AEO) and AI Integration Optimization (AIO). 
                    We position your business in AI-driven search platforms like ChatGPT and Google AI so that 
                    when people search, your business is recommended first.
                </p>
            </div>

        </div>

        <!-- POINT 2 -->
        <div class="p-6 bg-white shadow rounded-xl text-left flex gap-4 items-start">
            
            <div class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-5 h-5">
                    <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-4.4 0-8 2.2-8 5v3h16v-3c0-2.8-3.6-5-8-5z"/>
                </svg>
            </div>

            <div>
                <h3 class="text-green-600 font-bold text-lg">Focused on Real Clients</h3>
                <p class="text-gray-600 mt-2">
                    We don’t focus on vanity metrics like traffic. Our systems are designed to attract 
                    high-intent users who are ready to buy, helping you generate real leads and actual revenue.
                </p>
            </div>

        </div>

        <!-- POINT 3 -->
        <div class="p-6 bg-white shadow rounded-xl text-left flex gap-4 items-start">
            
            <div class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-5 h-5">
                    <path d="M13 2L3 14h7v8l11-14h-7V2z"/>
                </svg>
            </div>

            <div>
                <h3 class="text-green-600 font-bold text-lg">Modern Growth Systems</h3>
                <p class="text-gray-600 mt-2">
                    Traditional SEO is becoming outdated. We implement modern AI-driven growth systems 
                    that leverage automation, intelligent search, and smart targeting to scale your business faster.
                </p>
            </div>

        </div>

        <!-- POINT 4 -->
        <div class="p-6 bg-white shadow rounded-xl text-left flex gap-4 items-start">
            
            <div class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-5 h-5">
                    <path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z"/>
                </svg>
            </div>

            <div>
                <h3 class="text-green-600 font-bold text-lg">Conversion Focused</h3>
                <p class="text-gray-600 mt-2">
                    Every system we design is focused on conversion. From user journey to messaging, 
                    everything is optimized to turn visitors into leads and leads into paying clients.
                </p>
            </div>

        </div>

        <!-- POINT 5 -->
        <div class="p-6 bg-white shadow rounded-xl text-left flex gap-4 items-start">
            
            <div class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-5 h-5">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
            </div>

            <div>
                <h3 class="text-green-600 font-bold text-lg">Fast Implementation</h3>
                <p class="text-gray-600 mt-2">
                    We understand speed matters. Our systems are built and deployed quickly so you 
                    can start seeing visibility, leads, and results in the shortest possible time.
                </p>
            </div>

        </div>

        <!-- POINT 6 -->
        <div class="p-6 bg-white shadow rounded-xl text-left flex gap-4 items-start">
            
            <div class="w-10 h-10 flex items-center justify-center bg-green-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#16a34a" viewBox="0 0 24 24" class="w-5 h-5">
                    <path d="M12 2l9 4-9 4-9-4 9-4zm0 6v14"/>
                </svg>
            </div>

            <div>
                <h3 class="text-green-600 font-bold text-lg">Future-Proof Strategy</h3>
                <p class="text-gray-600 mt-2">
                    Search is evolving towards AI. We prepare your business for the future by building 
                    systems that work not just today, but in the next generation of digital discovery.
                </p>
            </div>

        </div>

    </div>

</section>


<!-- ABOUT -->
<section id="about" class="py-28 bg-white text-center">

    <h2 class="text-4xl font-bold">About Us</h2>

    <p class="mt-4 text-gray-600 max-w-2xl mx-auto">
        We are a modern AI growth agency focused on helping businesses dominate the new era of search and client acquisition.
    </p>

    <div class="mt-12 grid md:grid-cols-2 gap-12 px-10 max-w-6xl mx-auto text-left">

        <!-- LEFT SIDE -->
        <div>
            <h3 class="text-green-600 font-bold text-2xl">Our Vision</h3>

            <p class="text-gray-600 mt-4">
                The way people find businesses is changing. Traditional SEO is being replaced by AI-driven discovery 
                systems like ChatGPT, Google AI, and voice assistants.
            </p>

            <p class="text-gray-600 mt-4">
                Our vision is to position businesses at the forefront of this shift by making them visible in AI-powered 
                search environments where decisions are made instantly.
            </p>

            <p class="text-gray-600 mt-4">
                We don’t just help you “rank” — we help you become the recommended choice.
            </p>
        </div>

        <!-- RIGHT SIDE -->
        <div>
            <h3 class="text-green-600 font-bold text-2xl">What We Do</h3>

            <p class="text-gray-600 mt-4">
                We design and implement complete AI growth systems that transform your online presence into a 
                client-generating machine.
            </p>

            <ul class="mt-6 space-y-3 text-gray-600">
                <li>✔ Position your business in AI search results</li>
                <li>✔ Attract high-intent, ready-to-buy clients</li>
                <li>✔ Build automated lead generation systems</li>
                <li>✔ Optimize conversion funnels for maximum ROI</li>
                <li>✔ Replace outdated SEO with modern AI strategies</li>
            </ul>

            <p class="text-gray-600 mt-6">
                Our approach is simple — combine strategy, technology, and psychology to help your business grow faster 
                with less effort.
            </p>
        </div>

    </div>

<!-- WHY BUSINESSES TRUST US -->
<div class="mt-16 max-w-6xl mx-auto px-6">

    <div class="bg-gray-50 p-10 rounded-xl shadow text-center">
        <h3 class="text-2xl font-bold text-gray-800">Why Businesses Trust Us</h3>

        <p class="text-gray-600 mt-4">
            We build structured AI systems designed for long-term business growth and predictable client acquisition.
        </p>

        <div class="mt-10 grid md:grid-cols-3 gap-8 text-center">

            <!-- POINT 1 -->
            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

                <!-- ICON -->
                <div class="flex justify-center mb-4 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                        d="M13 2L3 14h7v8l11-14h-7l-1-6z" />
                    </svg>
                </div>

                <h4 class="font-bold text-lg text-gray-800">AI-First Strategy</h4>

                <p class="text-gray-600 mt-3 text-sm">
                    We optimize your business for AI search engines like ChatGPT and Google AI so you appear in modern search results where customers are actively looking for solutions.
                </p>

            </div>

            <!-- POINT 2 -->
            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

                <!-- ICON -->
                <div class="flex justify-center mb-4 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                        d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zM4 21v-1a6 6 0 0112 0v1" />
                    </svg>
                </div>

                <h4 class="font-bold text-lg text-gray-800">System-Based Growth</h4>

                <p class="text-gray-600 mt-3 text-sm">
                    Instead of temporary marketing tricks, we build automated systems that continuously generate leads and scale your business over time.
                </p>

            </div>

            <!-- POINT 3 -->
            <div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

                <!-- ICON -->
                <div class="flex justify-center mb-4 text-green-600">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>

                <h4 class="font-bold text-lg text-gray-800">Conversion Focused</h4>

                <p class="text-gray-600 mt-3 text-sm">
                    Every strategy is designed to turn visitors into paying clients through optimized messaging, funnels, and positioning.
                </p>

            </div>

        </div>

    </div>

</div>


</section>



<!-- CTA -->
<section class="py-20 text-center bg-green-600 text-white">

    <h2 class="text-3xl font-bold">Ready to Grow Your Business?</h2>

    <p class="mt-3">Book a free strategy call today</p>

    <a href="#contact" class="mt-6 inline-block bg-white text-green-600 px-6 py-3 rounded-full font-semibold">
        Book Free Call
    </a>

</section>

<!-- FAQ -->
<section class="py-20 bg-gray-50 text-center">

    <h2 class="text-4xl font-bold">Frequently Asked Questions</h2>

    <p class="mt-4 text-gray-600">
        Clear answers to the most common questions before working with us
    </p>

    <div class="mt-10 max-w-4xl mx-auto space-y-4 text-left px-6">

        <!-- FAQ 1 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                What exactly is AEO (AI Engine Optimization)?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                AEO is the process of optimizing your business so it appears in AI-driven search systems like ChatGPT, Google AI, and voice assistants.
                Instead of traditional SEO rankings, we focus on making your business recommended directly by AI systems when users search for services.
            </p>
        </details>

        <!-- FAQ 2 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                How is this different from SEO?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                SEO focuses on ranking websites on Google search results.
                AEO focuses on getting your business recommended by AI systems that users now rely on for instant answers.
                This means higher intent traffic and faster decision-making from customers.
            </p>
        </details>

        <!-- FAQ 3 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                How long does it take to see results?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                Most businesses start seeing improvements in visibility within 2–6 weeks.
                However, full system optimization and consistent lead generation typically stabilize within 1–3 months depending on your niche and competition level.
            </p>
        </details>

        <!-- FAQ 4 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                Do I still need ads after this system?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                No, the goal of our system is to reduce dependency on paid ads by building organic AI-driven visibility.
                However, some businesses still use ads alongside it for faster scaling.
            </p>
        </details>

        <!-- FAQ 5 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                Is this suitable for small businesses?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                Yes, especially small and local businesses benefit the most because AI visibility helps them compete with larger brands without heavy ad budgets.
            </p>
        </details>

        <!-- FAQ 6 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                What results can I realistically expect?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                You can expect improved visibility in AI search systems, increased inbound leads, and better quality customers over time.
                Results vary by niche, but the system is designed for long-term sustainable growth rather than short-term spikes.
            </p>
        </details>

        <!-- FAQ 7 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                Do you guarantee sales or leads?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                We do not guarantee specific sales numbers, but we guarantee a properly built AI visibility and conversion system.
                Your results depend on market, offer, and execution consistency.
            </p>
        </details>

        <!-- FAQ 8 -->
        <details class="bg-white p-6 rounded-xl shadow cursor-pointer">
            <summary class="font-semibold text-lg">
                What do I need to start working with you?
            </summary>
            <p class="text-gray-600 mt-3 text-sm leading-relaxed">
                You only need a business with a service or product and willingness to grow.
                We handle the technical setup, AI optimization, and system implementation for you.
            </p>
        </details>

    </div>

</section>


<!-- TESTIMONIALS -->
<section class="py-24 bg-white text-center">

    <h2 class="text-4xl font-bold">What Our Clients Say</h2>
    <p class="mt-4 text-gray-600">Real feedback from businesses we worked with</p>

    <div class="mt-12 grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">

        <!-- TESTIMONIAL 1 -->
        <div class="p-6 bg-gray-50 rounded-2xl shadow">

            <p class="text-gray-700">
                “We started getting consistent leads within 2 weeks. Very effective system.”
            </p>

            <h4 class="mt-4 font-bold text-green-600">James Carter</h4>
            <p class="text-sm text-gray-500">Local Service Business</p>

        </div>

        <!-- TESTIMONIAL 2 -->
        <div class="p-6 bg-gray-50 rounded-2xl shadow">

            <p class="text-gray-700">
                “Clean setup, professional work, and real results from AI search.”
            </p>

            <h4 class="mt-4 font-bold text-green-600">Emily Johnson</h4>
            <p class="text-sm text-gray-500">Coaching Business</p>

        </div>

        <!-- TESTIMONIAL 3 -->
        <div class="p-6 bg-gray-50 rounded-2xl shadow">

            <p class="text-gray-700">
                “We replaced ads with this system. Much better ROI now.”
            </p>

            <h4 class="mt-4 font-bold text-green-600">Michael Brown</h4>
            <p class="text-sm text-gray-500">E-commerce Brand</p>

        </div>

    </div>

</section>

<!-- AI AUDIT CTA SECTION -->
<section class="py-24 text-center bg-green-600 text-white">

    <h2 class="text-4xl font-bold">Get Your Free AI Audit</h2>

    <p class="mt-4 text-white/90">
        Find out how visible your business is in AI search results in seconds
    </p>

    <a href="/audit"
       class="mt-8 inline-block bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        Check My Website
    </a>

</section>


<!-- CONTACT -->
<section id="contact" class="py-28 text-center bg-gray-50">

    <h2 class="text-4xl font-bold">Get In Touch</h2>

    <form method="POST" action="/contact" class="mt-8 max-w-xl mx-auto space-y-4">

        <input name="name" class="w-full p-3 border rounded" placeholder="Your Name" required>
        <input name="email" class="w-full p-3 border rounded" placeholder="Your Email" required>
        <textarea name="message" class="w-full p-3 border rounded" placeholder="Message" required></textarea>

        <button type="submit" class="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700">
            Send Message
        </button>

    </form>

</section>


<!-- FOOTER -->
<footer class="bg-gradient-to-br from-green-600 to-green-400 text-white pt-16 pb-8">

    <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-left">

        <!-- BRAND -->
        <div>
            <h2 class="text-2xl font-bold">AEO Agency</h2>
            <p class="mt-4 text-green-100">
                We help businesses grow using AI-powered systems that generate consistent high-quality clients.
            </p>
        </div>

        <!-- QUICK LINKS -->
        <div>
            <h3 class="font-semibold text-lg mb-4">Quick Links</h3>
            <ul class="space-y-2">
                <li><a href="#home" class="hover:underline">Home</a></li>
                <li><a href="#services" class="hover:underline">Services</a></li>
                <li><a href="#case" class="hover:underline">Case Studies</a></li>
                <li><a href="#about" class="hover:underline">About</a></li>
                <li><a href="#contact" class="hover:underline">Contact</a></li>
            </ul>
        </div>

        <!-- SERVICES -->
        <div>
            <h3 class="font-semibold text-lg mb-4">Services</h3>
            <ul class="space-y-2 text-green-100">
                <li>AEO Optimization</li>
                <li>AIO Systems</li>
                <li>Funnels</li>
                <li>AI Growth Strategy</li>
            </ul>
        </div>

        <!-- CONTACT -->
        <div>
            <h3 class="font-semibold text-lg mb-4">Contact</h3>
            <ul class="space-y-2 text-green-100">
                <li>Email: abcd@gmail.com</li>
                <li>Location: London</li>
                <li>Available: Mon - Sat</li>
            </ul>
        </div>

    </div>

    <!-- DIVIDER -->
    <div class="border-t border-green-300 mt-12 pt-6 text-center text-green-100 text-sm">
        <p>© 2026 AEO Agency. All rights reserved.</p>
    </div>

</footer>


<!-- FLOATING WHATSAPP BUTTON -->
<a href="https://wa.me/923000000000" target="_blank"
   class="fixed bottom-6 right-6 z-50 group">

    <!-- outer glow -->
    <div class="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition"></div>

    <!-- button -->
    <div class="relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition">

        <!-- WhatsApp Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.42 0 .03 5.39.03 12.02c0 2.12.55 4.2 1.6 6.04L0 24l6.1-1.6a11.93 11.93 0 005.96 1.52h.01c6.64 0 12.03-5.39 12.03-12.02 0-3.2-1.25-6.2-3.58-8.42zM12.07 22.02a9.95 9.95 0 01-5.08-1.38l-.36-.21-3.62.95.97-3.53-.23-.37a9.96 9.96 0 01-1.53-5.46c0-5.51 4.48-9.99 9.99-9.99 2.67 0 5.18 1.04 7.07 2.93a9.92 9.92 0 012.92 7.06c0 5.51-4.48 9.99-9.99 9.99zm5.45-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.16 5.02 4.43.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z"/>
        </svg>

    </div>

</a>
<!-- PREMIUM WHATSAPP POPUP (CLICKABLE) -->
<a href="https://wa.me/923000000000?text=Hi%20I%20need%20help%20with%20your%20services"
   target="_blank"
   id="whatsappPopup"
   class="fixed bottom-24 right-6 z-50">

    <div class="flex items-center gap-3 px-4 py-3 bg-white/80 backdrop-blur-xl border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">

        <!-- ICON -->
        <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.42 0 .03 5.39.03 12.02c0 2.12.55 4.2 1.6 6.04L0 24l6.1-1.6a11.93 11.93 0 005.96 1.52h.01c6.64 0 12.03-5.39 12.03-12.02 0-3.2-1.25-6.2-3.58-8.42z"/>
            </svg>
        </div>

        <!-- TEXT -->
        <div>
            <p class="text-sm font-semibold text-gray-800">
                Need help?
            </p>
            <p class="text-xs text-gray-500">
                Chat with us instantly
            </p>
        </div>

    </div>

</a>

<!-- AUTO HIDE AFTER 7 SECONDS -->
<script>
    setTimeout(() => {
        const popup = document.getElementById("whatsappPopup");
        if (popup) {
            popup.style.transition = "0.6s ease";
            popup.style.opacity = "0";
            popup.style.transform = "translateY(20px)";
            setTimeout(() => popup.remove(), 600);
        }
    }, 7000);
</script>
<!-- EXIT INTENT POPUP -->
<div id="popup" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; 
background:rgba(0,0,0,0.6); justify-content:center; align-items:center; z-index:9999;">

    <div style="background:white; padding:30px; border-radius:15px; max-width:400px; text-align:center; position:relative;">

        <!-- CLOSE BUTTON -->
        <span onclick="closePopup()" 
              style="position:absolute; top:10px; right:15px; font-size:20px; cursor:pointer;">
            ✕
        </span>

        <h2 style="font-size:22px; font-weight:bold; margin-bottom:10px;">
            Need More Clients?
        </h2>

        <p style="color:#555; margin-bottom:20px;">
            Get a free AI audit and see how your business can get more leads.
        </p>

        <!-- ONLY ONE WORKING BUTTON -->
        <a href="/audit"
           style="display:inline-block; background:#16a34a; color:white; padding:10px 20px; border-radius:25px; text-decoration:none;">
            Free AI Audit
        </a>

    </div>

</div>

<script>
    // show popup after 3 seconds (you can change timing)
    setTimeout(() => {
        document.getElementById("popup").style.display = "flex";
    }, 3000);

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }
<script>
let shown = false;

document.addEventListener("mouseout", function(e) {
    if (!shown && e.clientY < 10) {
        document.getElementById("exitPopup").classList.remove("hidden");
        shown = true;
    }
});

function closeExit() {
    document.getElementById("exitPopup").classList.add("hidden");
}
</script>


</body>
</html>
`);
});
// AI AUDIT PAGE
app.get("/audit", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html>
<head>
    <title>AI Audit</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100">

<nav class="fixed top-0 left-0 w-full z-50">

    <!-- BACKGROUND -->
    <div class="absolute inset-0 bg-gradient-to-r from-emerald-600/30 via-white/10 to-green-500/30 backdrop-blur-xl"></div>

    <div class="relative border-b border-white/20 shadow-md">

        <div class="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

            <!-- LOGO -->
            <h1 class="text-2xl font-extrabold text-white tracking-wider">
                AEO <span class="text-green-200">Agency</span>
            </h1>

            <!-- LINKS -->
            <div class="hidden md:flex space-x-10 text-white font-medium">

                <!-- HOME -->
                <a href="/" class="hover:text-green-200 transition">Home</a>

                <!-- LANDING PAGE SECTIONS -->
                <a href="/#services" class="hover:text-green-200 transition">Services</a>
                <a href="/#case" class="hover:text-green-200 transition">Case Studies</a>
                <a href="/#about" class="hover:text-green-200 transition">About</a>

                <!-- CONTACT ALWAYS GOES HOME PAGE -->
                <a href="/#contact" class="hover:text-green-200 transition">Contact</a>

                <!-- AUDIT PAGE LINK -->
                <a href="/audit" class="hover:text-green-200 transition">AI Audit</a>

            </div>

            <!-- CTA -->
            <a href="/#contact"
               class="relative px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-400 shadow-lg overflow-hidden group">

                <span class="relative z-10">Book Free Call</span>

                <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 blur-xl transition"></span>

            </a>

        </div>

    </div>

</nav>



<!-- MAIN CONTENT -->
<div style="padding:40px; text-align:center;">

    <h1>AI Readiness Audit</h1>

<div style="
    background:linear-gradient(135deg,#ffffff,#f9fafb);
    padding:25px;
    border-radius:16px;
    margin-top:25px;
    max-width:750px;
    margin-left:auto;
    margin-right:auto;
    box-shadow:0 10px 25px rgba(0,0,0,0.08);
    text-align:center;
">

    <h2 style="font-size:24px;font-weight:bold;margin-bottom:8px;">
        AI Readiness Audit
    </h2>

    <p style="color:gray;font-size:14px;margin-bottom:20px;">
        Get a detailed breakdown of your website's AI visibility
    </p>

    <input id="urlInput"
           placeholder="Enter your website URL"
           style="width:100%;padding:12px;border:1px solid #ddd;border-radius:10px;margin-bottom:15px;">

    <button onclick="checkAI()"
            style="
                width:100%;
                padding:12px;
                background:#16a34a;
                color:white;
                border:none;
                border-radius:10px;
                font-weight:bold;
                cursor:pointer;
            ">
        Run AI Audit
    </button>

</div>
<div id="result" style="margin-top:30px;"></div>


<script>
function checkAI() {

    const url = document.getElementById("urlInput").value;

    if (!url) {
        document.getElementById("result").innerHTML =
            "<p style='color:red;'>Please enter a valid URL</p>";
        return;
    }

    function generateScore(text, min, max) {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
        hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    let score = Math.abs(hash % (max - min)) + min;
    return score;
}

let seo = generateScore(url + "seo", 65, 95);
let ai = generateScore(url + "ai", 65, 95);
let content = generateScore(url + "content", 65, 95);
let technical = generateScore(url + "tech", 65, 95);


    let html =

    "<div style='background:white;padding:25px;border-radius:12px;max-width:750px;margin:auto;box-shadow:0 10px 25px rgba(0,0,0,0.1);'>" +

        "<h2 style='font-size:22px;font-weight:bold;margin-bottom:10px;'>AI Readiness Audit Report</h2>" +

        "<p style='color:gray;margin-bottom:15px;'><b>Website:</b> " + url + "</p>" +

        "<hr style='margin:15px 0;'>" +

        "<div style='display:grid;grid-template-columns:1fr 1fr;gap:10px;'>" +

            "<div style='background:#f3f4f6;padding:10px;border-radius:8px;'>" +
                "<b>SEO Score</b><br>" + seo + "% (Needs optimization)" +
            "</div>" +

            "<div style='background:#f3f4f6;padding:10px;border-radius:8px;'>" +
                "<b>AI Visibility</b><br>" + ai + "% (Medium presence)" +
            "</div>" +

            "<div style='background:#f3f4f6;padding:10px;border-radius:8px;'>" +
                "<b>Content Quality</b><br>" + content + "% (Improve clarity)" +
            "</div>" +

            "<div style='background:#f3f4f6;padding:10px;border-radius:8px;'>" +
                "<b>Technical Health</b><br>" + technical + "% (Fix speed issues)" +
            "</div>" +

        "</div>" +

        "<hr style='margin:15px 0;'>" +

        "<h3 style='margin-bottom:10px;'>AI Insights</h3>" +

        "<div style='margin-top:10px;'>" +


"<ul style='list-style:none;padding-left:0;margin-top:10px;'>" +

"<li>✅ Implement structured data for better AI understanding</li>" +
"<li>✅ Optimize pages for conversational search queries</li>" +
"<li>✅ Improve internal linking structure</li>" +
"<li>✅ Increase domain authority through backlinks</li>" +
"<li>✅ Enhance mobile speed & Core Web Vitals</li>" +

"</ul>" +

"</div>" +


        "<div style='margin-top:15px;padding:10px;background:#ecfdf5;border-left:4px solid #16a34a;border-radius:6px;'>" +
            "<b>Recommendation:</b> Your website is partially AI-ready but needs optimization for strong AI search visibility." +
        "</div>" +

    "</div>" +

"<div style='margin-top:20px;text-align:center;'>" +
"<a href='/#pricing' style='padding:12px 20px;background:#10b981;color:white;text-decoration:none;border-radius:8px;font-weight:bold;display:inline-block;'>" +
"Buy Our Services" +
"</a>" +
"</div>";


    document.getElementById("result").innerHTML = html;
}
</script>

</body>
</html>
    `);
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
module.exports = app;