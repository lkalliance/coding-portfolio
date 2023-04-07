const list = $("#projects");

for ( let i = 0; i < projects.length; i++ ) {
    const p = projects[i];
    const b = $('<button>', {
        "class": "accordion-button collapsed",
        "type": "button",
        "data-bs-toggle": "collapse",
        "data-bs-target": `#item-${i}`,
        "aria-expanded": "true",
        "aria-controls": `item-${i}`
    });
    const tTitle = $('<strong>').text("Technologies: ");
    const sTechs = $('<span>');
    let techs = "";
    console.log(p.technologies);
    for ( let j = 0; j < p.technologies.length; j++ ) {
        techs += ` ${p.technologies[j]}`;
        if (j !== p.technologies.length - 1) techs += ",";
    }
    sTechs.text(techs);
    b.append(tTitle, sTechs); 
    const h = $('<h2>').append(
        $('<a>', { "href": p.siteUrl, "target": "_blank", "class": "title" }).text(p.title),
        $('<a>', { "href": p.repoUrl, "target": "_blank" }).text("GitHub"),
        b
    )
    const d = $('<div>', {
        "id": `item-${i}`,
        "class": "accordion-collapse collapse"
    });
    const dContent = $('<div>', { "class": "accordion-body" }).text(p.longDesc);
    const dMain = $('<div>', { "class": "accordion-item" }).append(h, d.append(dContent));
    list.append(dMain);
}
