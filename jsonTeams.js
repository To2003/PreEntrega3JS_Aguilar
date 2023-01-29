const listadoA = document.querySelector("#listadoA");
const teams = fetch("./teams.json");

const constJson = async () => {
    const resp = await fetch("./teams.json");
    const data = await resp.json();
    
    var grupoA = data.filter(function(el) {
        return (el.grupo === "A");
    });
    var grupoB = data.filter(function(el) {
        return (el.grupo === "B");
    });

    grupoA.forEach((post)=> {
        const li = document.createElement("li");
        li.innerHTML = `
            <section class="sectionPaises">
                <img src=${post.bandera} alt="Bandera del Pais">
                <p class="paises">${post.pais}</p>
            </section>
        `;

        listadoA.append(li);
    });
};

constJson();
