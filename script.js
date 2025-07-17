document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("malla-container");

  const state = {};
  const prereqMap = {};
  const unlocksMap = {};

  MALLA_DATA.courses.forEach((c) => {
    state[c.id] = false;
    prereqMap[c.id] = [];
    unlocksMap[c.id] = [];
  });

  MALLA_DATA.links.forEach(({ from, to }) => {
    prereqMap[to].push(from);
    unlocksMap[from].push(to);
  });

  const semesters = {};
  MALLA_DATA.courses.forEach(({ id, semester }) => {
    if (!semesters[semester]) semesters[semester] = [];
    semesters[semester].push(id);
  });

  function createCard(courseId) {
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.id = courseId;

    const title = document.createElement("h3");
    title.textContent = courseId;
    card.appendChild(title);

    const prereqs = prereqMap[courseId];
    if (prereqs.length > 0) {
      const pre = document.createElement("small");
      pre.className = "requirement-text";

      if (prereqs.length > 5) {
        const visible = prereqs.slice(0, 3);
        const remaining = prereqs.length - 3;
        pre.innerHTML = `<b>Requiere:</b> ${visible.join(
          ", "
        )} y ${remaining} más`;
        pre.setAttribute("data-tooltip", `Requiere: ${prereqs.join(", ")}`);
        pre.classList.add("has-tooltip");
      } else {
        pre.innerHTML = `<b>Requiere:</b> ${prereqs.join(", ")}`;
      }

      // Add margin to prereqs if unlocks also exist
      if (unlocksMap[courseId].length > 0) {
        pre.style.marginBottom = "0.6rem";
      }

      card.appendChild(pre);
    }

    const unlocks = unlocksMap[courseId];
    if (unlocks.length > 0) {
      const post = document.createElement("small");
      post.className = "requirement-text";

      if (unlocks.length > 5) {
        const visible = unlocks.slice(0, 3);
        const remaining = unlocks.length - 3;
        post.innerHTML = `<b>Desbloquea:</b> ${visible.join(
          ", "
        )} y ${remaining} más`;
        post.setAttribute("data-tooltip", `Desbloquea: ${unlocks.join(", ")}`);
        post.classList.add("has-tooltip");
      } else {
        post.innerHTML = `<b>Desbloquea:</b> ${unlocks.join(", ")}`;
      }

      card.appendChild(post);
    }

    card.addEventListener("click", () => {
      state[courseId] = !state[courseId];
      render();
    });

    return card;
  }

  function getEstado(courseId) {
    if (state[courseId]) return "completed";
    const pre = prereqMap[courseId];
    return pre.every((p) => state[p]) ? "available" : "blocked";
  }

  function render() {
    container.innerHTML = "";

    Object.entries(semesters)
      .sort(([a], [b]) => a - b)
      .forEach(([sem, courseList]) => {
        const col = document.createElement("div");
        col.className = "semester";

        const title = document.createElement("h2");
        title.textContent = `Semestre ${sem}`;
        col.appendChild(title);

        courseList.forEach((cid) => {
          const card = createCard(cid);
          card.classList.add(getEstado(cid));
          col.appendChild(card);
        });

        container.appendChild(col);
      });
  }

  render();

  // Tooltip functionality
  let tooltip = null;

  function createTooltip() {
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      document.body.appendChild(tooltip);
    }
    return tooltip;
  }

  function showTooltip(element, text) {
    const tooltip = createTooltip();
    tooltip.textContent = text;
    tooltip.classList.add("show");

    const rect = element.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // Position tooltip above the element (considering page scroll)
    let left = rect.left + rect.width / 2 - tooltipRect.width / 2;
    let top = rect.top + window.scrollY - tooltipRect.height - 8;

    // Adjust if tooltip goes off screen horizontally
    if (left < 8) left = 8;
    if (left + tooltipRect.width > window.innerWidth - 8) {
      left = window.innerWidth - tooltipRect.width - 8;
    }

    // Adjust if tooltip goes off screen vertically
    if (top < window.scrollY + 8) {
      top = rect.bottom + window.scrollY + 8;
    }

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  }

  function hideTooltip() {
    if (tooltip) {
      tooltip.classList.remove("show");
    }
  }

  // Add event listeners for tooltips
  document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("has-tooltip")) {
      const tooltipText = e.target.getAttribute("data-tooltip");
      showTooltip(e.target, tooltipText);
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("has-tooltip")) {
      hideTooltip();
    }
  });
});
