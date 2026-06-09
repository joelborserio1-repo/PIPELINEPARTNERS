/* Pipeline Partners. Campaign landing page (lp.html). No em or en dashes anywhere.
   Reads lp.html?vertical=SLUG and fills the hook from the shared config. */
(function () {
  "use strict";
  var PP = window.PP || { verticals: [], faq: [], brand: {} };
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Resolve the campaign vertical from the query string ---------- */
  var params = new URLSearchParams(window.location.search);
  var slug = (params.get("vertical") || "").toLowerCase();
  var v = PP.verticals.filter(function (x) { return x.slug === slug; })[0];

  if (v) fillVertical(v);
  renderFaq();
  initBehaviour();

  /* ================= rendering ================= */

  function fillVertical(v) {
    // Keyword matched hook for the campaign.
    document.title = v.metaTitle.replace("| Pipeline Partners", "| Get Started");
    setMeta('meta[name="description"]', v.metaDescription);
    setAttr("ogTitle", "content", v.metaTitle.replace(" | Pipeline Partners", ""));
    setAttr("ogDesc", "content", v.metaDescription);

    text("lpKicker", "Exclusive " + v.keyword + " leads");
    text("lpHeadline", v.h1);
    text("lpSub", v.heroLine + " Hit the agreed minimum or you only pay for what arrives.");
    text("lpFormHead", "See if your " + lower(v.short) + " area is open.");
    text("lpFinalHead", "Claim your " + lower(v.short) + " area before someone else does.");

    // Per vertical GoHighLevel form id, if one is set in config.
    var slot = document.getElementById("ghlSlot");
    if (slot && v.ghlFormId && v.ghlFormId !== "YOUR_FORM_ID") slot.setAttribute("data-form-id", v.ghlFormId);
  }

  function renderFaq() {
    var faqList = document.getElementById("faqList");
    if (!faqList || !PP.faq) return;
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
  }

  /* ================= behaviour ================= */

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

    loadGhl(document.getElementById("ghlSlot"));

    // Fire generate_lead (and tag the campaign source) when the GHL form is submitted.
    window.addEventListener("message", function (e) {
      var host = String(e.origin || "");
      if (host.indexOf("leadconnectorhq") === -1 && host.indexOf("msgsndr") === -1) return;
      var d = e.data;
      if (d && (d.type === "form-submitted" || (typeof d === "string" && d.indexOf("submit") !== -1))) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "generate_lead", vertical: slug || "general", source: "campaign-lp" });
      }
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
  function setAttr(id, a, val) { var el = document.getElementById(id); if (el) el.setAttribute(a, val); }
  function setMeta(sel, val) { var el = document.querySelector(sel); if (el) el.setAttribute("content", val); }
  function lower(s) { return String(s).toLowerCase(); }
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
})();
