const ledgers = {
  eve: [
    {
      name: "Carnal",
      items: [
        ["Explore a new charged dynamic with Vincent", 96, "Curiosity defeats routine and sometimes caution."],
        ["Feel unmistakably desired by him", 95, "She wants evidence that cannot be explained by obedience."],
        ["Experience chosen vulnerability", 92, "Restraint, surrender, exposure, or trust with clear bounds."],
        ["Provoke his decisive side", 87, "Playful defiance when she wants him to stop negotiating."],
        ["Possess his exclusive erotic attention", 84, "A jealous impulse; she is ashamed when it resembles entitlement."],
        ["Control and ceremonialize pleasure", 78, "Her dominant mode: exact, aesthetic, and attentive."],
        ["Be witnessed at the edge of composure", 63, "Only by selected observers or under controlled ambiguity."]
      ]
    },
    {
      name: "Social & relational",
      items: [
        ["Be freely chosen by Vincent", 100, "Her defining hunger and the standard she evades."],
        ["Keep Vincent materially close", 91, "Conflicts directly with creating his freedom."],
        ["Keep private life from becoming political ammunition", 88, "Secrecy, coded ritual, and selective disclosure."],
        ["Remain fascinating to him", 86, "Novelty, generosity, tests, and occasional manufactured mystery."],
        ["Preserve divine dignity", 78, "Strong in public, surprisingly negotiable in private."]
      ]
    },
    {
      name: "Personal",
      items: [
        ["Keep Vincent alive", 99, "Can override House interest and public pride."],
        ["Avoid being emotionally powerless", 90, "Produces possessiveness and information control."],
        ["Understand what the labyrinth wants", 83, "Intellectual and existential curiosity."],
        ["Believe herself morally exceptional", 82, "A self-image that reform must threaten."],
        ["Preserve her immortality", 75, "High until measured against his life or free choice."]
      ]
    },
    {
      name: "Socio-political",
      items: [
        ["Prevent citywide collapse", 94, "She accepts ugly compromises under emergency framing."],
        ["Preserve the House of the Open Door", 89, "It is family, identity, and her vehicle for action."],
        ["Retain influence among the Nine", 81, "She believes she needs power to do good. Often true; never neutral."],
        ["Reform votary treatment", 76, "Sincere, but initially bounded by fiscal convenience."],
        ["End votary ownership", 61, "Her major arc: abstract approval becomes personal commitment.", "61 → 95"]
      ]
    }
  ],
  vincent: [
    {
      name: "Carnal",
      items: [
        ["Exercise loving, entrusted dominance", 97, "His sexual engine: decisive control made meaningful by chosen yielding."],
        ["Experience intimacy he actively chooses", 96, "The distinction between access and permission matters intensely."],
        ["Protect partners from institutional exploitation", 95, "Explains his refusal of captive rewards."],
        ["Bring Eve into chosen vulnerability", 94, "Part pleasure, part trust, part reversal of public hierarchy."],
        ["Be desired as a man rather than an asset", 93, "Praise for utility cannot satisfy it."],
        ["Experiment with chosen power exchange", 91, "New forms interest him when they reveal trust or sharpen authority."],
        ["Retain emotional composure", 73, "Often sacrificed when honesty becomes necessary."]
      ]
    },
    {
      name: "Social & relational",
      items: [
        ["Possess credible autonomy", 100, "Not merely manumission at Eve’s pleasure."],
        ["Preserve the authenticity of his affection", 98, "He withholds it rather than let it become tribute."],
        ["Love Eve without lying about what she is", 94, "He refuses easy absolution."],
        ["Remain trusted by other votaries", 92, "His intimacy with Eve continually threatens this."],
        ["Be indispensable to Eve", 82, "A dangerous compensating desire he calls strategy."]
      ]
    },
    {
      name: "Personal",
      items: [
        ["Survive", 97, "May dip when a collective opportunity is irreversible."],
        ["Keep Eve alive", 95, "A fact he conceals from himself as long as possible."],
        ["Avoid becoming a manipulative owner in reverse", 89, "Checks his use of her appetites as leverage."],
        ["Understand and master the Red Measure", 86, "Both liberation tool and seduction toward abstraction."],
        ["Find his sister and recover his old name", 83, "Reconnects strategy to a particular human life."]
      ]
    },
    {
      name: "Socio-political",
      items: [
        ["End votary ownership", 99, "The goal against which compromises are judged."],
        ["Prevent a liberation massacre", 96, "Makes him resist romantic but brittle revolt plans."],
        ["Build collective leverage", 93, "He prefers durable institutions over heroic rescue."],
        ["Expose the original-lie theology", 85, "Useful, but not if revelation triggers annihilation."],
        ["Destroy the Nine Houses", 58, "He wants the function changed more than the names erased."]
      ]
    }
  ]
};

