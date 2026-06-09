/* Pipeline Partners. Home page behaviour. No em or en dashes anywhere. */
(function () {
  "use strict";
  var PP = window.PP || { verticals: [], faq: [], brand: {} };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Year ---------- */
  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Render vertical pillars (asymmetric, config driven) ---------- */
  var pillars = document.getElementById("pillars");
  if (pillars) {
    pillars.innerHTML = PP.verticals.map(function (v, i) {
      var idx = (i + 1 < 10 ? "0" : "") + (i + 1);
      return (
        '<a class="pillar reveal" data-d="' + Math.min(i + 1, 4) + '" role="listitem" href="vertical.html?vertical=' + v.slug + '">' +
          "<div>" +
            '<span class="p-index">' + idx + " / " + escapeHtml(v.short) + "</span>" +
            "<h3>" + escapeHtml(v.name) + "</h3>" +
            '<p class="p-one">' + escapeHtml(v.oneLiner) + "</p>" +
            '<p class="p-eg">' + escapeHtml(v.examples) + "</p>" +
          "</div>" +
          '<span class="p-link">Exclusive ' + escapeHtml(v.short.toLowerCase()) + ' leads <span class="arrow" aria-hidden="true">&rarr;</span></span>' +
        "</a>"
      );
    }).join("");
  }

  /* ---------- Footer industries ---------- */
  var fv = document.getElementById("footerVerticals");
  if (fv) {
    fv.innerHTML = PP.verticals.map(function (v) {
      return '<li><a href="vertical.html?vertical=' + v.slug + '">' + escapeHtml(v.name) + "</a></li>";
    }).join("");
  }

  /* ---------- FAQ (config driven) + accordion ---------- */
  var faqList = document.getElementById("faqList");
  if (faqList) {
    faqList.innerHTML = PP.faq.map(function (item, i) {
      return (
        '<div class="faq-item">' +
          '<button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '">' +
            "<span>" + escapeHtml(item.q) + "</span>" +
            '<span class="pm" aria-hidden="true"></span>' +
          "</button>" +
          '<div class="faq-a" id="faq-a-' + i + '" role="region">' +
            '<div class="faq-a-inner">' + escapeHtml(item.a) + "</div>" +
          "</div>" +
        "</div>"
      );
    }).join("");

    faqList.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var item = btn.parentElement;
      var ans = item.querySelector(".faq-a");
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      ans.style.height = open ? ans.firstElementChild.offsetHeight + "px" : "0px";
    });
  }

  /* ---------- JSON-LD from config (ProfessionalService + FAQPage) ---------- */
  injectLd({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: PP.brand.name,
    slogan: PP.brand.motto,
    description: "Done for you, exclusive lead generation. We run all the marketing and guarantee a monthly minimum in writing. No leads, no pay.",
    url: PP.brand.domain,
    serviceType: "Lead generation",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Lead generation by industry",
      itemListElement: PP.verticals.map(function (v) {
        return {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Exclusive " + v.keyword + " lead generation",
            serviceType: "Lead generation"
          }
        };
      })
    }
  });
  injectLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PP.faq.map(function (f) {
      return { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } };
    })
  });

  /* ---------- Nav background on scroll ---------- */
  var nav = document.getElementById("nav");
  if (nav) {
    var onScrollNav = function () { nav.classList.toggle("scrolled", window.scrollY > 24); };
    onScrollNav();
    window.addEventListener("scroll", onScrollNav, { passive: true });
  }

  /* ---------- Scroll reveal + connector draw ---------- */
  var revealEls = function () { return Array.prototype.slice.call(document.querySelectorAll(".reveal")); };
  if ("IntersectionObserver" in window && !reduceMotion) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    revealEls().forEach(function (el) { io.observe(el); });

    var fl = document.querySelector(".flowline");
    if (fl) {
      var io2 = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("drawn"); io2.unobserve(en.target); } });
      }, { threshold: 0.4 });
      io2.observe(fl);
    }
  } else {
    revealEls().forEach(function (el) { el.classList.add("in"); });
    var fl2 = document.querySelector(".flowline");
    if (fl2) fl2.classList.add("drawn");
  }

  /* ---------- Restrained parallax on the hero flow ---------- */
  var stage = document.querySelector(".flowstage");
  if (stage && !reduceMotion) {
    var ticking = false;
    window.addEventListener("scroll", function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        if (y < window.innerHeight) stage.style.transform = "translateY(" + (y * 0.06) + "px)";
        ticking = false;
      });
    }, { passive: true });
  }

  /* ---------- Signature: send leads along the pipes ---------- */
  buildLeadFlow();

  /* ---------- GoHighLevel embed loader ---------- */
  loadGhl(document.getElementById("ghlSlot"));

  /* ---------- Analytics: fire generate_lead on GHL submit ---------- */
  window.addEventListener("message", function (e) {
    var host = String(e.origin || "");
    if (host.indexOf("leadconnectorhq") === -1 && host.indexOf("msgsndr") === -1) return;
    var d = e.data;
    var isSubmit = d && (d.type === "form-submitted" || (typeof d === "string" && d.indexOf("submit") !== -1));
    if (isSubmit) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "generate_lead" });
      // Google Ads conversion can also be fired here once AW-XXXXXXXXXX is set.
    }
  });

  /* ================= helpers ================= */

  function buildLeadFlow() {
    var svg = document.querySelector(".flowstage svg");
    if (!svg) return;
    var dotsGroup = svg.querySelector(".dots");
    var pipes = Array.prototype.slice.call(svg.querySelectorAll(".pipe"));
    if (!dotsGroup || !pipes.length) return;

    var SVGNS = "http://www.w3.org/2000/svg";
    var XLINK = "http://www.w3.org/1999/xlink";

    // how many leads ride each pipe, and their pacing
    var plan = [
      { pipe: 0, dur: 3.6, begin: -0.2, r: 4.5 },
      { pipe: 0, dur: 3.6, begin: -2.0, r: 3.4 },
      { pipe: 1, dur: 3.2, begin: -1.1, r: 4.2 },
      { pipe: 2, dur: 4.0, begin: -0.6, r: 4.0 },
      { pipe: 3, dur: 3.8, begin: -2.4, r: 3.6 },
      { pipe: 4, dur: 3.4, begin: -1.6, r: 4.2 }
    ];

    plan.forEach(function (cfg, n) {
      var pipe = pipes[cfg.pipe];
      if (!pipe) return;
      if (!pipe.id) pipe.id = "pipe-" + cfg.pipe;

      var dot = document.createElementNS(SVGNS, "circle");
      dot.setAttribute("class", "lead-dot");
      dot.setAttribute("r", cfg.r);
      dot.setAttribute("cx", "0");
      dot.setAttribute("cy", "0");

      // motion along the exact pipe path (SMIL animateMotion = transform under the hood)
      var motion = document.createElementNS(SVGNS, "animateMotion");
      motion.setAttribute("dur", cfg.dur + "s");
      motion.setAttribute("begin", cfg.begin + "s");
      motion.setAttribute("repeatCount", "indefinite");
      motion.setAttribute("rotate", "0");
      motion.setAttribute("calcMode", "spline");
      motion.setAttribute("keyTimes", "0;1");
      motion.setAttribute("keyPoints", "0;1");
      motion.setAttribute("keySplines", "0.45 0 0.55 1");
      var mpath = document.createElementNS(SVGNS, "mpath");
      mpath.setAttributeNS(XLINK, "xlink:href", "#" + pipe.id);
      mpath.setAttribute("href", "#" + pipe.id);
      motion.appendChild(mpath);

      // fade in as it enters, fade as it arrives at the phone
      var fade = document.createElementNS(SVGNS, "animate");
      fade.setAttribute("attributeName", "opacity");
      fade.setAttribute("dur", cfg.dur + "s");
      fade.setAttribute("begin", cfg.begin + "s");
      fade.setAttribute("repeatCount", "indefinite");
      fade.setAttribute("values", "0;1;1;0.85;0");
      fade.setAttribute("keyTimes", "0;0.12;0.82;0.94;1");

      dot.appendChild(motion);
      dot.appendChild(fade);
      dotsGroup.appendChild(dot);
    });
  }

  function loadGhl(slot) {
    if (!slot) return;
    var id = slot.getAttribute("data-form-id");
    if (!id || id === "YOUR_FORM_ID") return; // keep tidy placeholder until a real id is set
    slot.innerHTML = "";
    var iframe = document.createElement("iframe");
    iframe.src = "https://api.leadconnectorhq.com/widget/form/" + id;
    iframe.id = "inline-" + id;
    iframe.title = "Pipeline Partners enquiry";
    iframe.setAttribute("data-form-id", id);
    iframe.setAttribute("data-layout", "{'id':'INLINE'}");
    iframe.style.width = "100%";
    iframe.style.border = "none";
    iframe.style.borderRadius = "14px";
    slot.appendChild(iframe);
  }

  function injectLd(obj) {
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.text = JSON.stringify(obj);
    document.head.appendChild(s);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
})();
