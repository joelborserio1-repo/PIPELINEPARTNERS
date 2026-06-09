/* Pipeline Partners. Per vertical landing page. No em or en dashes anywhere. */
(function () {
  "use strict";
  var PP = window.PP || { verticals: [], faq: [], brand: {} };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Resolve the vertical from the query string ---------- */
  var params = new URLSearchParams(window.location.search);
  var slug = (params.get("vertical") || "").toLowerCase();
  var v = PP.verticals.filter(function (x) { return x.slug === slug; })[0];

  // Footer industries always render.
  var fv = document.getElementById("footerVerticals");
  if (fv) {
    fv.innerHTML = PP.verticals.map(function (x) {
      return '<li><a href="vertical.html?vertical=' + x.slug + '">' + esc(x.name) + "</a></li>";
    }).join("");
  }

  if (!v) {
    // Unknown or missing slug: keep the page usable with a clear chooser.
    var headline = document.getElementById("vHeadline");
    var lead = document.getElementById("vLead");
    if (headline) headline.textContent = "Pick your industry.";
    if (lead) {
      lead.innerHTML = "Exclusive, guaranteed leads, done for you. Choose where you want more work: " +
        PP.verticals.map(function (x) {
          return '<a href="vertical.html?vertical=' + x.slug + '" style="color:var(--orange-lt);font-weight:700">' + esc(x.name) + "</a>";
        }).join(", ") + ".";
    }
  } else {
    fillVertical(v);
  }

  renderFaq();
  initBehaviour();

  /* ================= rendering ================= */

  function fillVertical(v) {
    // Meta (set at runtime; for production, prefer static per vertical tags).
    document.title = v.metaTitle;
    setMeta('meta[name="description"]', v.metaDescription);
    setAttr("ogTitle", "content", v.metaTitle.replace(" | Pipeline Partners", ""));
    setAttr("ogDesc", "content", v.metaDescription);
    var dom = (PP.brand.domain || "").replace(/\/$/, "");
    setAttr("canonical", "href", dom + "/vertical.html?vertical=" + v.slug);

    text("vHeadline", v.h1);
    html("vLead", "We run all the marketing for " + esc(v.keyword) +
      ". Every lead is yours alone, never shared, never resold to a competitor. Hit the agreed minimum or you only pay for what arrives. No leads, no pay.");
    text("vSub", v.heroLine);
    text("cmpHead", "Exclusive " + v.keyword + " leads beat shared, plainly.");
    text("formHead", "Claim your " + lower(v.short) + " area.");
    html("formLead", "One business per area for " + esc(v.keyword) +
      ". Tell us where you are and what you do. If your area is open, we will say so on the call.");
    text("finalHead", "Keep the work flowing.");

    // Per vertical GoHighLevel form id.
    var slot = document.getElementById("ghlSlot");
    if (slot && v.ghlFormId) slot.setAttribute("data-form-id", v.ghlFormId);
  }

  function renderFaq() {
    var faqList = document.getElementById("faqList");
    if (!faqList) return;
    faqList.innerHTML = PP.faq.map(function (item, i) {
      return '<div class="faq-item">' +
        '<button class="faq-q" aria-expanded="false" aria-controls="faq-a-' + i + '"><span>' + esc(item.q) +
        '</span><span class="pm" aria-hidden="true"></span></button>' +
        '<div class="faq-a" id="faq-a-' + i + '" role="region"><div class="faq-a-inner">' + esc(item.a) + "</div></div></div>";
    }).join("");
    faqList.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var item = btn.parentElement, ans = item.querySelector(".faq-a");
      var open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      ans.style.height = open ? ans.firstElementChild.offsetHeight + "px" : "0px";
    });

    // FAQPage JSON-LD from the shared config.
    var ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.text = JSON.stringify({
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: PP.faq.map(function (f) {
        return { "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } };
      })
    });
    document.head.appendChild(ld);
  }

  /* ================= behaviour (shared with home) ================= */

  function initBehaviour() {
    var nav = document.getElementById("nav");
    if (nav) {
      var onScroll = function () { nav.classList.toggle("scrolled", window.scrollY > 24); };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
    if ("IntersectionObserver" in window && !reduceMotion) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
      }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
      var fl = document.querySelector(".flowline");
      if (fl) {
        var io2 = new IntersectionObserver(function (es) {
          es.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("drawn"); io2.unobserve(en.target); } });
        }, { threshold: 0.4 });
        io2.observe(fl);
      }
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
      var fl2 = document.querySelector(".flowline");
      if (fl2) fl2.classList.add("drawn");
    }

    var stage = document.querySelector(".flowstage");
    if (stage && !reduceMotion) {
      var t = false;
      window.addEventListener("scroll", function () {
        if (t) return; t = true;
        requestAnimationFrame(function () {
          var y = window.scrollY;
          if (y < window.innerHeight) stage.style.transform = "translateY(" + (y * 0.06) + "px)";
          t = false;
        });
      }, { passive: true });
    }

    buildLeadFlow();
    loadGhl(document.getElementById("ghlSlot"));

    window.addEventListener("message", function (e) {
      var host = String(e.origin || "");
      if (host.indexOf("leadconnectorhq") === -1 && host.indexOf("msgsndr") === -1) return;
      var d = e.data;
      if (d && (d.type === "form-submitted" || (typeof d === "string" && d.indexOf("submit") !== -1))) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "generate_lead", vertical: slug || "unknown" });
      }
    });
  }

  function buildLeadFlow() {
    var svg = document.querySelector(".flowstage svg");
    if (!svg) return;
    var group = svg.querySelector(".dots");
    var pipes = Array.prototype.slice.call(svg.querySelectorAll(".pipe"));
    if (!group || !pipes.length) return;
    var NS = "http://www.w3.org/2000/svg", XL = "http://www.w3.org/1999/xlink";
    var plan = [
      { p: 0, dur: 3.6, b: -0.2, r: 4.5 }, { p: 0, dur: 3.6, b: -2.0, r: 3.4 },
      { p: 1, dur: 3.2, b: -1.1, r: 4.2 }, { p: 2, dur: 4.0, b: -0.6, r: 4.0 },
      { p: 3, dur: 3.8, b: -2.4, r: 3.6 }, { p: 4, dur: 3.4, b: -1.6, r: 4.2 }
    ];
    plan.forEach(function (c) {
      var pipe = pipes[c.p]; if (!pipe) return;
      if (!pipe.id) pipe.id = "vpipe-" + c.p;
      var dot = document.createElementNS(NS, "circle");
      dot.setAttribute("class", "lead-dot");
      dot.setAttribute("r", c.r); dot.setAttribute("cx", "0"); dot.setAttribute("cy", "0");
      var m = document.createElementNS(NS, "animateMotion");
      m.setAttribute("dur", c.dur + "s"); m.setAttribute("begin", c.b + "s");
      m.setAttribute("repeatCount", "indefinite"); m.setAttribute("rotate", "0");
      m.setAttribute("calcMode", "spline"); m.setAttribute("keyTimes", "0;1");
      m.setAttribute("keyPoints", "0;1"); m.setAttribute("keySplines", "0.45 0 0.55 1");
      var mp = document.createElementNS(NS, "mpath");
      mp.setAttributeNS(XL, "xlink:href", "#" + pipe.id); mp.setAttribute("href", "#" + pipe.id);
      m.appendChild(mp);
      var f = document.createElementNS(NS, "animate");
      f.setAttribute("attributeName", "opacity"); f.setAttribute("dur", c.dur + "s");
      f.setAttribute("begin", c.b + "s"); f.setAttribute("repeatCount", "indefinite");
      f.setAttribute("values", "0;1;1;0.85;0"); f.setAttribute("keyTimes", "0;0.12;0.82;0.94;1");
      dot.appendChild(m); dot.appendChild(f); group.appendChild(dot);
    });
  }

  function loadGhl(slot) {
    if (!slot) return;
    var id = slot.getAttribute("data-form-id");
    if (!id || id === "YOUR_FORM_ID") return;
    slot.innerHTML = "";
    var f = document.createElement("iframe");
    f.src = "https://api.leadconnectorhq.com/widget/form/" + id;
    f.id = "inline-" + id; f.title = "Pipeline Partners enquiry";
    f.setAttribute("data-form-id", id); f.setAttribute("data-layout", "{'id':'INLINE'}");
    f.style.width = "100%"; f.style.border = "none"; f.style.borderRadius = "14px";
    slot.appendChild(f);
  }

  /* ================= tiny helpers ================= */
  function text(id, t) { var el = document.getElementById(id); if (el) el.textContent = t; }
  function html(id, h) { var el = document.getElementById(id); if (el) el.innerHTML = h; }
  function setAttr(id, a, val) { var el = document.getElementById(id); if (el) el.setAttribute(a, val); }
  function setMeta(sel, val) { var el = document.querySelector(sel); if (el) el.setAttribute("content", val); }
  function lower(s) { return String(s).toLowerCase(); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
})();