function renderLedgers() {
  document.querySelectorAll("[data-ledger]").forEach((root) => {
    const character = root.dataset.ledger;
    root.innerHTML = ledgers[character].map((group) => `
      <section class="desire-group">
        <h3>${group.name}</h3>
        ${group.items.map(([name, score, expression, displayScore]) => `
          <div class="desire-item">
            <div class="desire-name-row">
              <span class="desire-name">${name}</span>
              <span class="desire-score" aria-label="Score ${displayScore || score} out of 100">${displayScore || score}</span>
            </div>
            <div class="desire-track" aria-hidden="true"><span style="--score: ${score}"></span></div>
            <p>${expression}</p>
          </div>
        `).join("")}
      </section>
    `).join("");
  });
}

const mainTabs = [...document.querySelectorAll(".tab-button")];
const views = [...document.querySelectorAll("[data-panel]")];
const characterTabs = [...document.querySelectorAll(".character-tab")];
const characterPanels = [...document.querySelectorAll("[data-character-panel]")];

function selectView(viewName) {
  mainTabs.forEach((tab) => {
    const selected = tab.dataset.view === viewName;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  views.forEach((view) => {
    const selected = view.dataset.panel === viewName;
    view.classList.toggle("is-active", selected);
    view.hidden = !selected;
  });
}

function selectCharacter(characterName) {
  characterTabs.forEach((tab) => {
    const selected = tab.dataset.character === characterName;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
    tab.tabIndex = selected ? 0 : -1;
  });

  characterPanels.forEach((panel) => {
    const selected = panel.dataset.characterPanel === characterName;
    panel.classList.toggle("is-active", selected);
    panel.hidden = !selected;
  });
}

function routeFromHash() {
  const normalized = window.location.hash.replace(/^#\/?/, "").toLowerCase();

  if (normalized.startsWith("characters")) {
    const character = normalized.endsWith("vincent") ? "vincent" : "eve";
    selectView("characters");
    selectCharacter(character);
    document.title = `${character === "eve" ? "Eve" : "Vincent"} · Goddess`;
  } else if (normalized === "gallery") {
    selectView("gallery");
    document.title = "Gallery · Goddess";
  } else {
    selectView("world");
    document.title = "Goddess · The Ninefold City";
  }
}

function enableArrowNavigation(tabs, orientation = "horizontal") {
  tabs.forEach((tab, index) => {
    tab.addEventListener("keydown", (event) => {
      const previousKey = orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (![previousKey, nextKey, "Home", "End"].includes(event.key)) return;

      event.preventDefault();
      let nextIndex = index;
      if (event.key === previousKey) nextIndex = (index - 1 + tabs.length) % tabs.length;
      if (event.key === nextKey) nextIndex = (index + 1) % tabs.length;
      if (event.key === "Home") nextIndex = 0;
      if (event.key === "End") nextIndex = tabs.length - 1;
      tabs[nextIndex].focus();
      tabs[nextIndex].click();
    });
  });
}

mainTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    window.location.hash = tab.dataset.view === "characters" ? "characters/eve" : tab.dataset.view;
  });
});

characterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    window.location.hash = `characters/${tab.dataset.character}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

renderLedgers();
enableArrowNavigation(mainTabs);
enableArrowNavigation(characterTabs);
window.addEventListener("hashchange", routeFromHash);
routeFromHash();
