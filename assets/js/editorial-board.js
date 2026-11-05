(() => {
  "use strict";

  const board = document.querySelector("[data-editorial-board]");
  if (!board) return;

  const controls = board.querySelector("[data-board-controls]");
  const search = board.querySelector("[data-board-search]");
  const role = board.querySelector("[data-board-role]");
  const clear = board.querySelector("[data-board-clear]");
  const count = board.querySelector("[data-board-count]");
  const empty = board.querySelector("[data-board-empty]");
  const more = board.querySelector("[data-board-more]");
  const list = board.querySelector("#board-members");
  const pageSize = 12;
  let limit = pageSize;

  const normalise = (text) => text
    .normalize("NFKD")
    .toLowerCase()
    .replace(/\p{M}/gu, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

  const members = [...board.querySelectorAll("[data-board-member]")].map((element) => {
    const affiliation = element.dataset.affiliation || "";
    const location = normalise(affiliation);
    const aliases = /\bunited states(?: of america)?(?: the)?$/.test(location)
      ? "US USA"
      : /\bunited kingdom$/.test(location) ? "UK" : "";

    return {
      element,
      terms: normalise(`${element.dataset.name} ${element.dataset.interests} ${affiliation} ${aliases}`).split(/\s+/),
      roles: element.dataset.roles.split("|"),
    };
  });

  const render = () => {
    const query = normalise(search.value);
    const words = query ? query.split(/\s+/) : [];
    const matches = members.filter((member) =>
      (!role.value || member.roles.includes(role.value)) &&
      words.every((word) => member.terms.some((term) => term.startsWith(word)))
    );
    const visible = new Set(matches.slice(0, limit));

    members.forEach((member) => { member.element.hidden = !visible.has(member); });
    list.hidden = matches.length === 0;
    empty.hidden = matches.length !== 0;
    clear.disabled = !search.value && !role.value;

    const shown = visible.size;
    count.textContent = matches.length === members.length
      ? `${shown} of ${members.length} board members shown.`
      : `${matches.length} ${matches.length === 1 ? "match" : "matches"} · ${shown} shown.`;

    more.hidden = shown >= matches.length;
    more.textContent = `Show ${Math.min(pageSize, matches.length - shown)} more members`;
  };

  const update = () => {
    limit = pageSize;
    render();
  };

  search.addEventListener("input", update);
  search.addEventListener("search", update);
  role.addEventListener("change", update);
  controls.addEventListener("submit", (event) => { event.preventDefault(); });
  controls.addEventListener("reset", (event) => {
    event.preventDefault();
    search.value = "";
    role.value = "";
    update();
    search.focus();
  });
  more.addEventListener("click", () => {
    limit += pageSize;
    render();
  });

  render();
  controls.hidden = false;
})();
